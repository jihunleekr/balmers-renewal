// 슬라이드 
function slide() {


	var isVisible = false;
	$('#img_tester').hide();
 
$(window).on('scroll',function() {
    if (checkVisible($('#tester'))&&!isVisible) {
        $('#img_tester').fadeIn(2000);
        isVisible=true;
    }
});
 
function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}







	$('.arrow-wrap').click(function(){
	var offset = $('#preId').offset(); //선택한 태그의 위치를 반환
	//animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.8초 동안 부드럽게 해당 위치로 이동함 
	$('html').animate({scrollTop : offset.top}, 800);
	});








  var wid = 0;
  var now_num = 0;
  var slide_length = 0;
  var auto = null;

  var $dotli = $('.dot>li');
  var $panel = $('.panel');
  var $panelLi = $panel.children('li');
  var $navBtn = $('.slide_btns');

  // 변수 초기화
  function init() {
    wid = $('.slide').width();
    now_num = $('.dot>li.on').index();
    slide_length = $dotli.length;
  }

  // 이벤트 묶음
  function slideEvent() {

    // 슬라이드 하단 dot버튼 클릭했을때
    $dotli.click(function() {
      now_num = $(this).index();
      slideMove();
    });




    // 이후 버튼 클릭했을때
    $('.next').click(function() {
      nextChkPlay();
    });

    // 이전 버튼 클릭했을때
    $('.prev').click(function() {
      prevChkPlay();
    });

    // 오토플레이
    autoPlay();

    // 오토플레이 멈춤
    autoPlayStop();

    // 오토플레이 재시작
    autoPlayRestart();

    // 화면크기 재설정 되었을때
    resize();

  }

  // 자동실행 함수
  function autoPlay() {
    auto = setInterval(function() {
      nextChkPlay();
    }, 3000);
  }

  // 자동실행 멈춤
  function autoPlayStop() {
    $panelLi.mouseenter(function() {
      clearInterval(auto);
    });

	$navBtn.mouseenter(function() {
      clearInterval(auto);
    });
  }


  // 자동실행 멈췄다가 재실행
  function autoPlayRestart() {
    $panelLi.mouseleave(function() {
      auto = setInterval(function() {
        nextChkPlay();
      }, 3000);
    });

	$navBtn.mouseleave(function() {
      auto = setInterval(function() {
        nextChkPlay();
      }, 3000);
    });
  }

  // 이전 버튼 클릭시 조건 검사후 슬라이드 무브
  function prevChkPlay() {
    if (now_num == 0) {
      now_num = slide_length - 1;
    } else {
      now_num--;
    }
    slideMove();
  }

  // 이후 버튼 클릭시 조건 검사후 슬라이드 무브
  function nextChkPlay() {
    if (now_num == slide_length - 1) {
      now_num = 0;
    } else {
      now_num++;
    }
    slideMove();
  }

  // 슬라이드 무브
  function slideMove() {
    $panel.stop().animate({
      'margin-left': -wid * now_num
    });
    $dotli.removeClass('on');
    $dotli.eq(now_num).addClass('on');
  }

  // 화면크기 조정시 화면 재설정
  function resize() {
    $(window).resize(function() {
      init();
      $panel.css({
        'margin-left': -wid * now_num
      });
    });
  }
  init();
  slideEvent();





var website = $('.web_01');
$('#web02').hide();
$('#web04').hide();
	
website.click(function(){
$('#web02').fadeIn(800);
$('#web04').fadeIn(800); (function(){

});











	
  /*website.attr('src','img/web02_01.png');*/
});





//여기서 화살표에 불투명도를 적용합니다 (스크롤했을때 반투명해지는 제이쿼리)
$(window).scroll( function(){

  //스크롤 위치를 얻다
  var topWindow = $(window).scrollTop();
  //1.5를 곱하면 화살표가 페이지의 반쯤 투명 해집니다.
  var topWindow = topWindow * 1.5;
  
  //윈도우 높이값을 얻는 변수
  var windowHeight = $(window).height();
      
  //사용자가 스크롤 한 거리의 백분율로 위치 설정
  var position = topWindow / windowHeight;
  //백분율을 뒤집다
  position = 1 - position;

  //사용자가 스크롤 한 페이지의 거리를 기준으로 화살표 불투명도 정의
  //스크롤 없음 = 1, 페이지의 반쯤 위로 = 0
  $('.arrow-wrap').css('opacity', position);















});



}




