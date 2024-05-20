const words = ["Стефания", "Дизайнер", "Программист", "Фотограф", "И творческий человек!"];
const typingElement = document.getElementById('typing-effect');

let wordIndex = 0;
let charIndex = 0;

function type() {
  if (wordIndex === words.length) {
    wordIndex = 0;
  }

  if (charIndex === words[wordIndex].length) {
    setTimeout(erase, 2000);
    return;
  }

  typingElement.textContent += words[wordIndex].charAt(charIndex);
  charIndex++;
  setTimeout(type, 100);
}

function erase() {
  if (charIndex === 0) {
    wordIndex++;
    setTimeout(type, 500);
    return;
  }

  typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
  charIndex--;
  setTimeout(erase, 100);
}

type();