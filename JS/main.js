//인디케이터 초기화
var indicator = document.querySelectorAll(".indicator button");
var lightbox = document.querySelector("#lightbox");
var block = document.querySelector("#block"); //라이트박스 배경

//라이트박스 표시
function lightbox_open(num) {
  lightbox.setAttribute("class", "active");
  block.setAttribute("class", "active");
}

//라이트박스 닫기
function lightbox_close() {
  lightbox.removeAttribute("class");
  block.removeAttribute("class");
}
