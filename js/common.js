// depth2
$(".gnb> li").mouseenter(function () {
  $(this).find(".depth2").stop().fadeIn();
  $(".depth2_bg").stop().fadeIn();
  $("#header").addClass("active");
});

$(".gnb> li").mouseleave(function () {
  $(this).find(".depth2").stop().fadeOut();
  $(".depth2_bg").stop().fadeOut();
  $("#header").removeClass("active");
});

/* mgnb */
$(".ham").click(function () {
  $(this).toggleClass("active");
  $("#header").toggleClass("active");
  $(".mgnb_wrap").fadeToggle();

  let txt = $(".ham").text();
  if (txt == "메뉴보기") {
    $(".ham").text("메뉴닫기");
    $("body").css("overflow", "hidden"); // 스크롤 막기
  } else {
    $(".ham").text("메뉴보기");
    $("body").css("overflow", "auto"); // 스크롤 다시 활성화
  }
});


// mdepth2
$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();

  // 클릭된 li의 a 태그 색상 변경
  $(this).find("> a").css("color", "#F0A550"); // 원하는 색상으로 변경

  // 다른 li 요소들의 a 태그 색상 초기화
  $(this).siblings().find("> a").css("color", "#fff"); // 기본 색상으로 변경
  $()
});

/* gotop */
$(".gotop").hide();
$(window).scroll(function () {
  let scrollpos = $(this).scrollTop();
  if (scrollpos > 300) {
    $(".gotop").fadeIn();
  } else {
    $(".gotop").fadeOut();
  }
});
