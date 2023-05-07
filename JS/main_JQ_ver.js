$(function () {
  //변수 초기화
  var $indicator = $(".indicator button");
  var $lightbox = $("#lightbox");
  var $block = $("#block");

  //이미지 목록 click 이벤트
  $("img.thumb").click(function () {
    //라이트박스 열기
    var img_num = $(this).index() - 1;
    lightbox_open(img_num);
  });

  //라이트박스 표시
  function lightbox_open(num) {
    $lightbox.addClass("active");
    $block.addClass("active");
    change_img(num);
    $indicator.eq(num).focus();
  }

  //인디케이터 click 이벤트
  $indicator.click(function () {
    //라이트박스 이미지 변경
    var img_num = $(this).index();
    change_img(img_num);
  });

  //이미지 전환
  function change_img(val) {
    var $imgs = $("figure>img");

    for (var i = 0; i < $imgs.length; i++) {
      $imgs.eq(i).removeAttr("class");
    }

    $imgs.eq(val).attr("class", "active");
  }

  //라이트박스 닫기 버튼 click 이벤트
  $("btn-close").click(function () {
    lightbox_close();
  });

  //라이트박스 종료
  function lightbox_close() {
    $lightbox.removeAttr("class");
    $block.removeAttr("class");
  }
});
