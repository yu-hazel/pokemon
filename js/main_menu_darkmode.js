// pokemon main js

// menuBt 클릭시 메뉴 모달
document.addEventListener('DOMContentLoaded', () => {
    // console.log('DOMContentLoaded');

    const menuBt = document.querySelector('#menuBt');
    // console.log('menuBt:', menuBt);  // Debug line
    if (menuBt) {
        menuBt.addEventListener('click', () => {
            // console.log('메뉴 클릭');
            const menu = document.querySelector('.menu');
            if (menu) {
                menu.classList.toggle('on');
                // console.log('Menu class toggled');
            } else {
                console.error('Menu element not found');
            }
        });
    } else {
        console.error('Menu button element not found');
    }

    const ballBt = document.getElementById('monsterBall');
    // console.log('ballBt:', ballBt);  // Debug line
    if (ballBt) {
        // console.log('Adding event listener to ballBt'); // 추가된 디버그 로그
        ballBt.addEventListener('click', () => {
            console.log('몬스터 볼 클릭');
            const menu = document.querySelector('.menu');
            if (menu) {
                menu.classList.toggle('on');
                // console.log('Menu class toggled by monster ball');
            } else {
                console.error('Menu element not found');
            }
        });
    } else {
        console.error('Monster Ball button element not found');
    }
});

// 다크모드 토글 리팩토링
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
    img.src = img.src.endsWith(lightSrc) ? darkSrc : lightSrc;
}

// 라이트, 다크모드 버튼 토글
document.getElementById('lightDarkToggle').addEventListener('click', function () {
    document.body.classList.toggle('darkMode');

    // 이미지 다크모드 토글
    toggleImage('lang', '/pokemon/img/lang.png', '/pokemon/img/lang_dark.png');
    toggleImage('login', '/pokemon/img/login.png', '/pokemon/img/login_dark.png');

    // 검색 버튼 이미지 토글
    const searchBt = document.getElementById('searchBt');
    const searchBtStyle = window.getComputedStyle(searchBt);
    searchBt.style.backgroundImage = searchBtStyle.backgroundImage.includes('/pokemon/img/search_icon.png')
        ? 'url("/pokemon/img/search_dark.png")'
        : 'url("/pokemon/img/search_icon.png")';

    // 카드 다크모드 토글
    toggleClass('.cardOne', 'darkBtn');
});



// 화면 최상단으로 스크롤
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤
    });
}

// 페이지 최상단으로 이동하는 버튼에 클릭 이벤트를 추가
document.querySelector('.fa-circle-arrow-up').addEventListener('click', scrollToTop);