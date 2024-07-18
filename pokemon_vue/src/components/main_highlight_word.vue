<template>
  <div>
    <h2>
      우리만의 <span id="highlightWord">{{ highlightWord }}</span> 포켓몬 도감
    </h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const highlightWord = ref(""); // 타이핑 효과를 적용할 텍스트
const word = "하찮은"; // 타이핑할 단어
const index = ref(0);
const isDeleting = ref(false);

const type = () => {
  if (!isDeleting.value && index.value < word.length) {
    highlightWord.value += word.charAt(index.value);
    index.value++;
    setTimeout(type, 200);
  } else if (isDeleting.value && index.value > 0) {
    highlightWord.value = word.substring(0, index.value - 1);
    index.value--;
    setTimeout(type, 100);
  } else if (index.value === word.length) {
    setTimeout(() => {
      isDeleting.value = true;
      setTimeout(type, 200);
    }, 1000);
  } else if (index.value === 0) {
    isDeleting.value = false;
    setTimeout(type, 500);
  }
};

onMounted(() => {
  type();
});
</script>

<style scoped>
#highlightWord {
  font-family: "SangSangShinb7";
}
</style>
