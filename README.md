# gettimarket

final_yerim

예림님 프로젝트
개발
멘토
2025년 7월 31일
비어 있음
이걸 노션페이지로 따로 만드시거나, 아니면 readme.md 파일에 그대로 붙여넣어서 프로젝트 설명으로 사용하시면 됩니다!
프로젝트 개요
프로젝트명
getti - 물물교환 마켓
개발기간
시작일: 2025년 7월 31일
종료일: 2025년 8월 18일
서비스 소개
서비스 개념
사용하지 않는 물건을 다른 사람의 물건과 교환할 수 있는 온라인 플랫폼
타겟 사용자
주 타겟: 20-30대 직장인, 대학생
서브 타겟: 환경을 생각하는 모든 연령층
사용자 특성:
불필요한 물건 처리에 어려움을 겪는 사람
새로운 물건을 저렴하게 얻고 싶은 사람
환경 보호에 관심이 있는 사람
기술 스택
HTML5: 웹 페이지 구조
CSS3: 스타일링 및 반응형 디자인
JavaScript (ES6+): 동적 기능 구현
아키텍처: MPA (Multi Page Application)
백엔드 서비스 - Firebase
배포 및 호스팅
GitHub Pages: 메인 배포 플랫폼
GitHub: 코드 버전 관리
Firebase Console: 백엔드 서비스 관리
Figma
페이지별 요구사항 명세
폴더구조(임시)
getti/
├── index.html # 메인 페이지
├── login.html # 로그인 페이지
├── signup.html # 회원가입 페이지
├── products.html # 상품 목록 페이지
├── product-detail.html # 상품 상세 페이지
├── add-product.html # 상품 등록 페이지
├── exchange-request.html # 교환 신청 페이지
├── exchange-status.html # 교환 현황 페이지
├── mypage.html # 마이페이지
├── review.html # 교환 후기 페이지 (넣을까말까...고민중..)
│
├── css/
│ ├── common.css # 공통 스타일
│ ├── main.css # 메인 페이지 스타일
│ ├── auth.css # 인증 페이지 스타일
│ ├── products.css # 상품 관련 스타일
│ ├── exchange.css # 교환 관련 스타일
│ └── mypage.css # 마이페이지 스타일
│
├── js/
│ ├── firebase-config.js # Firebase 설정
│ ├── auth-manager.js # 인증 관리
│ ├── auth.js # 회원가입/로그인
│ ├── login.js # 로그인 전용
│ ├── main.js # 메인 페이지
│ ├── products.js # 상품 관련 기능
│ ├── exchange.js # 교환 관련 기능
│ ├── mypage.js # 마이페이지
│ └── utils.js # 유틸리티 함수
│
├── images/
│ ├── logo.png # 로고
│ ├── default-product.jpg # 기본 상품 이미지
│ └── icons/ # 아이콘들
│
├── components/
│ ├── header.html # 공통 헤더
│ ├── footer.html # 공통 푸터
│ └── nav.html # 네비게이션
│
├── data/
│ └── categories.json # 상품 카테고리
│
├── README.md # 프로젝트 설명
└── .gitignore # Git 무시 파일
