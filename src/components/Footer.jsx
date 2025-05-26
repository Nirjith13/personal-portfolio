import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-card relative border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="text-center md:text-left">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nirjith. All rights reserved.
        </p>
      </div>

      <div className="flex space-x-4">
        <a
          href="https://github.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/Nirjith13"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
