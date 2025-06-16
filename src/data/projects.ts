export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  period: string; // 작업 기간 (예: "2023.03 - 2023.04")
  teamComposition: string; // 인력 구성 (예: "프론트엔드 2명, 백엔드 3명")
  role: string;
  problem: string;
  goal: string;
  process: string;
  techStack: string[];
  aiFeatures?: string;
  results: {
    image?: string;
    video?: string; // Optional, in case the result is a video
    link?: string; // Optional, in case the result is a link
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
    period: "2024.09.06~2024.09.12", // 여기에 작업 기간을 입력하세요
    teamComposition: "6명", // 여기에 인력 구성을 입력하세요`
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
    results: [
      {
        image: "/ai-dev/152514.png",
        caption: "프로젝트 스크린샷",
      },
      {
        image: "",
        caption: "",
      },
    ],
    issuesAndSolutions:
      "진행 기간 내 주요 이슈: 처음 배운 내용을 토대로 코드를 작성하였으나, 팀원 모두 프론트 작업을 할 수 없었기에 직접 시각적으로 볼 수 없어 교육 초반의 지식으론 오류사항을 파악하기 어려웠습니다. 해결 방안: 제가 직접 프론트엔드도 클론 코딩으로 작업을 진행하여, 전체적인 흐름을 이해하고 문제를 해결했습니다. 또한, 코드 리뷰를 통해 팀원들과 지식을 공유하며 개선했습니다.",
    whatIHaveLearned:
      "- 백엔드 기술 스택을 익히고, 실제 서비스 운영에 필요한 기술 스택을 경험했습니다. <br />- 프론트엔드와 백엔드의 연동을 이해하고, 클론코딩을 통해 실무에서의 개발 과정을 경험했습니다. <br />- GitHub를 통한 협업과 코드 리뷰의 중요성을 깨달았습니다.",
    githubUrl: "https://github.com/backendDev7/NBE2_1_Se7enStarZ",
  },
  {
    id: "project-2nd",
    title: "발주 관리 통합 솔루션",
    period: "2024.09.23~2024.10.10", // 여기에 작업 기간을 입력하세요
    teamComposition: "6명", // 여기에 인력 구성을 입력하세요`
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
    aiFeatures:
      "구현 과정에서 ChatGPT를 사용하며 테스트 코드를 작성하여 40% 이상 시간을 절약, 잘 모르는 분야인 프론트 오류 해결에도 적극적으로 사용하며 완성.",
    results: [
      {
        image: "",
        video: "https://youtu.be/B_PSvEQ0ryU",
        caption: "프로젝트 소개 영상",
      },
      {
        image: "",
        caption:
          "발표 PDF<br />https://drive.google.com/file/d/1a4bOY_HYjeVMXZ5_0dqrHsR2WPJpjFr7/view?usp=drive_link",
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
    title: "독거노인 - 반려동물 매칭 서비스 TENPAWS",
    period: "2024.11.15~2024.12.11", // 여기에 작업 기간을 입력하세요
    teamComposition: "7명(FE 3명, BE 4명)", // 여기에 인력 구성을 입력하세요`
    description:
      "초고령화 사회로 진입한 대한민국의 심각한 사회적 문제를 해결하고, 매년 10만 마리 이상 유기되는 동물들의 생명을 구하기 위해 독거노인 - 반려동물 매칭 서비스를 기획하였습니다.",
    longDescription: "",
    role: "PM, BE <br /> 프로젝트 매니저 및 깃허브 레포지토리 관리자, Chat GPT를 통한 반려동물 매칭 기능 담당",
    problem:
      "(부트캠프 최종 프로젝트) <br />2024년 7월을 기점으로 대한민국은 초고령화 사회로 진입하여 사회적 문제로 부상하였습니다. 그리고, 유기동물은 매년 10만 마리 이상이라는 사회적 문제가 있습니다. 이 두 가지 사회적 문제를 해결할 방법을 고민하였습니다.",
    goal: "(REST API 구현)<br />이 두 가지를 해결하기 위해 독거 어르신과 보호소의 유기 동물을 매칭함으로써, 서로에게 새로운 가족이 되어주는 따뜻한 연결의 가치를 실현합니다. TENPAWS는 단순한 서비스가 아닌, 사람과 동물 모두의 삶에 긍정적인 변화를 가져오는 사회적 동반자가 되고자 합니다.",
    process:
      "1. 기획: 주제 기획서 작성, 요구사항 명세서, 핵심 기능 정의, 일정 관리를 위한 Jira 학습/적용, ERD 정의 →<br />2.개발: 기술 스택 선정, DB 및 협업을 위한 API 설계/구현, 주요 기능 개발, 팀 내 코드 리뷰 및 통합 테스트  →<br /> 3. 배포: Docker Compose로 프론트와 백엔드를 병합, AWS(S3, EC2, ECR, CodeDeploy)를 사용하여 서비스 배포",
    techStack: [
      "Java",
      "Gradle",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Swagger",
      "JWT",
      "OAuth2",
      "Tomcat",
    ],
    aiFeatures:
      "ChatGPT를 활용하여 반려동물 매칭 기능을 구현하였습니다. 사용자가 입력한 선호 정보를 바탕으로 AI가 등록된 동물 데이터에서 최적의 반려동물을 추천해주고 인삿말을 더하는 기능을 개발하였습니다.",
    results: [
      {
        image: "",
        video: "https://youtu.be/U2zvPHvb1CQ",
        caption: "프로젝트 소개 영상",
      },
    ],
    issuesAndSolutions:
      "진행 기간 내 주요 이슈: 처음 PM을 맡게 되면서 FE팀과의 협업에 집중하려 노력했지만, BE 업무에 몰두해버리며 PM으로서의 협업 중재 업무에 집중하지 못하였습니다.<br /> FE팀과 협업하며 FE 기술적 지식을 어느 정도 알아야 한다는 어려움이 있었습니다.<br /> 장기 프로젝트를 진행하며 기능 구현 중 라이브러리 사용에 애를 먹기도 했습니다.<br />해결 방안: 매일 프로젝트 진행 전 짧은 회의를 통해 업무를 공유하여 진행 정도를 파악했습니다.<br /> 깃허브 관리, 영상 제작 등 비개발 작업을 전담하여 프로젝트 완수를 목표로 진행하였습니다.<br /> FE와 BE의 기능 연동이 잘 되지 않을 때는 FE팀원과의 개인 회의를 통해 서로의 어려운 점을 해결하였습니다.<br /> 기술적 어려움은 팀원과의 트러블슈팅 기록을 남기며 해결하였습니다.",
    whatIHaveLearned:
      "- 프로젝트 매니저로서 팀원들과의 소통과 협업의 중요성을 깨달았습니다. <br />- 백엔드 개발자로서 Spring Boot와 JPA를 활용한 RESTful API 개발 경험을 쌓았습니다. <br />- AI를 활용하여 반려동물 매칭 기능을 구현하며, AI 기술의 가능성을 체험했습니다.<br />- Github를 사용하며 체계적으로 커밋을 관리하고, 컨벤션을 정하고 프로젝트를 진행하여 코드 리뷰 및 파악에 시간을 줄일 수 있었습니다.<br />- FE 기술적 지식을 상당 부분 흡수하였고, 수정할 수 있게 되었습니다.<br />- ChatGPT, Deepseek 등 AI 툴을 활용하여 오류를 빠르게 잡아내고, 정해진 기간 내에 프로젝트를 완수 할 수 있었습니다.<br />- PM으로서의 업무 조절 능력과 협업하는 능력을 키울 수 있었습니다.",
    liveUrl: "",
    githubUrl: "https://github.com/TenPaws/Team_TenPaws",
  },
  {
    id: "project-4th",
    title: "검색어 트렌드 탐색기",
    period: "2025.06.15", // 여기에 작업 기간을 입력하세요
    teamComposition: "1명", // 여기에 인력 구성을 입력하세요`
    description:
      "네이버에 검색되는 키워드의 검색량을 확인할 수 있는 서비스입니다. <br /> 네이버 검색광고 API를 활용하여, 키워드의 검색지수를 확인할 수 있습니다. <br /> 검색, 문서량은 1년 단위로 제공되며, 월별로 검색량을 확인할 수 있습니다.",
    longDescription:
      "Lovable에서 진행한 AI Showdown 이벤트를 맞이하여 무료로 체험해 볼 수 있어 빠르게 MVP를 개발하기 위해 개인 프로젝트로 진행하였습니다.",
    role: "1인 개발",
    problem:
      "블로그, 유튜브 등을 운영하며 트렌드를 파악하고, 키워드의 검색량을 확인할 수 있는 서비스가 필요했습니다. <br /> 네이버 검색광고 API를 활용하여, 키워드의 검색지수를 확인할 수 있는 서비스를 개발하고자 하였습니다.",
    goal: "바이브 코딩만으로 네이버 검색광고 API를 활용하여, 키워드의 검색지수를 확인하고 분석할 수 있는 서비스를 개발하는 것.",
    process:
      "1. 기획: 핵심 기능(키워드 검색지수 확인, 월별 검색 기능) 정의 → 2. 개발: 네이버 검색광고 API를 활용한 키워드 검색지수 확인 및 월별 검색 기능 구현 테스크 명령 → 3. 배포: lovable 사이트 기능으로 배포",
    techStack: [
      "Google labs Jules",
      "Lovable dev",
      "Naver Search Ad API",
      "Supabase",
      "TypeScript",
      "Gemini",
    ],
    aiFeatures:
      "Lovable dev를 활용하여, 네이버 검색광고 API를 활용한 키워드 검색지수 확인, 월별 검색 기능을 구현하였습니다.",
    results: [
      {
        image: "/ai-dev/144349.png",
        video: "",
        caption: "스크린샷",
      },
    ],
    issuesAndSolutions:
      "진행 기간 내 주요 이슈: lovable 페이지 내에서는 세부적인 수정을 하기엔 명령에 시간이 걸리기 때문에 효율적이지 않았습니다. <br />해결 방안: VSCode에서 세부적인 개발과 디버깅을 진행하고, lovable dev를 통해 배포하였습니다. <br /> 또한, Supabase를 활용하여 데이터베이스를 구축하고, Tailwind CSS를 활용하여 UI를 구성하였습니다.",
    whatIHaveLearned:
      "- Lovable dev를 활용하여, 네이버 검색광고 API를 활용한 키워드 검색지수 확인, 월별 검색 기능 구현을 빠르게 MVP로 개발할 수 있었습니다. <br />- Supabase를 활용하여 데이터베이스를 구축하고, Tailwind CSS를 활용하여 UI를 구성하며 새로운 기술을 배울 수 있었습니다.",
    liveUrl: "https://search-trend-explorer.lovable.app",
    githubUrl: "https://github.com/wnsgho/search-trend-explorer",
  },
];
