export interface Project {
  id: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  longDescription: string;
  longDescription_en?: string;
  period: string; // 작업 기간 (예: "2023.03 - 2023.04")
  teamComposition: string; // 인력 구성 (예: "프론트엔드 2명, 백엔드 3명")
  role: string;
  role_en?: string;
  problem: string;
  problem_en?: string;
  goal: string;
  goal_en?: string;
  process: string;
  process_en?: string;
  techStack: string[];
  aiFeatures?: string;
  aiFeatures_en?: string;
  results: {
    image?: string;
    video?: string; // Optional, in case the result is a video
    link?: string; // Optional, in case the result is a link
    caption: string;
    caption_en?: string;
  }[];
  issuesAndSolutions: string;
  issuesAndSolutions_en?: string;
  whatIHaveLearned?: string;
  whatIHaveLearned_en?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "project-1st",
    title: "원두 쇼핑몰 클론코딩 프로젝트",
    title_en: "Coffee Bean Shopping Mall Clone Coding Project",
    period: "2024.09.06~2024.09.12", // 여기에 작업 기간을 입력하세요
    teamComposition: "6명", // 여기에 인력 구성을 입력하세요`
    description:
      "원두 쇼핑몰 클론코딩 프로젝트로, 실제 쇼핑몰의 기능을 구현하여 백엔드 기술을 익히는 데 중점을 둔 프로젝트입니다.",
    description_en:
      "A clone-coding project of a coffee bean shopping mall to learn backend technologies by implementing real e-commerce features.",
    longDescription: "",
    longDescription_en:
      "As the first project, I aimed to learn backend technologies taught in class and experience stacks needed for real service operations.",
    role: "FE, BE",
    role_en: "FE, BE",
    problem:
      "첫 프로젝트로 수업에서 배운 백엔드 기술을 익히고, 실제 서비스 운영에 필요한 기술 스택을 경험하고자 했습니다.",
    problem_en:
      "As the first project, I wanted to learn backend skills and experience the stacks necessary for operating real services.",
    goal: "원두 쇼핑몰의 기능을 클론코딩하여 백엔드 기술을 익히고, 실제 서비스 운영에 필요한 기술 스택을 경험하는 것.",
    goal_en:
      "Learn backend technologies by clone-coding shopping mall features and experiencing realistic service stacks.",
    process:
      "1. <strong>기획:</strong> 핵심 기능(주문, 장바구니) 정의 <br /> 2. <strong>개발:</strong> 기본 CRUD 내용을 토대로 원두 쇼핑몰 기능을 구현하고, 로컬에서 테스트 하였습니다. <br /> 3. <strong>배포:</strong> Vercel를 이용한 배포. 혼자 진행하며 빠른 프로토타이핑과 개선에 집중했습니다.",
    process_en:
      "1) <strong>Planning:</strong> Define core features (orders, cart) <br /> 2) <strong>Development:</strong> Developed shopping mall features based on basic CRUD learning content and tested locally. <br /> 3) <strong>Deployment:</strong> Deployed via Vercel; focused on rapid prototyping and iteration.",
    techStack: ["Java", "CSS", "HTML", "JavaScript", "MySQL"],
    results: [
      {
        image: "/ai-dev/152514.png",
        caption: "프로젝트 스크린샷",
        caption_en: "Project screenshot",
      },
      {
        image: "",
        caption: "",
      },
    ],
    issuesAndSolutions:
      "- <strong>진행 기간 내 주요 이슈:</strong> <br /> 처음 배운 내용을 토대로 코드를 작성하였으나, 팀원 모두 프론트 작업을 할 수 없었기에 직접 시각적으로 볼 수 없어 교육 초반의 지식으론 오류사항을 파악하기 어려웠습니다. <br /><br /> - <strong>해결 방안:</strong> <br /> 제가 직접 프론트엔드도 클론 코딩으로 작업을 진행하여, 전체적인 흐름을 이해하고 문제를 해결했습니다. 또한, 코드 리뷰를 통해 팀원들과 지식을 공유하며 개선했습니다.",
    issuesAndSolutions_en:
      "- <strong>Issues:</strong> <br /> With limited frontend capacity on the team, it was hard to identify errors early. <br /><br /> - <strong>Solutions:</strong> <br /> I clone-coded the frontend to understand the whole flow and resolve issues, sharing knowledge via code reviews.",
    whatIHaveLearned:
      "- 백엔드 기술 스택을 익히고, 실제 서비스 운영에 필요한 기술 스택을 경험했습니다. <br />- 프론트엔드와 백엔드의 연동을 이해하고, 클론코딩을 통해 실무에서의 개발 과정을 경험했습니다. <br />- GitHub를 통한 협업과 코드 리뷰의 중요성을 깨달았습니다.",
    whatIHaveLearned_en:
      "- Learned backend stacks needed for real operations.<br />- Understood FE/BE integration via clone-coding and real-world processes.<br />- Realized the importance of collaboration and code reviews on GitHub.",
    githubUrl: "https://github.com/backendDev7/NBE2_1_Se7enStarZ",
  },
  {
    id: "project-2nd",
    title: "발주 관리 통합 솔루션",
    title_en: "Order Management Integrated Solution",
    period: "2024.09.23~2024.10.10", // 여기에 작업 기간을 입력하세요
    teamComposition: "6명", // 여기에 인력 구성을 입력하세요`
    description:
      "요식업에 진입하는 자영업자를 타겟팅하는 발주 관리 시스템. 요식업 초기 불필요한 지출 제거, 식재료 손실 최소화를 통한 안정적인 사업 운영을 이룰 수 있도록 발주 재료의 시기별 증감률, 로스율 비교, 평균 단가 조회를 제공하는 통합 솔루션.",
    description_en:
      "An order management system targeting new F&B small businesses, providing seasonal changes, loss-rate comparisons, and average unit prices to reduce unnecessary costs and minimize waste.",
    longDescription: "",
    longDescription_en: "",
    role: "FE, BE \n \n 핵심 기능 중 하나인 주문 관리를 팀원 1명과 함께 구현하였습니다. GET을 통해 사용자, 상품의 DB를 가져와 각 상품id에 맞는 상품을 POST를 통해 주문 목록을 생성, 삭제할 수 있게 구현하고, React 라이브러리의 차트를 활용하여 주문 요약 차트를 구현하였습니다.",
    role_en:
      "FE, BE. Implemented order management with a teammate: fetched users/products via GET, created/deleted orders via POST, and built order summary charts using React charts.",

    problem:
      "(REST API 구현을 위한 두번째 프로젝트)<br /> 한국의 자영업 중 요식업이 80% 차지하는데, 초기 대응 미흡으로 인해 손해를 보는 경우가 대다수입니다. 그 중 매출에 큰 영향을 끼치는 재료 발주는 개인 역량, 또는 오랜 기간 영업경험을 통한 감각에 의존하는 실정이라고 합니다. 재료 발주 관리를 통해 이 격차를 해소하려고자 하였습니다.",
    problem_en:
      "Among self-employed in Korea, F&B is 80% and many suffer losses due to poor initial setup. Ingredient ordering relies on personal experience; we aimed to reduce this gap with order management.",
    goal: "(REST API 구현)<br /> 사용자, 관리자, 상품, 그리고 주문 CRUD를 구현하고, 각 api를 구현하여 실제 동작을 완성하는 것을 목표로 진행했습니다. 요식업에 진입하는 자영업자가 발주할 재료의 시기별 증감률과 평균 단가를 확인하고, 타 사용자의 재료 로스율과 본인의 로스율을 비교하여 초기 세팅에 불필요한 비용을 제거하고, 식재료의 손실을 최소화하여 안정적인 사업을 운영할 수 있도록 솔루션을 제공하는 것이 프로젝트의 목표입니다.",
    goal_en:
      "Implement CRUD for users, admins, products, and orders with working APIs to help new F&B owners track seasonal trends, average unit prices, and loss rates for stable operations.",
    process:
      "1. <strong>기획:</strong> 요구사항 명세서, 핵심 기능(사용자, 관리자, 주문, 상품) 정의, 일정 관리를 위한 Jira 학습/적용 <br /> 2. <strong>개발:</strong> 기술 스택 선정, DB 및 API 설계/구현, 프론트엔드와 백엔드의 주요 기능 개발, 코드 리뷰 및 테스트 <br /> 3. <strong>배포:</strong> 로컬에서 테스트 하였습니다.",
    process_en:
      "1) <strong>Planning:</strong> specs and core features <br /> 2) <strong>Dev:</strong> stack, DB/API design/impl, FE/BE features, reviews/tests <br /> 3) <strong>Deployment:</strong> local testing.",
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
    aiFeatures_en:
      "Used ChatGPT during implementation to write tests (saving 40%+ time) and actively resolve unfamiliar frontend issues.",
    results: [
      {
        image: "",
        video: "https://youtu.be/B_PSvEQ0ryU",
        caption: "프로젝트 소개 영상",
        caption_en: "Project intro video",
      },
      {
        image: "",
        caption:
          "발표 PDF<br />https://drive.google.com/file/d/1a4bOY_HYjeVMXZ5_0dqrHsR2WPJpjFr7/view?usp=drive_link",
        caption_en:
          "Presentation PDF<br />https://drive.google.com/file/d/1a4bOY_HYjeVMXZ5_0dqrHsR2WPJpjFr7/view?usp=drive_link",
      },
    ],
    issuesAndSolutions:
      "- <strong>진행 기간 내 주요 이슈:</strong> <br /> 주문 관리 부분은 CRUD 자체는 완성했음에도 불구하고, 모든 데이터에서 연계되어야 하는 점 때문에 개발 당시 시간이 지체되었습니다. 또한, 프론트로 구현하기 어려움을 겪었습니다.<br /><br /> - <strong>해결 방안:</strong> <br /> 깃허브에 브랜치를 새로 만들어, 테스트용 더미 데이터를 만들고 주문관리 기능을 테스트 하였습니다. 구현 과정에서 ChatGPT를 사용하며 테스트 코드를 작성하여 40% 이상 시간을 절약할 수 있었고, 잘 모르는 분야인 프론트 오류 해결에도 적극적으로 사용하며 완성하였습니다. 이후 팀의 코드가 모두 완성되었을때, 필요한 부분만 수정하여 프로젝트를 완성할 수 있었습니다.",
    issuesAndSolutions_en:
      "- <strong>Issues:</strong> <br /> Although CRUD was done, integration across data slowed development and FE was challenging.<br /><br /> - <strong>Solutions:</strong> <br /> Created a new branch and dummy data for testing; used ChatGPT to write tests (40%+ time saved) and finish the project by adjusting only necessary parts later.",
    whatIHaveLearned:
      "- 협업 툴 Jira, Canva, Github 등을 사용하며 체계적으로 커밋을 관리할 수 있었습니다. 커밋 작성시 기준을 정하여 효율적인 Pull Request를 진행할 수 있었습니다.<br />- Rest API를 활용하여 실시간 데이터를 반영할 수 있다는 것을 확인하고 경험하였습니다.<br />- ChatGPT를 적극적으로 사용해가며 모르는 분야도 지식을 순식간에 습득하고 활용할 수 있다는 것을 깨닫고, 뤼튼과 다른 AI 챗봇 서비스를 사용하기 시작했습니다.",
    whatIHaveLearned_en:
      "- Systematically managed commits using Jira/Canva/GitHub with clear commit standards.<br />- Confirmed real-time data reflection via REST API.<br />- Learned to quickly acquire and apply knowledge using ChatGPT and other AI tools.",
    liveUrl: "",
    githubUrl: "https://github.com/wnsgho/Devcourse-Team2",
  },
  {
    id: "project-3rd",
    title: "독거노인 - 반려동물 매칭 서비스 TENPAWS",
    title_en: "TENPAWS - Pet Matching Service for Elderly Living Alone",
    period: "2024.11.15~2024.12.11", // 여기에 작업 기간을 입력하세요
    teamComposition: "7명(FE 3명, BE 4명)", // 여기에 인력 구성을 입력하세요`
    description:
      "초고령화 사회로 진입한 대한민국의 심각한 사회적 문제를 해결하고, 매년 10만 마리 이상 유기되는 동물들의 생명을 구하기 위해 독거노인 - 반려동물 매칭 서비스를 기획하였습니다.",
    description_en:
      "A service planned to address social issues in a super-aged Korea and save 100k+ abandoned animals annually by matching elderly living alone with shelter pets.",
    longDescription: "",
    longDescription_en: "",
    role: "PM, BE <br /> 프로젝트 매니저 및 깃허브 레포지토리 관리자, Chat GPT를 통한 반려동물 매칭 기능 담당",
    role_en:
      "PM, BE. Project manager and GitHub repo admin; implemented pet matching using ChatGPT.",
    problem:
      "(부트캠프 최종 프로젝트) <br />2024년 7월을 기점으로 대한민국은 초고령화 사회로 진입하여 사회적 문제로 부상하였습니다. 그리고, 유기동물은 매년 10만 마리 이상이라는 사회적 문제가 있습니다. 이 두 가지 사회적 문제를 해결할 방법을 고민하였습니다.",
    problem_en:
      "As of July 2024, Korea entered a super-aged society; also, 100k+ abandoned animals per year is a major issue. We sought solutions to both.",
    goal: "(REST API 구현)<br />이 두 가지를 해결하기 위해 독거 어르신과 보호소의 유기 동물을 매칭함으로써, 서로에게 새로운 가족이 되어주는 따뜻한 연결의 가치를 실현합니다. TENPAWS는 단순한 서비스가 아닌, 사람과 동물 모두의 삶에 긍정적인 변화를 가져오는 사회적 동반자가 되고자 합니다.",
    goal_en:
      "Realize warm connections by matching elderly people with shelter animals, aiming to bring positive changes to both lives.",
    process:
      "1. <strong>기획:</strong> 주제 기획서 작성, 요구사항 명세서, 핵심 기능 정의, 일정 관리를 위한 Jira 학습/적용, ERD 정의 <br />2. <strong>개발:</strong> 기술 스택 선정, DB 및 협업을 위한 API 설계/구현, 주요 기능 개발, 팀 내 코드 리뷰 및 통합 테스트  <br /> 3. <strong>배포:</strong> Docker Compose로 프론트와 백엔드를 병합, AWS(S3, EC2, ECR, CodeDeploy)를 사용하여 서비스 배포",
    process_en:
      "1) <strong>Planning:</strong> topic, requirements, key features, Jira, ERD <br /> 2) <strong>Development:</strong> stack selection, DB & APIs, main features, reviews & integration tests <br /> 3) <strong>Deployment:</strong> Docker Compose + AWS (S3, EC2, ECR, CodeDeploy).",
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
    aiFeatures_en:
      "Implemented AI-based pet matching using ChatGPT to recommend optimal pets based on user preferences and generate greetings.",
    results: [
      {
        image: "",
        video: "https://youtu.be/U2zvPHvb1CQ",
        caption: "프로젝트 소개 영상",
        caption_en: "Project intro video",
      },
    ],
    issuesAndSolutions:
      "- <strong>진행 기간 내 주요 이슈:</strong> <br /> 처음 PM을 맡게 되면서 FE팀과의 협업에 집중하려 노력했지만, BE 업무에 몰두해버리며 PM으로서의 협업 중재 업무에 집중하지 못하였습니다.<br /> FE팀과 협업하며 FE 기술적 지식을 어느 정도 알아야 한다는 어려움이 있었습니다.<br /> 장기 프로젝트를 진행하며 기능 구현 중 라이브러리 사용에 애를 먹기도 했습니다.<br /> - <strong>해결 방안:</strong> <br /> 매일 프로젝트 진행 전 짧은 회의를 통해 업무를 공유하여 진행 정도를 파악했습니다.<br /> 깃허브 관리, 영상 제작 등 비개발 작업을 전담하여 프로젝트 완수를 목표로 진행하였습니다.<br /> FE와 BE의 기능 연동이 잘 되지 않을 때는 FE팀원과의 개인 회의를 통해 서로의 어려운 점을 해결하였습니다.<br /> 기술적 어려움은 팀원과의 트러블슈팅 기록을 남기며 해결하였습니다.",
    issuesAndSolutions_en:
      "- <strong>Issues:</strong> <br /> As first-time PM, I focused too much on BE and less on coordination; FE collaboration required FE knowledge; library hurdles on long-term project.<br /><br /> - <strong>Solutions:</strong> <br /> Daily short syncs, owned non-dev tasks (GitHub, video), resolved FE/BE integration via 1:1s, and kept troubleshooting records.",
    whatIHaveLearned:
      "- 프로젝트 매니저로서 팀원들과의 소통과 협업의 중요성을 깨달았습니다. <br />- 백엔드 개발자로서 Spring Boot와 JPA를 활용한 RESTful API 개발 경험을 쌓았습니다. <br />- AI를 활용하여 반려동물 매칭 기능을 구현하며, AI 기술의 가능성을 체험했습니다.<br />- Github를 사용하며 체계적으로 커밋을 관리하고, 컨벤션을 정하고 프로젝트를 진행하여 코드 리뷰 및 파악에 시간을 줄일 수 있었습니다.<br />- FE 기술적 지식을 상당 부분 흡수하였고, 수정할 수 있게 되었습니다.<br />- ChatGPT, Deepseek 등 AI 툴을 활용하여 오류를 빠르게 잡아내고, 정해진 기간 내에 프로젝트를 완수 할 수 있었습니다.<br />- PM으로서의 업무 조절 능력과 협업하는 능력을 키울 수 있었습니다.",
    whatIHaveLearned_en:
      "- Learned the importance of communication as PM.<br />- Gained RESTful API experience with Spring Boot and JPA.<br />- Experienced AI's potential via pet matching.<br />- Managed commits systematically with conventions to speed reviews.<br />- Absorbed FE knowledge and could modify FE parts.<br />- Used AI tools to debug quickly and meet deadlines.<br />- Improved PM coordination and collaboration skills.",
    liveUrl: "",
    githubUrl: "https://github.com/TenPaws/Team_TenPaws",
  },
  {
    id: "project-4th",
    title: "검색어 트렌드 탐색기",
    title_en: "Search Keyword Trend Explorer",
    period: "2025.06.15", // 여기에 작업 기간을 입력하세요
    teamComposition: "1명", // 여기에 인력 구성을 입력하세요`
    description:
      "네이버에 검색되는 키워드의 검색량을 확인할 수 있는 서비스입니다. <br /> 네이버 검색광고 API를 활용하여, 키워드의 검색지수를 확인할 수 있습니다. <br /> 검색, 문서량은 1년 단위로 제공되며, 월별로 검색량을 확인할 수 있습니다.",
    description_en:
      "A service to check keyword search volumes on Naver using the Search Ad API, including monthly volumes.",
    longDescription:
      "Lovable에서 진행한 AI Showdown 이벤트를 맞이하여 무료로 체험해 볼 수 있어 빠르게 MVP를 개발하기 위해 개인 프로젝트로 진행하였습니다.",
    longDescription_en:
      "Conducted as a personal project to quickly develop an MVP for the AI Showdown event hosted by Lovable.",
    role: "1인 개발",
    role_en: "Solo developer",
    problem:
      "블로그, 유튜브 등을 운영하며 트렌드를 파악하고, 키워드의 검색량을 확인할 수 있는 서비스가 필요했습니다. <br /> 네이버 검색광고 API를 활용하여, 키워드의 검색지수를 확인할 수 있는 서비스를 개발하고자 하였습니다.",
    problem_en:
      "Needed a service to understand trends and check keyword volumes for blogs/YouTube using the Naver Search Ad API.",
    goal: "바이브 코딩만으로 네이버 검색광고 API를 활용하여, 키워드의 검색지수를 확인하고 분석할 수 있는 서비스를 개발하는 것.",
    goal_en:
      "Develop a service to check and analyze keyword search indices using the Naver Search Ad API.",
    process:
      "1. <strong>기획:</strong> 핵심 기능(키워드 검색지수 확인, 월별 검색 기능) 정의 <br /> 2. <strong>개발:</strong> 네이버 검색광고 API를 활용한 키워드 검색지수 확인 및 월별 검색 기능 구현 테스크 명령 <br /> 3. <strong>배포:</strong> lovable 사이트 기능으로 배포",
    process_en:
      "1) <strong>Planning:</strong> Define core features (index checking, monthly search) <br /> 2) <strong>Dev:</strong> Implement with Naver Search Ad API <br /> 3) <strong>Deployment:</strong> as Lovable feature.",
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
    aiFeatures_en:
      "Used Lovable dev to implement keyword index checking and monthly search using the Naver Search Ad API.",
    results: [
      {
        image: "/ai-dev/144349.png",
        video: "",
        caption: "스크린샷",
        caption_en: "Screenshot",
      },
    ],
    issuesAndSolutions:
      "- <strong>진행 기간 내 주요 이슈:</strong> <br /> lovable 페이지 내에서는 세부적인 수정을 하기엔 명령에 시간이 걸리기 때문에 효율적이지 않았습니다. <br /><br /> - <strong>해결 방안:</strong> <br /> VSCode에서 세부적인 개발과 디버깅을 진행하고, lovable dev를 통해 배포하였습니다. <br /> 또한, Supabase를 활용하여 데이터베이스를 구축하고, Tailwind CSS를 활용하여 UI를 구성하였습니다.",
    issuesAndSolutions_en:
      "- <strong>Issues:</strong> <br /> Command-based edits on Lovable were inefficient for detailed changes. <br /><br /> - <strong>Solutions:</strong> <br /> Did detailed dev/debugging in VSCode and deployed via Lovable; used Supabase and Tailwind CSS.",
    whatIHaveLearned:
      "- Lovable dev를 활용하여, 네이버 검색광고 API를 활용한 키워드 검색지수 확인, 월별 검색 기능 구현을 빠르게 MVP로 개발할 수 있었습니다. <br />- Supabase를 활용하여 데이터베이스를 구축하고, Tailwind CSS를 활용하여 UI를 구성하며 새로운 기술을 배울 수 있었습니다.",
    whatIHaveLearned_en:
      "- Rapid MVP with Lovable dev and Naver Search Ad API.<br />- Built DB with Supabase and UI with Tailwind, learning new tech.",
    liveUrl: "https://search-trend-explorer.lovable.app",
    githubUrl: "https://github.com/wnsgho/search-trend-explorer",
  },
  {
    id: "project-5th",
    title: "지식그래프 기반 계약서 분석 시스템:ContractGraphRAG",
    title_en:
      "Knowledge Graph-based Contract Analysis System: ContractGraphRAG",
    period: "2025.07.10~2025.09.30",
    teamComposition: "2명",
    description:
      "서초 AI 칼리지에 참가하여 유일한 상장인 우수상으로 수료한 프로젝트입니다. 지식그래프와 LLM을 결합하여, 계약서의 표면적 의미를 넘어 숨겨진 관계와 맥락까지 추론하는 AI 시스템을 개발하였습니다.",
    description_en:
      "An award-winning project at Seocho AI College: combining a knowledge graph with LLMs to infer hidden relationships beyond surface text in contracts.",
    longDescription: "",
    longDescription_en: "",
    role: "교육 과정 내 기업 제안 프로젝트로 시작하여, End-to-End에 핵심적으로 참여",
    role_en:
      "Core contributor from ideation to end-to-end delivery in an industry-sponsored educational project.",
    problem:
      "최근 계약 관련 분쟁 건수가 역대 최다를 기록하는 등 독소조항, 불공정거래, 정보 비대칭으로 인한 사회적 피해가 급증하고 있습니다. 전문가의 검토는 높은 비용과 시간이 소요되고, 특히 IT/금융 등 산업 융합으로 계약 내용이 고도로 복잡해짐에 따라 일반인은 물론 전문가조차 조항간의 숨겨진 연관관계를 파악하기 어려워 위험을 놓치는 경우가 빈발하고 있습니다.",
    problem_en:
      "Contract disputes are rising due to unfair clauses and information asymmetry; complex contracts make hidden relationships hard even for experts.",
    goal: "본 프로젝트에서는 지식그래프와 LLM을 결합하여, 계약서의 표면적 의미를 넘어 숨겨진 관계와 맥락까지 추론하는 AI 시스템 개발을 기획하였습니다. 이를 통해 사용자는 다른 AI 채팅 서비스에 입력하지 못하는 아무리 긴 계약서라도 독소조항, 조항간의 관계를 보다 쉽게 찾아낼 수 있습니다.",
    goal_en:
      "Develop an AI system combining knowledge graphs and LLMs to infer hidden relationships and context within contracts for easier toxic clause detection.",
    process:
      "1. <strong>기획:</strong> 기획회의, 논문등 기술 자료 조사 및 검증, 핵심 기능 정의, 스키마 정의 <br /> 2. <strong>개발:</strong> 기술 스택 선정, Cursor AI, gemini cli 등 AI 도구를 사용한 개발, 코드 리뷰 및 통합 테스트",
    process_en:
      "1) <strong>Planning:</strong> research and schema definition <br /> 2) <strong>Development:</strong> stack selection, AI-assisted dev (Cursor, gemini cli), reviews and integration tests.",
    techStack: [
      "Python",
      "Miniconda",
      "Fastapi",
      "Neo4j",
      "Swagger",
      "Langchain",
      "AutoSchemaKG",
    ],
    aiFeatures:
      "OpenAI의 gpt-4.1 모델을 주축으로 인스트럭션 튜닝을 진행하여, 지식그래프 구축 과정, 위험 분석 및 상담 챗봇 구현까지 적용하였습니다.",
    aiFeatures_en:
      "Instruction-tuned GPT-4.1 for knowledge graph construction, risk analysis, and a consultation chatbot.",
    results: [
      {
        image: "/ai-dev/graphrag.png",
        caption: "계약서 분석 AI 시스템의 지식그래프 시각화 화면",
        caption_en:
          "Knowledge graph visualization of the contract analysis AI system",
      },
      {
        image: "/ai-dev/graphrag-result2.png",
        caption:
          "자체적으로 4종의 복잡한 투자매매계약서를 100개의 심층 질문으로 성능을 실험해본 결과, 일반 LLM은 정답률이 76.5%, 지식그래프RAG를 통한 정답률이 89.3%로 나타났습니다.",
        caption_en:
          "On 100 in-depth questions across 4 complex investment contracts, baseline LLM scored 76.5% vs. 89.3% with GraphRAG.",
      },
    ],
    issuesAndSolutions:
      "- <strong>진행 기간 내 주요 이슈:</strong> <br /> 1. 6주간 월~토까지 공유오피스를 활용하여 팀원과 지식그래프 관련 논문을 조사한 끝에, 지식그래프 구조의 데이터를 자동으로 구축한 논문을 발견하였으나, 우리의 프로젝트에 맞게 구현하기 위한 시간이 너무 부족하였습니다. <br /> 2. 가설, 즉 지식그래프+LLM의 성능을 검증하는 면에서 팀원과의 의견 불일치가 있었습니다. <br /><br /> - <strong>해결방안:</strong> <br /> 1. 프로젝트에 맞춤 구현을 해결하기 위해 최대한 클론코딩을 먼저하기로 결정하였고, AutoSchemaKG 논문에 따라 지식그래프 구축 기능을 구현하였습니다. 이후 목적에 맞게 기능을 추가하고 다듬는 과정으로 개발에 필요한 시간을 최소 1주 줄일 수 있었습니다. 2. 먼저 팀원의 의견을 존중하여 복잡한 내용의 계약서를 먼저 만들어 실험할 수 있는 환경을 만들었고, 저는 제 의견으로 설득할 수 있는 결과를 따로 시간을 투자하여 만들었습니다. 결론적으로 팀원의 방식으로는 검증할 수 있는 결과가 나오지 않아 설득할 수 있었습니다.",
    issuesAndSolutions_en:
      "- <strong>Issues:</strong> <br /> 1. Limited time to tailor automatic KG construction from papers to our project. <br /> 2. Disagreement on the hypothesis of KG+LLM performance validation. <br /><br /> - <strong>Solutions:</strong> <br /> 1. Prioritized clone-coding per AutoSchemaKG, then customized—cutting at least a week. <br /> 2. Prioritized complex contracts for testing environment, then invested time to create results that could be convincing.",
    whatIHaveLearned:
      "- AI 도구(cursor, gemini cli)를 사용한 클론코딩 경험에서, AI에게 PRD문서를 지속적으로 수정하도록 하고 직접 검증하는 작업이 AI성능에 영향을 끼친다는 것을 알았습니다.<br />- 기존 LLM의 한계(표면적 텍스트 검색, 키워드 기반의 단편적인 정보검색, 맥락 이해 부족)를 GraphRAG로 접근하여 숨겨진 연결고리까지 탐지하고 관계를 추론하여 구조화된 지식 네트워크를 통한 심층 분석(멀티홈 추론)이 가능해진 것을 볼 수 있었습니다. 이를 통해 파인튜닝도 중요하지만, 인스트럭션 튜닝을 통한 성능 개선 경험을 할 수 있었습니다.<br />- 자체적으로 4종의 복잡한 투자매매계약서를 100개의 심층 질문으로 성능을 실험해본 결과, 일반 LLM은 정답률이 76.5%, 지식그래프RAG를 통한 정답률이 89.3%로 나타났습니다.",
    whatIHaveLearned_en:
      "- Continuous PRD updates and validation significantly affect AI performance.<br />- Overcame conventional LLM limits via GraphRAG for deep, structured inference.<br />- Achieved 89.3% accuracy vs. 76.5% baseline in our evaluation.",
    liveUrl: "",
    githubUrl: "https://github.com/wnsgho/legal-full",
  },
];
