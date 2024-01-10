"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skillText = exports.siteText = exports.introText = exports.headerNav = exports.footerText = exports.contactText = exports.portText = exports.careerText = void 0;

var _imgThumb = _interopRequireDefault(require("../assets/img/imgThumb1.png"));

var _imgThumb2 = _interopRequireDefault(require("../assets/img/imgThumb2.png"));

var _imgThumb3 = _interopRequireDefault(require("../assets/img/imgThumb3.png"));

var _imgThumb4 = _interopRequireDefault(require("../assets/img/imgThumb4.png"));

var _imgThumb5 = _interopRequireDefault(require("../assets/img/imgThumb5.png"));

var _imgThumb6 = _interopRequireDefault(require("../assets/img/imgThumb6.png"));

var _imgThumb7 = _interopRequireDefault(require("../assets/img/imgThumb7.png"));

var _imgThumb8 = _interopRequireDefault(require("../assets/img/imgThumb8.png"));

var _imgThumb9 = _interopRequireDefault(require("../assets/img/imgThumb9.jpg"));

var _imgThumb10 = _interopRequireDefault(require("../assets/img/imgThumb10.jpg"));

var _imgThumb11 = _interopRequireDefault(require("../assets/img/imgThumb11.jpg"));

var _imgThumb12 = _interopRequireDefault(require("../assets/img/imgThumb12.jpg"));

var _imgThumb13 = _interopRequireDefault(require("../assets/img/imgThumb13.jpg"));

var _imgThumb14 = _interopRequireDefault(require("../assets/img/imgThumb14.jpg"));

var _imgThumb15 = _interopRequireDefault(require("../assets/img/imgThumb15.jpg"));

var _imgThumb16 = _interopRequireDefault(require("../assets/img/imgThumb16.jpg"));

var _imgThumb17 = _interopRequireDefault(require("../assets/img/imgThumb17.jpg"));

var _imgThumb18 = _interopRequireDefault(require("../assets/img/imgThumb18.png"));

var _imgThumb19 = _interopRequireDefault(require("../assets/img/imgThumb19.png"));

var _imgThumb20 = _interopRequireDefault(require("../assets/img/imgThumb20.png"));

var _imgThumb21 = _interopRequireDefault(require("../assets/img/imgThumb21.png"));

var _imgThumb22 = _interopRequireDefault(require("../assets/img/imgThumb22.png"));

var _imgThumb23 = _interopRequireDefault(require("../assets/img/imgThumb23.png"));

var _imgThumb24 = _interopRequireDefault(require("../assets/img/imgThumb24.png"));

var _imgThumb25 = _interopRequireDefault(require("../assets/img/imgThumb25.png"));

var _ref;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Career.vue
var careerText = [{
  num: "01",
  corp: "(주)네스트온오프 | 웹퍼블리셔(프리랜서)",
  desc1: "- 한화생명금융서비스 앱/웹사이트 퍼블리싱 SM 담당",
  desc2: "- 앱: 한화FP리크루팅, 오렌지터치 / 웹: 라이프캔버스"
}, {
  num: "02",
  corp: "(주)리플렉션 | 웹퍼블리셔(프리랜서)",
  desc1: "- 현대카드 Universal 프로젝트",
  desc2: "- 퍼블리싱 (Vue.js, Vuetify, SCSS 기반)"
}, {
  num: "03",
  corp: "(주)퍼플아이오 | 웹퍼블리셔(프리랜서)",
  desc1: "- 나이스정보평가 (RM1, KISLINE 사이트 통합)",
  desc2: "- 퍼블리싱 (Vue.js, Vuetify, SCSS 기반)"
}, {
  num: "04",
  corp: "(주)솔루션메이트 | 웹퍼블리셔(프리랜서)",
  desc1: "- 하나캐피탈 중고차 플랫폼 사이트 리뉴얼",
  desc2: "- 퍼블리싱+프론트 개발 일부"
}, {
  num: "05",
  corp: "(주)아이비트레이드 | 웹퍼블리셔(정규직)",
  desc1: "- 자사 홈페이지 제작 및 유지 / 보수",
  desc2: ""
}]; // Port.vue

exports.careerText = careerText;
var portText = [{
  num: "01",
  title: "Portfolio Introduction 소개페이지 (Vue.js)",
  desc: "개인작업물_사이트 리뉴얼 V2 : Portfolio Introduction 소개페이지 (Responsive)",
  img: _imgThumb25["default"],
  view: "https://sgpark94.github.io/portfolio-vue/",
  name: "Portfolio Introduction 소개페이지 V2"
}, {
  num: "02",
  title: "라이프캔버스 LifeCanvas",
  desc: "한화생명금융서비스 FP 마케팅관련 자사 웹사이트",
  img: _imgThumb24["default"],
  view: "https://orangecanvas.hanwhalifefs.com/rc/view/w/RCLCP0101M01",
  name: "라이프캔버스"
}, {
  num: "03",
  title: "오렌지터치 (App)",
  desc: "한화생명금융서비스 FP영업관련 자사 어플리케이션",
  img: _imgThumb23["default"],
  view: "https://orange.hanwhalifefs.com/sm/view/m/pa/PAMAM1031M01",
  name: "오렌지터치 (App)"
}, {
  num: "04",
  title: "한화FP리크루팅 (App)",
  desc: "한화생명금융서비스 FP자격/교육관련 자사 어플리케이션",
  img: _imgThumb22["default"],
  view: "https://play.google.com/store/apps/details?id=com.hanwhalifefs.rc",
  name: "한화FP리크루팅 (App)"
}, {
  num: "05",
  title: "나이스 비즈라인 NICE BizLINE",
  desc: "기업분석 포털 웹사이트 (KISLINE + RM1 통합)",
  img: _imgThumb21["default"],
  view: "https://www.nicebizline.com/",
  name: "NICE BizLINE"
}, {
  num: "06",
  title: "하나드림카 (App)",
  desc: "중고차 거래 플랫폼 (Web + App)",
  img: _imgThumb20["default"],
  view: "ttps://play.google.com/store/apps/details?id=kr.co.hanadreamcar&hl=ko&gl=US",
  name: "하나드림카 (App)"
}, {
  num: "07",
  title: "퍼블리시링크 API (PublishLink API)",
  desc: "토큰포스트(https://www.tokenpost.kr) 사이트 내 뉴스기사 활동관련 (자사코인 등) 자산정보 관리 Admin 웹사이트",
  img: _imgThumb19["default"],
  view: "",
  name: "퍼블리시링크 API (PublishLink API)"
}, (_ref = {
  num: "08",
  title: "퍼블리시 소프트 Introduction V2",
  desc: "description",
  img: _imgThumb18["default"]
}, _defineProperty(_ref, "desc", "퍼블리시 소프트 소개 웹페이지 Version 2"), _defineProperty(_ref, "name", "퍼블리시 소프트 Introduction V2"), _ref), {
  num: "09",
  title: "태재미래전략연구원 TAEJAE FUTURE CONSENSUS INSTITUTE",
  desc: "태재미래전략연구원(구, 여시재) 웹사이트",
  img: _imgThumb["default"],
  view: "https://www.taejaefci.org/",
  name: "태재미래전략연구원 TAEJAE FUTURE CONSENSUS INSTITUTE"
}, {
  num: "10",
  title: "토큰포스트 국문판 Tokenpost KR",
  desc: "EconoTimes와 함께하는 블록체인·디지털 자산 전문 미디어, 비트코인 이더리움 디지털 자산 정보 커뮤니티 웹사이트 (국문판)",
  img: _imgThumb10["default"],
  view: "https://www.tokenpost.kr",
  name: "토큰포스트 국문판 Tokenpost KR"
}, {
  num: "11",
  title: "토큰포스트 영문판 Tokenpost EN",
  desc: "EconoTimes와 함께하는 블록체인·디지털 자산 전문 미디어, 비트코인 이더리움 디지털 자산 정보 커뮤니티 웹사이트 (영문판)",
  img: _imgThumb11["default"],
  view: "https://www.tokenpost.com",
  name: "토큰포스트 영문판 Tokenpost EN"
}, {
  num: "12",
  title: "토큰포스트 일문판 Tokenpost JP",
  desc: "EconoTimes와 함께하는 블록체인·디지털 자산 전문 미디어, 비트코인 이더리움 디지털 자산 정보 커뮤니티 웹사이트 (일본어판)",
  img: _imgThumb12["default"],
  view: "https://www.tokenpost.jp",
  name: "토큰포스트 일문판 Tokenpost JP"
}, {
  num: "13",
  title: "이코노타임즈 Econotimes",
  desc: "대한민국의 국제 경제 전문 미디어 웹사이트",
  img: _imgThumb13["default"],
  view: "http://econotimes.com/",
  name: "이코노타임즈 Econotimes"
}, {
  num: "14",
  title: "한국필란프로티 소사이어티 KSop",
  desc: "한국의 유일한 필란트로피 전문연구 비영리 단체 웹사이트",
  img: _imgThumb14["default"],
  view: "http://sop.or.kr/",
  name: "한국필란프로티 소사이어티 KSop"
}, {
  num: "15",
  title: "빅이슈 코리아 Bigissue Korea",
  desc: "홈리스 관련 비영리, 사회적 기업 웹사이트",
  img: _imgThumb2["default"],
  view: "https://bigissue.kr/",
  name: "빅이슈 코리아 Bigissue Korea"
}, {
  num: "16",
  title: "Publishsoft CMS Admin 관리페이지",
  desc: "Publishsoft CMS Admin 관리페이지",
  img: _imgThumb3["default"],
  view: "",
  name: "Publishsoft CMS Admin 관리페이지"
}, {
  num: "17",
  title: "퍼블리시 소프트 Introduction V1",
  desc: "퍼블리시 소프트 소개 웹페이지 Version 1",
  img: _imgThumb4["default"],
  view: "",
  name: "퍼블리시 소프트 Introduction V1"
}, {
  num: "18",
  title: "퍼플스완 PurpleSwan",
  desc: "행사 및 전문 컨퍼런스 기획 및 운영관련 웹사이트",
  img: _imgThumb5["default"],
  view: "",
  name: "퍼플스완 PurpleSwan"
}, {
  num: "19",
  title: "위즈덤콘서트 Wisdomconcert",
  desc: "퍼플스완에서 파생된 행사 및 전문 컨퍼런스 기획 및 운영관련 웹사이트",
  img: _imgThumb6["default"],
  view: "",
  name: "위즈덤콘서트 Wisdomconcert"
}, {
  num: "20",
  title: "레드락 Redrock",
  desc: "개인작업물_사이트 리뉴얼 : 레드락 비어하우스",
  img: _imgThumb8["default"],
  view: "",
  name: "레드락 Redrock"
}, {
  num: "21",
  title: "팔도 Paldo",
  desc: "개인작업물_사이트 리뉴얼 : 팔도 (Web + Mobile)",
  img: _imgThumb7["default"],
  view: "https://sgpark94.github.io/portfolio/paldo/web/index.html",
  name: "팔도 Paldo"
}, {
  num: "22",
  title: "Portfolio Introduction 소개페이지",
  desc: "개인작업물_사이트 리뉴얼 : Portfolio Introduction 소개페이지 (Responsive)",
  img: _imgThumb9["default"],
  view: "https://sgpark94.github.io/portfolio/introduction",
  name: "Portfolio Introduction 소개페이지"
}, {
  num: "23",
  title: "쿠팡 Coupang",
  desc: "카피사이트",
  img: _imgThumb15["default"],
  view: "https://sgpark94.github.io/portfolio/copySite/coupang/index.html",
  name: "쿠팡 Coupang"
}, {
  num: "24",
  title: "네이버 Naver",
  desc: "카피사이트",
  img: _imgThumb16["default"],
  view: "https://sgpark94.github.io/portfolio/copySite/naver/index.html",
  name: "네이버 Naver"
}, {
  num: "25",
  title: "수박씨 Soobakc",
  desc: "카피사이트",
  img: _imgThumb17["default"],
  view: "https://sgpark94.github.io/portfolio/copySite/soobakc/index.html",
  name: "수박씨 Soobakc"
}]; // Contact.vue

exports.portText = portText;
var contactText = [{
  link: "https://open.kakao.com/o/s07MGH1f",
  title: "KAKAO : 박슬기"
}, {
  link: "mailto:peach_crush@kakao.com",
  title: "MAIL : peach_crush@kakao.com"
}]; // Footer.vue

exports.contactText = contactText;
var footerText = [{
  title: "github",
  desc: "사이드 프로젝트 및 포트폴리오에 대한 정보들이 기록되어 있습니다.",
  // logo: logo01,
  link: "https://github.com/sgpark94"
}, {
  title: "blog",
  desc: "개인적인 개발 기록 및 업무와 관련된 정보들을 남기고 있습니다.",
  // logo: Logo02,
  link: "https://sgpark94.tistory.com/"
}, {
  title: "instagram",
  desc: "저의 일상생활에 대한 기록들이 담겨져 있습니다.",
  // logo: logo03,
  link: "https://www.instagram.com/__remain___/"
}]; // Header.vue

exports.footerText = footerText;
var headerNav = [{
  title: "intro",
  url: "#intro"
}, {
  title: "skill",
  url: "#skill"
}, {
  title: "site",
  url: "#site"
}, {
  title: "portfolio",
  url: "#port"
}, {
  title: "contact",
  url: "#contact"
}]; // Intro.vue

exports.headerNav = headerNav;
var introText = {
  title: "web-publisher",
  desc: ["HTML5 / (S)CSS", "CROSS-BROWSING (IE9+) GIT", "JQUERY / JAVASCRIPT", "VueJS / VUETIFY"]
}; // Site.vue

exports.introText = introText;
var siteText = [{
  text: ["Orange Touch", "오렌지터치(App)"],
  title: "한화생명금융서비스 FP영업관련 자사 어플리케이션",
  img: require("../assets/img/imgThumb23.png"),
  view: "https://orange.hanwhalifefs.com/sm/view/m/pa/PAMAM1031M01",
  info: ["담당업무 : 유지보수", "사용기술 : HTML5/CSS3, CSS Variable, Jquery, Javascript"]
}, {
  text: ["Recruit", "한화FP리크루팅(App)"],
  title: "한화생명금융서비스 FP자격/교육관련 자사 어플리케이션",
  img: require("../assets/img/imgThumb22.png"),
  view: "https://play.google.com/store/apps/details?id=com.hanwhalifefs.rc",
  info: ["담당업무 : 유지보수", "사용기술 : HTML5/CSS3, CSS Variable, Jquery, Javascript"]
}, {
  text: ["LifeCanvas", "라이프캔버스(Web)"],
  title: "한화생명금융서비스 FP 마케팅관련 자사 웹사이트",
  img: require("../assets/img/imgThumb24.png"),
  view: "https://orangecanvas.hanwhalifefs.com/rc/view/w/RCLCP0101M01",
  info: ["담당업무 : 유지보수", "사용기술 : HTML5/CSS3, CSS Variable, Jquery, Javascript, Vue.js"]
}, {
  text: ["NICEBizLINE", "나이스비즈라인(Web)"],
  title: "기업분석 포털 웹사이트 (KISLINE + RM1 통합)",
  img: require("../assets/img/imgThumb21.png"),
  view: "https://www.nicebizline.com",
  info: ["담당업무 : 구축(사이트 통폐햡)", "사용기술 : HTML5/CSS3, CSS Variable, Jquery, Javascript, Vue.js, Vuetify, 컴포넌트화"]
}, {
  text: ["BigIssue Korea", "빅이슈코리아(Web)"],
  title: "홈리스 관련 비영리, 사회적 기업 웹사이트",
  img: require("../assets/img/imgThumb2.png"),
  view: "https://bigissue.kr/",
  info: ["담당업무 : 구축(사이트 통폐햡)", "사용기술 : HTML5/CSS3, CSS Variable, Jquery, Javascript"]
}]; // Skill.vue

exports.siteText = siteText;
var skillText = [{
  title: "다양한 형태의 포트폴리오 제작",
  desc: "프론트앤드 프레임워크 (vue.js / react.js 등) 를 활용한 다양한 형태의 포트폴리오 사이트를 제작"
}, {
  title: "지속적인 개발 블로그 포스팅",
  desc: "운영 중인 개발 블로그 (https://sgpark94.tistory.com/) 에 주 1회 이상 개발관련 포스팅 진행"
}, {
  title: "사이드 프로젝트 만들기",
  desc: "프론트앤드 프레임워크 (vue.js / react.js 등) + DB (MongoDB, SQL 등) 활용한 사이드 프로젝트를 2개 이상 만들기 "
}];
exports.skillText = skillText;