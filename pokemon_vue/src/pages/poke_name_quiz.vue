<template>
  <div class="sec">
    <v-container class="container">
      <v-row>
        <v-col>
          <h1>포켓몬 이름 퀴즈</h1>
          <div>
            문제: <span class="num">{{ currentQuestion + 1 }}</span> /
            {{ questions.length }}
          </div>
          <v-img
            :src="currentGif"
            alt="포켓몬 GIF"
            class="question-box"
          ></v-img>
          <v-text-field
            v-model="answer"
            placeholder="누구게요?"
            @keypress.enter="checkAnswer"
            outlined
            dense
            :disabled="answerChecked || isModalOpen"
          ></v-text-field>
          <v-btn
            class="mb-4"
            v-if="!answerChecked"
            @click="checkAnswer"
            color="primary"
            >제출</v-btn
          >
          <div class="mb-4" v-else>
            <v-btn class="mr-1" @click="retryQuestion" color="primary"
              >다시 도전!</v-btn
            >
            <v-btn class="ml-1" @click="nextQuestion" color="secondary"
              >다음 문제</v-btn
            >
          </div>
          <div v-for="(message, index) in resultMessages" :key="index">
            {{ message }}
          </div>
          <div>점수: {{ score }}</div>
        </v-col>
      </v-row>
      <v-dialog v-model="isModalOpen" max-width="500">
        <v-card>
          <v-card-title>퀴즈가 끝났습니다! 🎉</v-card-title>
          <v-card-text>
            <div>점수: {{ score }}</div>
            <div v-for="(result, index) in quizResults" :key="index">
              {{ index + 1 }}. 정답: {{ result.correctAnswer }} / 당신의 답:
              {{ result.userAnswer }}
              <span v-if="result.isCorrect">✔️</span>
              <span v-else>❌</span>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="restartGame">다시 도전</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup>
// import { ref, onMounted, watch } from "vue";
// const quizResults = ref([]); // 각 질문의 결과를 저장

// // 상태 변수
// const questions = ref([]);
// const currentQuestion = ref(0);
// const score = ref(0);
// const answer = ref("");
// const currentGif = ref("");
// const resultMessages = ref([]);
// const isModalOpen = ref(false); // 종료 모달 상태
// const answerChecked = ref(false); // 정답 체크 상태
// const isCorrect = ref(false); // 정답 여부

// // JSON 데이터 가져오기
// onMounted(async () => {
//   try {
//     const response = await fetch("/src/assets/pokemon_game_data.json");
//     const data = await response.json();
//     questions.value = data.sort(() => 0.5 - Math.random()).slice(0, 10);
//     displayQuestion();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// });

// // 현재 질문 표시
// function displayQuestion() {
//   if (currentQuestion.value < questions.value.length) {
//     const question = questions.value[currentQuestion.value];
//     currentGif.value = question.gif;
//     answer.value = "";
//     resultMessages.value = [];
//     answerChecked.value = false; // 정답 체크 상태 초기화
//   }
// }

// 정답 체크
// function checkAnswer() {
//   if (currentQuestion.value >= questions.value.length) {
//     return;
//   }

//   const userAnswer = answer.value.trim();
//   if (userAnswer === "") {
//     //공백금지가 있다면 다시 생성되는 거 방지
//     if (!resultMessages.value.includes("공백 금지!🚨")) {
//       resultMessages.value.push("공백 금지!🚨");
//     }
//     return;
//   }

//   const correctAnswer = questions.value[currentQuestion.value].name;
//   const isCorrect = userAnswer === correctAnswer;

//   if (isCorrect) {
//     score.value += 10;
//     resultMessages.value.push("정답! 🎉");
//     nextQuestion();
//   } else {
//     resultMessages.value.push("땡!! 🤪");
//   }

//   // 결과 저장
//   quizResults.value.push({
//     correctAnswer: correctAnswer,
//     userAnswer: userAnswer,
//     isCorrect: isCorrect,
//   });

//   if (currentQuestion.value < questions.value.length - 1) {
//     answerChecked.value = true; // 정답 체크 상태 업데이트
//   } else {
//     isModalOpen.value = true; // 모달 열기
//   }
// }

// // 다음 질문
// function nextQuestion() {
//   if (currentQuestion.value < questions.value.length - 1) {
//     currentQuestion.value++;
//     displayQuestion();
//     answerChecked.value = false; // 정답 체크 상태 초기화
//   } else {
//     isModalOpen.value = true; // 모달 열기
//   }
// }

// // 게임 재시작
// function restartGame() {
//   currentQuestion.value = 0;
//   score.value = 0;
//   answer.value = "";
//   resultMessages.value = [];
//   isModalOpen.value = false; // 모달 닫기
//   answerChecked.value = false; // 정답 체크 상태 초기화
//   quizResults.value = []; // 결과 초기화
//   displayQuestion();
// }

// // watch를 사용하여 answer 값 감지
// watch(answer, (newAnswer) => {
//   if (
//     newAnswer.trim() !== "" &&
//     resultMessages.value.includes("공백 금지!🚨")
//   ) {
//     resultMessages.value = resultMessages.value.filter(
//       (message) => message !== "공백 금지!🚨"
//     );
//   }
// });
import { ref, onMounted, watch } from "vue";

const quizResults = ref([]); // 각 질문의 결과를 저장

// 상태 변수
const questions = ref([]);
const currentQuestion = ref(0);
const score = ref(0);
const answer = ref("");
const currentGif = ref("");
const resultMessages = ref([]);
const isModalOpen = ref(false); // 종료 모달 상태
const answerChecked = ref(false); // 정답 체크 상태
const isCorrect = ref(false); // 정답 여부

// JSON 데이터 가져오기
onMounted(async () => {
  try {
    const response = await fetch("/pokemon/src/assets/pokemon_game_data.json");
    const data = await response.json();
    questions.value = data.sort(() => 0.5 - Math.random()).slice(0, 10);
    displayQuestion();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

// 현재 질문 표시
function displayQuestion() {
  if (currentQuestion.value < questions.value.length) {
    const question = questions.value[currentQuestion.value];
    currentGif.value = question.gif;
    answer.value = "";
    resultMessages.value = [];
    answerChecked.value = false; // 정답 체크 상태 초기화
  }
}

// 정답 체크
function checkAnswer() {
  if (currentQuestion.value >= questions.value.length) {
    return;
  }

  const userAnswer = answer.value.trim();
  if (userAnswer === "") {
    // 공백금지가 있다면 다시 생성되는 거 방지
    if (!resultMessages.value.includes("공백 금지!🚨")) {
      resultMessages.value.push("공백 금지!🚨");
    }
    return;
  }

  const correctAnswer = questions.value[currentQuestion.value].name;
  isCorrect.value = userAnswer === correctAnswer;

  if (isCorrect.value) {
    score.value += 10;
    resultMessages.value.push("정답! 🎉");
    quizResults.value.push({
      correctAnswer: correctAnswer,
      userAnswer: userAnswer,
      isCorrect: isCorrect.value,
    });
    setTimeout(nextQuestion, 1000); // 1초 후 다음 질문으로 자동 이동
  } else {
    resultMessages.value.push("땡!! 🤪");
    answerChecked.value = true; // 정답 체크 상태 업데이트
    quizResults.value.push({
      correctAnswer: correctAnswer,
      userAnswer: userAnswer,
      isCorrect: isCorrect.value,
    });
  }
}

// 현재 질문 재시도
function retryQuestion() {
  answer.value = "";
  resultMessages.value = [];
  answerChecked.value = false; // 정답 체크 상태 초기화
}

// 다음 질문
function nextQuestion() {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
    displayQuestion();
  } else {
    isModalOpen.value = true; // 모달 열기
  }
}

// 게임 재시작
function restartGame() {
  currentQuestion.value = 0;
  score.value = 0;
  answer.value = "";
  resultMessages.value = [];
  isModalOpen.value = false; // 모달 닫기
  quizResults.value = []; // 결과 초기화
  displayQuestion();
}

// watch를 사용하여 answer 값 감지
watch(answer, (newAnswer) => {
  if (
    newAnswer.trim() !== "" &&
    resultMessages.value.includes("공백 금지!🚨")
  ) {
    resultMessages.value = resultMessages.value.filter(
      (message) => message !== "공백 금지!🚨"
    );
  }
});
</script>

<style scoped>
@import url("https://webfontworld.github.io/DungGeunMo/DungGeunMo.css");
/* 둥근모꼴 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "DungGeunMo";
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  margin: 0;
}

h1 {
  font-size: 25px;
}
.sec {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  background: white;
  padding: 30px 50px;
  width: 80%;
  border-radius: 8px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  gap: 20px;
}

.question-box {
  margin: 20px auto;
  width: 100px;
  height: 100px;
}

input {
  padding: 10px;
  font-size: 16px;
  margin: 10px 0 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
}

#score {
  margin-top: 20px;
  font-size: 18px;
}

/* dark */
body.darkMode .container {
  background: #383838;
  color: #ffffff;
}
</style>
