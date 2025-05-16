import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || typeof email !== "string") {
        return res.status(400).json({ message: "Valid email is required" });
      }
      
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      const subscriber = await storage.addSubscriber(email);
      return res.status(201).json(subscriber);
    } catch (error) {
      console.error("Error subscribing:", error);
      return res.status(500).json({ message: "Failed to subscribe" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
