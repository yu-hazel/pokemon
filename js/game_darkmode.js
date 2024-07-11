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