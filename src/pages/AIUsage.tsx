import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useI18n } from "@/contexts/LanguageContext";

const AIUsagePage = () => {
  const { t, language } = useI18n();
  const aiTools = [
    {
      name:
        language === "ko"
          ? "이미지 생성 툴(ComfyUI, Stable Diffusion)"
          : "Image Generation (ComfyUI, Stable Diffusion)",
      description:
        language === "ko"
          ? "이미지 생성 툴을 활용하여 제품 디자인 및 영상 제작에 활용"
          : "Use image generation tools for product design and video creation",
      useCases:
        language === "ko"
          ? ["디자인 및 영상 제작", "컨텐츠 생성"]
          : ["Design & video production", "Content creation"],
      tips:
        language === "ko"
          ? "다양한 이미지 생성 툴을 활용하여 제품 디자인 및 영상 제작에 활용할 수 있습니다. 예) 유튜브 컨텐츠, 소셜 미디어 컨텐츠 등"
          : "Leverage various image models for product design and video content (e.g., YouTube, social).",
    },
    {
      name:
        language === "ko"
          ? "목소리 생성 툴(GPT-SoVIT)"
          : "Voice Generation (GPT-SoVIT)",
      description:
        language === "ko"
          ? "목소리 생성 툴을 활용하여 유튜브 영상 제작에 활용"
          : "Use voice generation for YouTube videos",
      useCases:
        language === "ko"
          ? ["유튜브 AI 영상 제작"]
          : ["YouTube AI video production"],
      tips:
        language === "ko"
          ? "GPT-SoVIT을 활용하여 유튜브 AI 영상 제작에 활용할 수 있습니다."
          : "Create AI YouTube videos with GPT-SoVIT.",
    },
    {
      name: "OpenWebUI",
      description:
        language === "ko"
          ? "프로그래밍 문제 해결, 문서화에 활용, RAG(검색 증강 생성) 기능을 통한 지식 확장 및 습득"
          : "Programming problem-solving, documentation, and RAG-based knowledge expansion",
      useCases:
        language === "ko"
          ? [
              "오류 메시지 분석 및 해결 방안 도출",
              "API키를 활용한 외부 AI 서비스(Openai 등) 연동",
              "새로운 기능 구현을 위한 아이디어 및 접근 방식 도출",
              "프롬프트 엔지니어링을 통한 AI 모델 최적화",
            ]
          : [
              "Analyze errors and derive fixes",
              "Integrate external AI services via API keys",
              "Generate ideas and approaches for new features",
              "Optimize models via prompt engineering",
            ],
      tips:
        language === "ko"
          ? "Ollama로 모델을 실행하고, OpenWebUI를 통해 다양한 AI 모델을 활용할 수 있습니다."
          : "Run models with Ollama and access them via OpenWebUI.",
    },
    {
      name:
        language === "ko"
          ? "VsCode: Cline, Roo Code 확장프로그램"
          : "VSCode: Cline, Roo Code",
      description:
        language === "ko"
          ? "실시간 코드 자동 완성, 반복적인 코드 작성 자동화"
          : "Real-time code completion and automation",
      useCases:
        language === "ko"
          ? [
              "테스트 코드 자동 생성",
              "보일러플레이트 코드 신속한 작성",
              "API 엔드포인트 구현 효율화",
              "타입 정의 및 인터페이스 작성 지원",
            ]
          : [
              "Auto-generate tests",
              "Rapid boilerplate creation",
              "Faster API endpoint implementation",
              "Assist types and interfaces",
            ],
      tips:
        language === "ko"
          ? "Cline과 Roo Code를 활용하여 코드 작성 속도를 크게 향상시킬 수 있습니다. 특히, 반복적인 패턴을 자동으로 인식하고 적용하는 데 유용합니다."
          : "Cline and Roo Code significantly speed up coding, especially repetitive patterns.",
    },
    {
      name:
        language === "ko"
          ? "Obsidian: SmartComposer 플러그인"
          : "Obsidian: SmartComposer",
      description:
        language === "ko"
          ? "노트 앱 obsidian에서 AI를 활용한 새로운 지식 습득 및 문서화"
          : "Use AI in Obsidian for learning and documentation",
      useCases:
        language === "ko"
          ? [
              "AI 기반 노트 작성 및 요약",
              "지식 그래프 생성 및 관리",
              "문서 간 연결 및 관계 분석",
              "AI를 활용한 정보 검색",
              "앱 자체를 RAG 기능으로 활용",
            ]
          : [
              "AI-powered notes and summaries",
              "Knowledge graph creation and management",
              "Link and relation analysis across docs",
              "Search with AI",
              "Use app as RAG",
            ],
      tips:
        language === "ko"
          ? "SmartComposer 플러그인을 통해 Obsidian에서 AI를 활용하여 노트를 작성하고, 지식을 체계적으로 관리할 수 있습니다. AI를 활용하여 새로운 지식을 지식기반으로 넣어두면 학습 시 굉장히 유용합니다."
          : "SmartComposer helps write notes and manage knowledge systematically.",
    },
    {
      name: "n8n",
      description:
        language === "ko"
          ? "(노코드 워크플로우 자동화 도구)"
          : "(No-code workflow automation)",
      useCases:
        language === "ko"
          ? [
              "데이터 처리 자동화",
              "외부 API와의 연동",
              "이벤트 기반 워크플로우 트리거",
            ]
          : [
              "Automate data processing",
              "Integrate external APIs",
              "Event-driven triggers",
            ],
      tips:
        language === "ko"
          ? "n8n을 활용하여 다양한 API와 연동하여 워크플로우를 자동화할 수 있습니다. 예를 들어, 특정 이벤트 발생 시 자동으로 데이터를 처리하거나 알림을 보낼 수 있습니다."
          : "Automate workflows by integrating various APIs; trigger actions on events.",
    },
    {
      name: language === "ko" ? "Jules(Google Labs)" : "Jules (Google Labs)",
      description:
        language === "ko"
          ? "깃허브 기반 코드 작성 시 AI 기반 자동 완성 및 코드 리뷰 지원"
          : "AI-based autocompletion and code review for GitHub workflows",
      useCases:
        language === "ko"
          ? [
              "코드 리뷰 및 피드백 제공",
              "코드 작성 시 실시간 자동 완성",
              "코드 품질 향상을 위한 리팩토링 제안",
              "코드 스타일 및 컨벤션 준수 지원",
            ]
          : [
              "Code reviews and feedback",
              "Real-time autocompletion",
              "Refactoring suggestions",
              "Style and convention enforcement",
            ],
      tips:
        language === "ko"
          ? "코드 작성 속도를 높이고, 코드 품질을 향상시킬 수 있습니다. 또한, 디버깅에 유용합니다."
          : "Helps speed coding and improve quality; useful for debugging too.",
    },
    // 다른 AI 도구들도 추가 가능
  ];

  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          {t("aiUsage.title")}
        </h1>
        <p className="text-xl text-muted-foreground">{t("aiUsage.subtitle")}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {aiTools.map((tool) => (
          <Card key={tool.name} className="bg-card">
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">{t("aiUsage.useCases")}</h3>
              <ul className="list-disc pl-4 mb-4 space-y-1 text-slate-600 dark:text-slate-200">
                {tool.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
              <div className="mt-4">
                <Badge variant="secondary">💡{t("aiUsage.tip")}</Badge>
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
