// 헤더 로드 함수
async function loadHeader() {
  // 비동기 함수를 선언합니다! (파일 로드는 시간이 걸리므로 비동기 처리)
  try {
    // 에러 처리 구문 (파일 로드가 실패할 수도 있으니까 에러처리를 해주는거에요.)
    const response = await fetch("components/header.html");
    // fetch(): 파일을 가져오는 함수
    const headerHTML = await response.text();
    // await: 파일 로드가 완료될 때까지 기다림. components/header.html 파일을 요청하고 있는 것
    document.getElementById("header-container").innerHTML = headerHTML;
    // HTML에서 id가 "header-container"인 요소를 찾고,
    // .innerHTML = headerHTML: 그 요소 안에 헤더 HTML 코드를 집어넣는다는 뜻
  } catch (error) {
    console.error("헤더 로드 실패:", error);
    // 만약 실패하면 이런 에러가 뜬다
  }
}

// 푸터 로드 함수
async function loadFooter() {
  try {
    const response = await fetch("components/footer.html");
    const footerHTML = await response.text();
    document.getElementById("footer-container").innerHTML = footerHTML;
  } catch (error) {
    console.error("푸터 로드 실패:", error);
  }
}

// 페이지 로드 시 공통 컴포넌트 로드
document.addEventListener("DOMContentLoaded", function () {
  loadHeader();
  loadFooter();
});
// 실제 동작 과정
// 1, 사용자가 웹페이지 접속
// 2. HTML 문서 로드 완료
// 3. DOMContentLoaded 이벤트 발생
// 4. loadHeader() 실행 → header.html 파일 내용을 header-container에 삽입
// 5. loadFooter() 실행 → footer.html 파일 내용을 footer-container에 삽입
