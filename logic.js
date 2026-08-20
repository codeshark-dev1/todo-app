const taskButtons = document.querySelectorAll(".taskButton");
for (let i = 0; i< taskButtons.length; i++) {
  const e = taskButtons[i];
  e.onmouseover = function() {taskButtonMouseOver(e)};
  e.onmouseleave = function() {taskButtonMouseLeave(e)};
}

function taskButtonMouseOver(x){
    x.innerHTML = "X";
}

function taskButtonMouseLeave(x){
    x.innerHTML = "";
}