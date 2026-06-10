const slides = [
  "Amazing grace<br>How sweet the sound",
  "That saved a wretch like me",
  "I once was lost<br>But now am found"
];

let current = 0;

function nextSlide() {
  current++;
  if(current >= slides.length) current = 0;
  document.getElementById("lyrics").innerHTML = slides[current];
}
