import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { ArrowUpRight } from "lucide-react";

const Index = () => {
  return (
    <>
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-left space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                AI
              </span>{" "}
              로 가치를 만드는
            </h1>{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                <br />
                예비개발자,
                <br />
                <span className="text-[#F596D3]">[</span>
                <span className="font-bold">최준호</span>
                <span className="text-[#F596D3]">]</span>
              </span>{" "}
              입니다.
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            저는 아이디어를 현실로 만드는 과정에서 AI를 적극적으로 활용합니다.
            복잡한 문제를 해결하고, 자동화 프로세스 개발을 즐거워하며, 새로운
            사용자 경험을 창조하는 것에 큰 흥미를 느낍니다.
          </p>

          <div className="space-x-4">
            <Link to="/projects">
              <Button className="w-full md:w-1/3">프로젝트 보기</Button>
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
            AI 활용 경험과 관심도
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            저는 AI를 단순한 도구가 아닌, 창의적인 문제 해결의 파트너로
            생각합니다. 코딩, 기획, 데이터 분석 등 다양한 실무 영역에서 AI를
            활용하여 효율성과 혁신을 추구한 경험이 있습니다.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">1인 개발과 AI의 가능성</h3>
            <p className="text-muted-foreground">
              자체 Deep Research를 구축하는 정보를 접하여 AI를 활용해 시장
              조사를 분석해볼 수 있었고, 전혀 모르는 분야의 개발도
              가능하였습니다. 이를 통해 AI를 활용하면 1인 개발 또는 창업에 큰
              도움이 될 것이라는 가능성을 보았습니다. 실패와 반복을 통해 AI 기반
              제품 개발 사이클을 배워나가는 중입니다.
            </p>
          </div>

          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">개발 생산성 향상</h3>
            <p className="text-muted-foreground">
              코드 생성, 리팩토링, 테스트 케이스 작성 등 개발의 여러 단계에서
              AI를 활용하여 작업 시간을 50% 이상 단축하고, 프로젝트의 더 중요한
              문제 해결에 집중할 수 있었습니다.
            </p>
          </div>
          {/*  */}
          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">서초 AI 칼리지</h3>
            <p className="text-muted-foreground">
              서초 AI 칼리지 교육 프로그램에 합격하여 AI 모델 개발과 활용에 대한
              교육을 받고 있습니다. 이 과정에서 AI 모델의 기초부터 개발까지
              지식을 쌓고 있으며, 추후 진행될 실제 프로젝트에 적용해보는 경험을
              통해 AI 기술에 대한 이해도를 높일 예정입니다.
            </p>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="container py-20 md:py-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mt-3">
            저의 고민과 해결 과정을 담은 프로젝트들입니다.
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
              모든 프로젝트 보기 <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
