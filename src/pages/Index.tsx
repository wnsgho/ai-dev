import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-left space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            {i18n.language === "ko" ? (
              <>
                <h1 className="inline">
                  <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                    {t("main.title1")}
                  </span>{" "}
                  {t("main.title2")}
                </h1>{" "}
                <h2 className="inline">
                  <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                    <br />
                    {t("main.title3")}
                    <br />
                    <span className="font-bold"> {t("main.title4")} </span>
                  </span>{" "}
                  {t("main.title5")}
                </h2>
              </>
            ) : (
              <>
                <h1 className="inline">
                  {t("main.title1")}{" "}
                  <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                    {t("main.title2")}
                  </span>
                </h1>{" "}
                <h2 className="inline">
                  <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                    <br />
                    {t("main.title3")}
                    <br />
                    <span className="font-bold"> {t("main.title4")} </span>
                  </span>{" "}
                  {t("main.title5")}
                </h2>
              </>
            )}
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            {t("main.subtitle")}
          </p>

          <div className="space-x-4">
            <Link to="/projects">
              <Button className="w-full md:w-1/3">
                {t("main.projects_button")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero cards */}
        <div className="hidden lg:block">
          <div className="w-full max-w-md">
            <div className="relative transform-gpu transition-all duration-300 ease-out hover:scale-105">
              <ProjectCard project={projects[0]} />
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
            {t("ai.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            {t("ai.subtitle")}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">{t("ai.card1.title")}</h3>
            <p className="text-muted-foreground">{t("ai.card1.content")}</p>
          </div>

          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">{t("ai.card2.title")}</h3>
            <p className="text-muted-foreground">{t("ai.card2.content")}</p>
          </div>
          {/*  */}
          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">{t("ai.card3.title")}</h3>
            <p className="text-muted-foreground">{t("ai.card3.content")}</p>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="container py-20 md:py-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("featured.title")}
          </h2>
          <p className="text-lg text-muted-foreground mt-3">
            {t("featured.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline">
              {t("featured.all_projects_button")}{" "}
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
