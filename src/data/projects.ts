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
    video?: string; // Optional, in case the result is a video
    caption: string;
  }[];
  issuesAndSolutions: string;
  whatIHaveLearned?: string;
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
      "진행 기간 내 주요 이슈: 처음 배운 내용을 토대로 코드를 작성하였으나, 팀원 모두 프론트 작업을 할 수 없었기에 직접 시각적으로 볼 수 없어 교육 초반의 지식으론 오류사항을 파악하기 어려웠습니다. 해결 방안: 제가 직접 프론트엔드도 클론 코딩으로 작업을 진행하여, 전체적인 흐름을 이해하고 문제를 해결했습니다. 또한, 코드 리뷰를 통해 팀원들과 지식을 공유하며 개선했습니다.",
    githubUrl: "https://github.com/backendDev7/NBE2_1_Se7enStarZ",
  },
  {
    id: "project-2nd",
    title: "발주 관리 통합 솔루션",
    description:
      "요식업에 진입하는 자영업자를 타겟팅하는 발주 관리 시스템. 요식업 초기 불필요한 지출 제거, 식재료 손실 최소화를 통한 안정적인 사업 운영을 이룰 수 있도록 발주 재료의 시기별 증감률, 로스율 비교, 평균 단가 조회를 제공하는 통합 솔루션.",
    longDescription: "",
    role: "FE, BE \n \n 핵심 기능 중 하나인 주문 관리를 팀원 1명과 함께 구현하였습니다. GET을 통해 사용자, 상품의 DB를 가져와 각 상품id에 맞는 상품을 POST를 통해 주문 목록을 생성, 삭제할 수 있게 구현하고, React 라이브러리의 차트를 활용하여 주문 요약 차트를 구현하였습니다.",

    problem:
      "(REST API 구현을 위한 두번째 프로젝트)<br /> 한국의 자영업 중 요식업이 80% 차지하는데, 초기 대응 미흡으로 인해 손해를 보는 경우가 대다수입니다. 그 중 매출에 큰 영향을 끼치는 재료 발주는 개인 역량, 또는 오랜 기간 영업경험을 통한 감각에 의존하는 실정이라고 합니다. 재료 발주 관리를 통해 이 격차를 해소하려고자 하였습니다.",
    goal: "(REST API 구현)<br /> 사용자, 관리자, 상품, 그리고 주문 CRUD를 구현하고, 각 api를 구현하여 실제 동작을 완성하는 것을 목표로 진행했습니다. 요식업에 진입하는 자영업자가 발주할 재료의 시기별 증감률과 평균 단가를 확인하고, 타 사용자의 재료 로스율과 본인의 로스율을 비교하여 초기 세팅에 불필요한 비용을 제거하고, 식재료의 손실을 최소화하여 안정적인 사업을 운영할 수 있도록 솔루션을 제공하는 것이 프로젝트의 목표입니다.",
    process:
      "1. 기획: 요구사항 명세서, 핵심 기능(사용자, 관리자, 주문, 상품) 정의, 일정 관리를 위한 Jira 학습/적용 →<br /> 2.개발: 기술 스택 선정, DB 및 API 설계/구현, 프론트엔드와 백엔드의 주요 기능 개발, 코드 리뷰 및 테스트 →<br /> 3. 배포: 로컬에서 테스트 하였습니다.",
    techStack: [
      "React",
      "Java",
      "Spring Boot",
      "JPA",
      "QueryDSL",
      "H2",
      "Gradle",
      "GitHub",
      "Jira",
      "Notion",
      "Slack",
      "Canva",
    ],
    aiFeatures: "",
    results: [
      {
        image: "",
        video: "https://youtu.be/B_PSvEQ0ryU",
        caption: "프로젝트 소개 영상",
      },
    ],
    issuesAndSolutions:
      "진행 기간 내 주요 이슈: 주문 관리 부분은 CRUD 자체는 완성했음에도 불구하고, 모든 데이터에서 연계되어야 하는 점 때문에 개발 당시 시간이 지체되었습니다. 또한, 프론트로 구현하기 어려움을 겪었습니다.<br /><br />해결 방안: 깃허브에 브랜치를 새로 만들어, 테스트용 더미 데이터를 만들고 주문관리 기능을 테스트 하였습니다. 구현 과정에서 ChatGPT를 사용하며 테스트 코드를 작성하여 40% 이상 시간을 절약할 수 있었고, 잘 모르는 분야인 프론트 오류 해결에도 적극적으로 사용하며 완성하였습니다. 이후 팀의 코드가 모두 완성되었을때, 필요한 부분만 수정하여 프로젝트를 완성할 수 있었습니다.",
    whatIHaveLearned:
      "- 협업 툴 Jira, Canva, Github 등을 사용하며 체계적으로 커밋을 관리할 수 있었습니다. 커밋 작성시 기준을 정하여 효율적인 Pull Request를 진행할 수 있었습니다.<br />- Rest API를 활용하여 실시간 데이터를 반영할 수 있다는 것을 확인하고 경험하였습니다.<br />- ChatGPT를 적극적으로 사용해가며 모르는 분야도 지식을 순식간에 습득하고 활용할 수 있다는 것을 깨닫고, 뤼튼과 다른 AI 챗봇 서비스를 사용하기 시작했습니다.",
    liveUrl: "",
    githubUrl: "https://github.com/wnsgho/Devcourse-Team2",
  },
  {
    id: "project-3rd",
    title: "",
    description: "",
    longDescription: "",
    role: "",
    problem: "",
    goal: "",
    process:
      "1. 기획: 팀 프로젝트로 진행, 역할 분담(백엔드, 프론트엔드). → 2. 개발: Scrum 방식으로 2주 스프린트 진행. → 3. 배포: Netlify를 통해 프로토타입 배포.",
    techStack: ["React", "TypeScript", "TensorFlow.js", "Chart.js", "WebRTC"],
    aiFeatures: "",
    results: [
      {
        image: "",
        video: "https://youtu.be/U2zvPHvb1CQ",
        caption: "프로젝트 소개 영상",
      },
    ],
    issuesAndSolutions: "주요 이슈: 해결 방안: ",
    liveUrl: "https://youtu.be/U2zvPHvb1CQ",
    githubUrl: "https://github.com/TenPaws/Team_TenPaws",
  },
];
