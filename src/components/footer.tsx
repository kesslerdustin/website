import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between py-6 md:py-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <FiGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:email@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <FiMail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
} 