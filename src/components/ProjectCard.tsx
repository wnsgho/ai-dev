
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const titleKey = `projects.${project.id}.title`;
  const descriptionKey = `projects.${project.id}.description`;

  return (
    <Link to={`/projects/${project.id}`} className="block group">
      <Card className="h-full flex flex-col transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {t(titleKey)}
            <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
          </CardTitle>
          <CardDescription>{t(descriptionKey)}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
