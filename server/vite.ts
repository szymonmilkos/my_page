import express, { type Express } from "express";
import fs from "fs";
import path from "path";
// import { createServer as createViteServer, createLogger } from "vite"; // Move these imports inside setupVite
import { type Server } from "http";
// import viteConfig from "../vite.config"; // <-- REMOVE this top-level import
import { nanoid } from "nanoid";

// Keep imports that are needed outside of the dev-only setupVite function
// const viteLogger = createLogger(); // Move this inside setupVite

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  // === Start: Imports and variables only needed for development (Vite) ===
  // Dynamically import Vite and related tools
  const { createServer: createViteServer, createLogger } = await import("vite");
  const viteLogger = createLogger();
  // Dynamically import vite.config (make sure it's compiled to .js in the dist folder)
  const viteConfigModule = await import("../vite.config.js"); // Use .js for compiled output
  const viteConfig = viteConfigModule.default; // Get the default export

  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        // In production, we don't want to exit here based on Vite errors
        // as setupVite isn't called. But in dev, this is fine.
        if (process.env.NODE_ENV === 'development') { // Added a check here just in case
             process.exit(1);
        }
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
  // === End: Imports and variables only needed for development (Vite) ===
}

export function serveStatic(app: Express) {
  // IMPORTANT: Ensure your build process outputs static files to 'dist/public'
  // as configured in your vite.config.ts build.outDir
  const distPath = path.resolve(import.meta.dirname, "..", "dist", "public"); // Corrected path to match vite.config.ts

  if (!fs.existsSync(distPath)) {
     // Log the error message to understand the issue better if the directory is missing
     console.error(`Could not find the build directory: ${distPath}, make sure to build the client first`);
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html for SPA routing
  // Ensure index.html is present in the distPath
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
