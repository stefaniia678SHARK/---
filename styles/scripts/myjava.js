const text = document.querySelector(".special");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>"
}


let char = 0;
let spans = text.querySelectorAll('span');
let timer = setInterval(Timer, 200);

function Timer() {
    if (char < spans.length) {
        spans[char].classList.add('fade');
        char++;
    } else {
        clearInterval(timer); // Stop the timer when all spans have been faded
    }
}
   /* while (1 == 1) {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
    }*/



