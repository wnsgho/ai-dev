import { NavLink } from "react-router-dom";
import { Github, BookText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../ui/ThemeToggle";
import { useI18n } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useI18n();

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-foreground/80 ${
      isActive ? "text-foreground" : "text-foreground/60"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <NavLink to="/" className="mr-6 flex items-center space-x-2">
          <BookText className="h-6 w-6" />
          <span className="font-bold sm:inline-block">
            {t("common.siteTitle")}
          </span>
        </NavLink>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={navLinkClasses}>
            {t("common.nav.home")}
          </NavLink>
          <NavLink to="/projects" className={navLinkClasses}>
            {t("common.nav.projects")}
          </NavLink>
          {/* <NavLink to="/ai-usage" className={navLinkClasses}>
            {t("common.nav.aiUsage")}
          </NavLink> */}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
              className="gap-2"
              aria-label="Toggle language"
              title={`${
                language === "ko" ? t("common.lang.en") : t("common.lang.ko")
              }`}
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{language.toUpperCase()}</span>
            </Button>
          </div>
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
