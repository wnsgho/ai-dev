export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  problem: string;
  goal: string;
  process: string;
  techStack: string[];
  aiFeatures: string;
  results: {
    image: string;
    caption: string;
  }[];
  issuesAndSolutions: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "project-1st",
    title: "원두 쇼핑몰 클론코딩 프로젝트",
    description:
      "원두 쇼핑몰 클론코딩 프로젝트로, 실제 쇼핑몰의 기능을 구현하여 백엔드 기술을 익히는 데 중점을 둔 프로젝트입니다.",
    longDescription: "",
    role: "FE, BE",
    problem:
      "첫 프로젝트로 수업에서 배운 백엔드 기술을 익히고, 실제 서비스 운영에 필요한 기술 스택을 경험하고자 했습니다.",
    goal: "원두 쇼핑몰의 기능을 클론코딩하여 백엔드 기술을 익히고, 실제 서비스 운영에 필요한 기술 스택을 경험하는 것.",
    process:
      "1. 기획: 핵심 기능(주문, 장바구니) 정의 → 2.개발:  → 3. **배포**: Vercel과 AWS를 이용한 배포. 혼자 진행하며 빠른 프로토타이핑과 개선에 집중했습니다.",
    techStack: ["Java", "CSS", "HTML", "JavaScript", "MySQL"],
    aiFeatures:
      "자연어 처리 모델을 fine-tuning하여 Github 커밋 메시지와 README 파일로부터 프로젝트의 목표, 사용 기술, 개발 과정을 요약하는 기능을 구현했습니다. 'AI로 이런 부분을 자동화했다'는 구체적인 사례로, 텍스트 생성 AI를 통해 프로젝트 개요 초안을 자동으로 작성해주어 사용자가 글쓰기 부담을 덜 수 있도록 했습니다.",
    results: [
      {
        image: "",
        caption: "",
      },
      {
        image: "",
        caption: "",
      },
    ],
    issuesAndSolutions:
      "**주요 이슈**: AI가 부정확한 기술 스택을 추출하는 문제. **해결 방안**: 정규표현식과 키워드 기반 필터링을 추가하고, 사용자 피드백을 통해 모델을 지속적으로 개선하는 파이프라인을 구축하여 정확도를 85%까지 향상시켰습니다.",
    githubUrl: "https://github.com",
  },
  {
    id: "emotion-recognition",
    title: "실시간 감정 인식 시스템",
    description:
      "웹캠을 통해 실시간으로 사용자의 표정을 분석하고 7가지 주요 감정을 인식하여 시각화하는 AI 애플리케이션입니다.",
    longDescription:
      "온라인 교육, 고객 서비스 등 다양한 분야에서 사용자의 감정 상태를 파악하여 상호작용의 질을 높이는 데 활용될 수 있습니다. TensorFlow.js를 사용하여 브라우저에서 직접 모델을 실행함으로써 개인정보를 보호하고 빠른 응답 속도를 구현했습니다.",
    role: "프론트엔드 및 AI 모델 통합",
    problem:
      "비대면 상호작용이 늘어나면서 상대방의 감정을 파악하기 어려워 소통의 오해가 생기는 경우가 많습니다.",
    goal: "실시간 영상 분석을 통해 비언어적 소통의 한계를 극복하고, 더 깊이 있는 상호작용을 가능하게 하는 기술적 기반을 마련하는 것.",
    process:
      "1. **기획**: 팀 프로젝트로 진행, 역할 분담(백엔드, 프론트엔드). → 2. **개발**: Scrum 방식으로 2주 스프린트 진행. 저는 TensorFlow.js를 이용한 모델 통합 및 UI 개발 담당. → 3. **배포**: Netlify를 통해 프로토타입 배포.",
    techStack: ["React", "TypeScript", "TensorFlow.js", "Chart.js", "WebRTC"],
    aiFeatures:
      "사전 훈련된 CNN(Convolutional Neural Network) 이미지 분류 모델을 브라우저 환경에 맞게 최적화했습니다. AI를 통해 실시간으로 비디오 스트림의 각 프레임을 분석하고 감정 확률을 계산하는 부분을 혁신적으로 구현하여, 서버 없이 클라이언트 단에서 모든 연산이 이루어지도록 했습니다.",
    results: [
      {
        image:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
        caption: "감정 인식 결과가 차트로 시각화된 화면",
      },
    ],
    issuesAndSolutions:
      "**주요 이슈**: 다양한 조명 환경과 얼굴 각도에 따른 인식률 저하. **해결 방안**: 데이터 증강(Data Augmentation) 기법을 사용하여 학습 데이터셋을 확장하고, 모델의 일반화 성능을 높였습니다. 또한, 인식률이 낮을 경우 '판단 불가' 상태를 추가하여 시스템의 신뢰도를 높였습니다.",
    liveUrl: "#",
  },
];
