let volumeKnob = document.querySelector(".volume-knob");
let on = false;

volumeKnob.addEventListener("click", () => {
  if (!on) {
    volumeKnob.style.border = "3px solid rgb(0,255,0,1)";
    on = !on;
  } else {
    volumeKnob.style.border = "3px solid rgb(0,255,0,0)";
    on = !on;
  }
});
