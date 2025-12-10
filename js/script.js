'use strict'; //엄격모드, 안전하고 오류 덜 유발

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault(); //a에 링크된 이벤트를 차단하겠다.
});

//gnb메뉴
$(function(){
   $('header .menuOpen').on('click', function(){
       $('.gnb').addClass('on');
   });
    $('.gnb .close, section').on('click', function(){
        $('.gnb').removeClass('on');
    });
});

//fixHeader
var scrollTop = 0; //변수선언
scrollTop = $(document).scrollTop(); //스크롤값 읽기
fixHeader(); //함수호출, 실행

//윈도우창 조절시 이벤트
$(window).on('scroll resize', function(){
   scrollTop = $(document).scrollTop();
    fixHeader();
});


//고정헤더 함수
function fixHeader() {
    if(scrollTop > 150){
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}


//스크롤 애니메이션
$(function(){
  $('.animate').scrolla({
      mobile:false,
      on:false
  });
});



//맨 위로 이동
$(function(){
   $('.goTop').on('click', function(){
       $('html, body').animate({scrollTop :0 }, 200);
   }); 
});


//.top-visual 이미지슬라이드
$(function(){
   $(".visual .slide").slick({
       arrows:true, //좌우화살표 표시
       dots:false, //슬라이드 위치 나타내는 인디케이트(점) 버튼 해제
       fade:true, //페이드인효과(서서히나타남)
       autoplay :true, //자동재생
       outoplaySpeed: 4000, //재생시간
       pauseOnHover:false, //마우스를 슬라이더 위에 올렸을 때 자동 재생이 일시 정지되는 것을 해제합니다.
       pauseOnFocus:false //슬라이더에 포커스가 갔을 때 (예: 탭 키 사용) 자동 재생이 일시 정지되는 것을 해제합니다.
   });
});



