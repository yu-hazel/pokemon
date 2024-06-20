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

//라이트, 다크모드 버튼 토글
lightDarkToggle.addEventListener('click', function () {
    this.classList.toggle('dark');
}
);

// 배경, 폰트 다크모드
function elementDarkToggle() {
    document.body.classList.toggle('darkMode');
    document.querySelector('.typeTitle').classList.toggle('darkMode');
    document.querySelector('h2').classList.toggle('darkMode');
    document.querySelector('#search').classList.toggle('darkSearch');
    document.querySelector('.menu').classList.toggle('darkMode');
    document.querySelector('.menu p').classList.toggle('darkMode');
    const userMenuItems = document.querySelectorAll('.userMenu p');
    userMenuItems.forEach(item => {
        item.classList.toggle('darkMode');
    });
    document.querySelector('header').classList.toggle('darkHeader');

    document.getElementById('scrollUp').classList.toggle('darkMode');
    
    const langImg = document.getElementById('lang');
    const loginImg = document.getElementById('login');

    if (langImg.src.endsWith('/pokemon/img/lang.png')) {
        langImg.src = '/pokemon/img/lang_dark.png';
    } else {
        langImg.src = '/pokemon/img/lang.png';
    }

    if (loginImg.src.endsWith('/pokemon/img/login.png')) {
        loginImg.src = '/pokemon/img/login_dark.png';
    } else {
        loginImg.src = '/pokemon/img/login.png';
    }

    const searchBt = document.getElementById('searchBt');
    const searchBtStyle = window.getComputedStyle(searchBt);
    if (searchBtStyle.backgroundImage.includes('/pokemon/img/search_icon.png')) {
        searchBt.style.backgroundImage = 'url("/pokemon/img/search_dark.png")';
    } else {
        searchBt.style.backgroundImage = 'url("/pokemon/img/search_icon.png")';
    }
}

document.getElementById('lightDarkToggle').addEventListener('click', elementDarkToggle);


//카드 다크모드
function cardOneDarkToggle() {
    const cards = document.querySelectorAll('.cardOne');
    cards.forEach(card => {
        card.classList.toggle('darkBtn');
    });
}

lightDarkToggle.addEventListener('click', cardOneDarkToggle);
// lightDarkToggle.addEventListener('click', elementDarkToggle);

// 화면 최상단으로 스크롤
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤
    });
}

// 페이지 최상단으로 이동하는 버튼에 클릭 이벤트를 추가
document.querySelector('.fa-circle-arrow-up').addEventListener('click', scrollToTop);