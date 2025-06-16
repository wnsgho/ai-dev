import { NavLink } from "react-router-dom";
import { Github, BookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-foreground/80 ${
      isActive ? "text-foreground" : "text-foreground/60"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <NavLink to="/" className="mr-6 flex items-center space-x-2">
          <BookText className="h-6 w-6" />
          <span className="font-bold sm:inline-block">My Portfolio</span>
        </NavLink>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/projects" className={navLinkClasses}>
            Projects
          </NavLink>
          <NavLink to="/ai-usage" className={navLinkClasses}>
            AI 활용 경험
          </NavLink>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <a
            href="https://github.com/wnsgho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
