// div#""객체를 가져온다.
let box = window.document.getElementById("box");
let position = 0;

function move_box() {
  if (position < 200) {
    position += 1;
    box.style.left = position + "px";
    //계속해서 move_box를 불러주는 콜백기능을 부여한다.
  } else {
    position = 0;
    box.style.left = position + "px";
  }
  window.requestAnimationFrame(move_box);
}

move_box();
