let questions = [];
let currentQuestion = 0;
let score = 0;

// JSON 데이터 가져오기
fetch('/pokemon/html/pokemon_game_data.json')
  .then(response => response.json())
  .then(data => {
    questions = data.sort(() => 0.5 - Math.random()).slice(0, 10);
    displayQuestion();
  })
  .catch(error => console.error('Error fetching data:', error));

// HTML 요소 선택
const $input = document.getElementById('answer');
const $button = document.getElementById('submit');
const $pokemonGif = document.getElementById('pokemonGif');
const $result = document.getElementById('result');
const $score = document.getElementById('score');

// 현재 질문 표시
function displayQuestion() {
  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];
    $pokemonGif.src = question.gif;
    $input.value = '';
    const $num = document.querySelector('.num');
    $num.innerText = currentQuestion + 1;
  }
}

// 정답 체크
function checkAnswer() {
  const answer = $input.value.trim();
  //공백이면 공백 금지! 표시
  if (answer === '') {
    $result.innerText = '공백 금지!🚨';
    return;
  }
  if (answer === questions[currentQuestion].name) {
    score += 10;
    $result.innerText = '정답! 🎉';
  } else {
    $result.innerText = '땡!! 🤪';
  }
  $score.innerText = `점수: ${score}`;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    document.getElementById('questionBox').innerText = '퀴즈가 \n끝났습니다👍';
    $button.disabled = true;
    $input.disabled = true;
    //제출 버튼 다시도전으로 변경
    $button.innerText = '다시도전';
    $button.addEventListener('click', function () {
      location.reload();
    });
    $button.disabled = false;
  }
}

//제출
$button.addEventListener('click', checkAnswer);
$input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkAnswer();
  }
});