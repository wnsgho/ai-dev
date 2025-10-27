import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useI18n } from "@/contexts/LanguageContext";

const ProjectsPage = () => {
  const { t } = useI18n();
  return (
    <div className="container max-w-screen-lg py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {t("projects.title")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("projects.subtitle")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
