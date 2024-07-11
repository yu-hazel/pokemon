// 메인 타이틀 타이핑 효과
document.addEventListener('DOMContentLoaded', () => {
  const highlightWord = document.getElementById('highlightWord');
  const word = "하찮은";
  let index = 0;
  let isDeleting = false;

  const type = () => {
    if (!isDeleting && index < word.length) {
      highlightWord.textContent += word.charAt(index);
      index++;
      setTimeout(type, 200);
    } else if (isDeleting && index > 0) {
      highlightWord.textContent = word.substring(0, index - 1);
      index--;
      setTimeout(type, 100);
    } else if (index === word.length) {
      setTimeout(() => {
        isDeleting = true;
        setTimeout(type, 200);
      }, 1000);
    } else if (index === 0) {
      isDeleting = false;
      setTimeout(type, 500);
    }
  };

  type();
});