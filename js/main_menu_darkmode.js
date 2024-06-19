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

// light, dark mode toggle

lightDarkToggle.addEventListener('click', function () {
    this.classList.toggle('dark');
}
);

//카드 다크모드
function cardOneDarkToggle() {
    const cards = document.querySelectorAll('.cardOne');
    cards.forEach(card => {
        card.classList.toggle('darkBtn');
    });
}

lightDarkToggle.addEventListener('click', cardOneDarkToggle);