import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";
import NotFound from "./NotFound";
import { useTranslation } from "react-i18next";

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { t } = useTranslation();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <NotFound />;
  }

  const getTranslated = (key: string) => {
    const fullKey = `projects.${projectId}.${key}`;
    const translated = t(fullKey);
    // If translation not found, return the original value from projects.ts
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return translated === fullKey ? project[key] : translated;
  };

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-4 border-b pb-2">
      {children}
    </h2>
  );

  const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <div
      className="text-slate-300 dark:text-slate-200 text-slate-900 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: children as string }}
    />
  );

  return (
    <div className="container max-w-screen-md py-12 md:py-20">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-2">
          {getTranslated("title")}
        </h1>
        <p className="text-xl text-muted-foreground">
          {getTranslated("longDescription")}
        </p>
        <div className="mt-4 space-y-1 text-sm text-slate-900 dark:text-slate-400">
          {project.period && (
            <p className="flex items-center gap-2">
              <span className="text-base">📅</span> 작업 기간: {project.period}
            </p>
          )}
          {project.teamComposition && (
            <p className="flex items-center gap-2">
              <span className="text-base">👥</span> 인력 구성:{" "}
              {project.teamComposition}
            </p>
          )}
        </div>
        <div className="flex gap-2 mt-6"></div>
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
        <Paragraph>{getTranslated("problem")}</Paragraph>
        <h3 className="text-lg font-semibold mt-6 mb-2">목표</h3>
        <Paragraph>{getTranslated("goal")}</Paragraph>
        <h3 className="text-lg font-semibold mt-6 mb-2">맡은 역할</h3>
        <Paragraph>{getTranslated("role")}</Paragraph>

        <SectionTitle>설계 및 개발 과정</SectionTitle>
        <Paragraph>{getTranslated("process")}</Paragraph>

        <SectionTitle>사용된 기술/라이브러리</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {project.aiFeatures && (
          <>
            <SectionTitle>AI 활용 사례</SectionTitle>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              {getTranslated("aiFeatures")}
            </blockquote>
          </>
        )}

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
              ) : result.image ? (
                <img
                  src={result.image}
                  alt={result.caption}
                  className="rounded-lg border"
                />
              ) : result.caption.includes("https://") ? (
                <a
                  href={result.caption.split("https://")[1].split("<br />")[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-4 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <LinkIcon className="w-4 h-4" />
                    <span>{result.caption.split("<br />")[0]}</span>
                  </div>
                </a>
              ) : null}
              <figcaption className="text-center text-sm text-muted-foreground mt-2">
                {result.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <SectionTitle>주요 이슈와 해결 방안</SectionTitle>
        <Paragraph>{getTranslated("issuesAndSolutions")}</Paragraph>
      </article>

      <SectionTitle>배운점</SectionTitle>
      <div className="flex flex-wrap gap-2">
        <Paragraph>{getTranslated("whatIHaveLearned")}</Paragraph>
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
