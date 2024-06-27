//미니게임 아이콘 다크모드
document.getElementById('lightDarkToggle').addEventListener('click', function () {
  var gameSet = document.querySelector('.gameSet');
  var gameSetDark = document.querySelector('.gameSetDark');

  if (gameSet.style.display === 'none') {
    gameSet.style.display = 'flex';
    gameSetDark.style.display = 'none';
  } else {
    gameSet.style.display = 'none';
    gameSetDark.style.display = 'flex';
  }
});

//버튼 클릭시 .gameCon 클래스에 .dark 토글
document.getElementById('lightDarkToggle').addEventListener('click', function () {
  const gameCons = document.querySelectorAll('.gameCon');
  //for of반복문으로 토글
  for (const gameCon of gameCons) {
    gameCon.classList.toggle('gameBoxdark');
  }
});