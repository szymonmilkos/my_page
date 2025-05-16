import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A365D] text-white py-8 px-6 text-sm text-center">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4">© {new Date().getFullYear()} | Connecting the past, present, and future of scientific discovery</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-white hover:text-[#45C7B3] transition duration-300">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-white hover:text-[#45C7B3] transition duration-300">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-white hover:text-[#45C7B3] transition duration-300">
            <Github className="h-5 w-5" />
          </a>
          <a href="mailto:contact@example.com" className="text-white hover:text-[#45C7B3] transition duration-300">
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="text-white/60 text-xs">
          Design concept by Szymon Miłkoś | Built with AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
