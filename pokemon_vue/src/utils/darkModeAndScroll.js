import searchIcon from '@/assets/img/search_icon.png';
import searchIconDark from '@/assets/img/search_icon_dark.png';

// 클래스 토글 함수
function toggleClass(selector, className) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.classList.toggle(className);
  });
}

// 이미지 토글 함수
function toggleImage(elementId, lightSrc, darkSrc) {
  const img = document.getElementById(elementId);
  img.src = img.src.includes(lightSrc) ? darkSrc : lightSrc;
  // console.log('Image element:', img); // 콘솔에 이미지 태그 출력
}


// 라이트, 다크모드 버튼 토글
function setupDarkModeToggle() {
  document.getElementById('lightDarkToggle').addEventListener('click', function () {
    document.body.classList.toggle('darkMode');


    // 이미지 다크모드 토글
    toggleImage('lang', '/src/assets/img/lang.png', '/src/assets/img/lang_dark.png');
    toggleImage('login', '/src/assets/img/login.png', '/src/assets/img/login_dark.png');

    // 검색 버튼 이미지 토글
    const searchBt = document.getElementById('searchBt');
    if (searchBt) {
      const searchBtStyle = window.getComputedStyle(searchBt);

      searchBt.style.backgroundImage = searchBtStyle.backgroundImage.includes(searchIcon)
        ? `url(${searchIconDark})`
        : `url(${searchIcon})`;
      // console.log('Search button background image:', searchBt.style.backgroundImage); // 검색 버튼 배경 이미지 경로 출력
    }
    // 카드 다크모드 토글
    toggleClass('.cardOne', 'is-dark');
  });
}

// 화면 최상단으로 스크롤
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드러운 스크롤
  });
}

// 페이지 최상단으로 이동하는 버튼에 클릭 이벤트를 추가
function setupScrollToTopButton() {
  const scrollToTopBt = document.querySelector('#scrollUp');
  if (scrollToTopBt) {
    scrollToTopBt.addEventListener('click', scrollToTop);
  }
}

// Export functions if needed elsewhere
export { setupDarkModeToggle, setupScrollToTopButton };