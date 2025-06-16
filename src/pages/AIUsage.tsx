import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AIUsagePage = () => {
  const aiTools = [
    {
      name: "OpenWebUI",
      description:
        "프로그래밍 문제 해결, 문서화에 활용, RAG(정보 검색) 기능을 통한 지식 확장 및 습득",
      useCases: [
        "오류 메시지 분석 및 해결 방안 도출",
        "API키를 활용한 외부 AI 서비스(Openai 등) 연동",
        "새로운 기능 구현을 위한 아이디어 및 접근 방식 도출",
        "프롬프트 엔지니어링을 통한 AI 모델 최적화",
      ],
      tips: "Ollama로 모델을 실행하고, OpenWebUI를 통해 다양한 AI 모델을 활용할 수 있습니다.",
    },
    {
      name: "VsCode: Cline, Roo Code 확장프로그램",
      description: "실시간 코드 자동 완성, 반복적인 코드 작성 자동화",
      useCases: [
        "테스트 코드 자동 생성",
        "보일러플레이트 코드 신속한 작성",
        "API 엔드포인트 구현 효율화",
        "타입 정의 및 인터페이스 작성 지원",
      ],
      tips: "Cline과 Roo Code를 활용하여 코드 작성 속도를 크게 향상시킬 수 있습니다. 특히, 반복적인 패턴을 자동으로 인식하고 적용하는 데 유용합니다.",
    },
    {
      name: "Obsidian: SmartComposer 플러그인",
      description:
        "노트 앱 obsidian에서 AI를 활용한 새로운 지식 습득 및 문서화",
      useCases: [
        "AI 기반 노트 작성 및 요약",
        "지식 그래프 생성 및 관리",
        "문서 간 연결 및 관계 분석",
        "AI를 활용한 정보 검색 및 추천",
      ],
      tips: "SmartComposer 플러그인을 통해 Obsidian에서 AI를 활용하여 노트를 작성하고, 지식을 체계적으로 관리할 수 있습니다. AI를 활용하여 새로운 지식을 지식기반으로 넣어두면 학습 시 굉장히 유용합니다.",
    },
    {
      name: "n8n",
      description: "(노코드 워크플로우 자동화 도구)",
      useCases: [
        "데이터 처리 자동화",
        "외부 API와의 연동",
        "이벤트 기반 워크플로우 트리거",
      ],
      tips: "n8n을 활용하여 다양한 API와 연동하여 워크플로우를 자동화할 수 있습니다. 예를 들어, 특정 이벤트 발생 시 자동으로 데이터를 처리하거나 알림을 보낼 수 있습니다.",
    },
    {
      name: "Jules(Google Labs)",
      description:
        "깃허브 기반 코드 작성 시 AI 기반 자동 완성 및 코드 리뷰 지원",
      useCases: [
        "코드 리뷰 및 피드백 제공",
        "코드 작성 시 실시간 자동 완성",
        "코드 품질 향상을 위한 리팩토링 제안",
        "코드 스타일 및 컨벤션 준수 지원",
      ],
      tips: "코드 작성 속도를 높이고, 코드 품질을 향상시킬 수 있습니다. 또한, 디버깅에 유용합니다.",
    },
    // 다른 AI 도구들도 추가 가능
  ];

  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          사용중인 AI 활용 도구들
        </h1>
        <p className="text-xl text-muted-foreground">
          개발 생산성을 높이기 위한 AI 도구 활용 방법을 소개합니다
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {aiTools.map((tool) => (
          <Card key={tool.name} className="bg-card">
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">주요 활용 사례</h3>
              <ul className="list-disc pl-4 mb-4 space-y-1 text-muted-foreground">
                {tool.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
              <div className="mt-4">
                <Badge variant="secondary">💡 Tip</Badge>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tool.tips}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AIUsagePage;
