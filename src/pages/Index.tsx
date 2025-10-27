import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useI18n();
  return (
    <>
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-left space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                {t("index.hero.title1")}
              </span>{" "}
              {t("index.hero.title2_prefix")}
            </h1>{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                <br />
                {t("index.hero.title3")}
                <br />
                <span className="font-bold">{t("index.hero.nameSuffix")}</span>
              </span>{" "}
              {t("index.hero.title4")}
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            {t("index.hero.desc")}
          </p>

          <div className="space-x-4">
            <Link to="/projects">
              <Button className="w-full md:w-1/3">{t("index.hero.cta")}</Button>
            </Link>
          </div>
        </div>

        {/* Hero cards */}
        <div className="hidden lg:block">
          <div className="w-full max-w-md">
            <div className="relative transform-gpu transition-all duration-300 ease-out hover:scale-105">
              <ProjectCard project={projects[4]} />
            </div>
          </div>
        </div>
      </section>

      <section
        id="ai-usage"
        className="container py-20 md:py-24 bg-muted/50 rounded-lg"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("index.aiSection.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            {t("index.aiSection.desc")}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">
              {t("index.aiSection.card1_title")}
            </h3>
            <p className="text-muted-foreground">
              {t("index.aiSection.card1_desc")}
            </p>
          </div>

          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">
              {t("index.aiSection.card2_title")}
            </h3>
            <p className="text-muted-foreground">
              {t("index.aiSection.card2_desc")}
            </p>
          </div>
          {/*  */}
          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">
              {t("index.aiSection.card3_title")}
            </h3>
            <p className="text-muted-foreground">
              {t("index.aiSection.card3_desc")}
            </p>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="container py-20 md:py-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("index.aiSection.featured_title")}
          </h2>
          <p className="text-lg text-muted-foreground mt-3">
            {t("index.aiSection.featured_desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.slice(1, 5).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline">
              {t("common.nav.viewAllProjects")}{" "}
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
