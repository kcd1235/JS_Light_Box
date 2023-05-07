$(function () {
  //변수 초기화
  var $indicator = $(".indicator button");
  var $lightbox = $(".lightbox");
  var $block = $("#block");

  //라이트박스 표시
  function lightbox_open(num) {
    $lightbox.addClass("active");
    $block.addClass("active");
    change_img(num);
    $indicator.eq(num).focus();
  }

  //이미지 전환
  function change_img(val) {
    var $imgs = $("figure>img");

    for (var i = 0; i < $imgs.length; i++) {
      $imgs.eq(i).removeAttr("class");
    }

    $imgs.eq(val).attr("class", "active");
  }

  //라이트박스 종료
  function lightbox_close() {
    $lightbox.removeAttr("class");
    $block.removeAttr("class");
  }
});
