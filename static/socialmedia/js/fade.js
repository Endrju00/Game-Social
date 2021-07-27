const text = document.querySelector('.heading')
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";
for (let i=0; i<splitText.length; i++) {
  text.innerHTML += "<span class=\"text\">" + splitText[i] + "</span>";
}

var timer;
var char = 0;

fade();
let timer2 = setInterval(fade, 5000);

function fade() {
  timer = setInterval(onTick, 50);

}

function onTick() {
  const span = text.querySelectorAll('span')[char];
  if(span.classList.contains('wave')) {
    span.classList.remove('wave');
  } else {
    span.classList.add('wave');
  }
  char++;

  if(char == splitText.length){
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
  char = 0;
}
