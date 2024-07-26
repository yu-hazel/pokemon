<template>
  <footer>
    <a href="https://github.com/yoo-nji">
      <img src="/src/assets/img/footer_git.png" alt="github" />
      <span>yoonji</span>
    </a>
    <a href="https://github.com/yu-hazel">
      <img src="/src/assets/img/footer_git.png" alt="github" />
      <span>hyein</span>
    </a>
  </footer>
</template>
<style scoped>
/* 푸터 */
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 30px;
  position: fixed;
  bottom: 0;
  background: #b3b3b3;
  color: white;
  box-shadow: 0 0 0px 5px rgb(108, 108, 108);
}
footer > a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 97px;
  height: 25px;
  border-radius: 42px;
  transition: 0.3s;
}
footer > a > img {
  width: 20px;
}
footer > a:hover {
  background: rgba(242, 242, 242, 0.38);
}
</style>
