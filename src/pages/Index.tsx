
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
                개발자, [이름]
              </span>{" "}
              입니다.
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            저는 아이디어를 현실로 만드는 과정에서 AI를 적극적으로 활용합니다. 복잡한 문제를 해결하고, 개발 프로세스를 자동화하며, 새로운 사용자 경험을 창조하는 것에 큰 흥미를 느낍니다.
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

      <section id="ai-usage" className="container py-20 md:py-24 bg-muted/50 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI 활용 사례</h2>
          <p className="text-lg text-muted-foreground mb-12">
            저는 AI를 단순한 도구가 아닌, 창의적인 문제 해결의 파트너로 생각합니다. 코딩, 기획, 데이터 분석 등 다양한 실무 영역에서 AI를 활용하여 효율성과 혁신을 추구한 경험이 있습니다.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">1인 창업과 AI</h3>
            <p className="text-muted-foreground">AI를 활용해 시장 조사를 자동화하고, 사용자 피드백을 분석하여 MVP(최소기능제품)를 빠르게 개발하고 개선한 1인 창업 경험이 있습니다. 실패와 반복을 통해 AI 기반 제품 개발 사이클을 배웠습니다.</p>
          </div>
          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">데이터 분석 및 기능 제안</h3>
            <p className="text-muted-foreground">대규모 로그 데이터를 AI로 분석하여 사용자 행동 패턴을 파악하고, 이를 기반으로 서비스 개선을 위한 구체적인 기능을 제안하여 A/B 테스트에서 유의미한 성과를 거두었습니다.</p>
          </div>
          <div className="p-6 bg-background rounded-lg border">
            <h3 className="text-xl font-bold mb-2">개발 생산성 향상</h3>
            <p className="text-muted-foreground">코드 생성, 리팩토링, 테스트 케이스 작성 등 개발의 여러 단계에서 AI를 활용하여 작업 시간을 50% 이상 단축하고, 더 중요한 문제 해결에 집중할 수 있었습니다.</p>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="container py-20 md:py-32">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground mt-3">저의 고민과 해결 과정을 담은 대표 프로젝트입니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.slice(0, 2).map(p => <ProjectCard key={p.id} project={p} />)}
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
