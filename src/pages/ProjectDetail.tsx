import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";
import NotFound from "./NotFound";

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <NotFound />;
  }

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-4 border-b pb-2">
      {children}
    </h2>
  );

  const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <div
      className="text-slate-300 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: children as string }}
    />
  );

  return (
    <div className="container max-w-screen-md py-12 md:py-20">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-2">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {project.longDescription}
        </p>
        <div className="flex gap-2 mt-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <Github className="w-4 h-4 mr-2" /> GitHub
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <LinkIcon className="w-4 h-4 mr-2" /> Live Demo
              </Button>
            </a>
          )}
        </div>
      </header>

      <article>
        <SectionTitle>프로젝트 개요</SectionTitle>
        <h3 className="text-lg font-semibold mt-6 mb-2">문제 정의</h3>
        <Paragraph>{project.problem}</Paragraph>
        <h3 className="text-lg font-semibold mt-6 mb-2">목표</h3>
        <Paragraph>{project.goal}</Paragraph>
        <h3 className="text-lg font-semibold mt-6 mb-2">맡은 역할</h3>
        <Paragraph>{project.role}</Paragraph>

        <SectionTitle>설계 및 개발 과정</SectionTitle>
        <Paragraph>{project.process}</Paragraph>

        <SectionTitle>사용 기술 / 라이브러리 / AI 모델</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        <SectionTitle>AI 활용 사례</SectionTitle>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          "{project.aiFeatures}"
        </blockquote>

        <SectionTitle>결과물</SectionTitle>
        <div className="grid grid-cols-1 gap-6 mt-6">
          {project.results.map((result, index) => (
            <figure key={index}>
              {result.video ? (
                <iframe
                  width="560"
                  height="315"
                  src={result.video.replace(
                    "youtu.be/",
                    "www.youtube.com/embed/"
                  )}
                  title={result.caption}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg border w-full aspect-video"
                ></iframe>
              ) : (
                <img
                  src={result.image}
                  alt={result.caption}
                  className="rounded-lg border"
                />
              )}
              <figcaption className="text-center text-sm text-muted-foreground mt-2">
                {result.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <SectionTitle>주요 이슈와 해결 방안</SectionTitle>
        <Paragraph>{project.issuesAndSolutions}</Paragraph>
      </article>

      <SectionTitle>배운점</SectionTitle>
      <div className="flex flex-wrap gap-2">
        <Paragraph>{project.whatIHaveLearned}</Paragraph>
      </div>

      <div className="mt-20 text-center">
        <Link to="/projects">
          <Button variant="outline">모든 프로젝트 보기</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
