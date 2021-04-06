(function($){
  $(function(){
  	
  	// history tab
  	$('.history_tab ul li').each(function(){
  		var tab = $(this).find('a');
  		tab.on('click',function(){
  			var li = $(this).parent('li');
  			var idx = li.index();
  			var view = li.parents('.history_tab').next('.tab_view').find('.view');
  			if(!li.hasClass('active')){
  				li.addClass('active').siblings().removeClass('active');
  				view.eq(idx).show().siblings('.view').hide();
  			}
  		})
  	})

	$("ul.gdep3").css('display','none');
	$(".submenu > li >a").click(function(){
		$(".submenu > li > a").removeClass("on").next('ul.gdep3').css('display','none');
		$(this).addClass("on").next('ul.gdep3').css('display','block');
	});

	$(".dropdown-button").click(function(){
			$('.submenu > li >a').removeClass('on');
			$('.submenu > li > ul').css('display','none');
		});

    $('.button-collapse').sideNav();
	$(".fullCls").click(function(){
			$("#nav-pc").fadeOut(300);
	});

	$(".dropBtn1.active ").click(function(){
		$("#nav-mobile").hide().removeClass('active');
		$(this).removeClass('active');
	});
	 $(".card .card-reveal").mouseleave(function(){
		$(this).velocity(
			{translateY: 0}, {
			  duration: 225,
			  queue: false,
			  easing: 'easeInOutQuad',
			  complete: function() { $(this).css({ display: 'none'}); }
			}
		  );
		  $(".card").css('overflow','hidden');
	});

	$('.bxslider').bxSlider({
		auto: false,
		pager: false,
		controls: true,
		autoLoop:false,
		keyboardEnabled:true,//웹접근성 추가
		//mode: 'fade'
		infiniteLoop: false  //즐거운 오뚜기 무한반복
	});

$('.bxslider2').bxSlider({
	slideMargin: 5,
	pager:false,
	slideWidth: 230,
	minSlides: 1,
	maxSlides: 5,
	auto:true,
	autoHover:true
	});

$('.bxslider2').bxSlider({
	slideMargin: 5,
	pager:false,
	slideWidth: 230,
	minSlides: 1,
	maxSlides: 5,
	keyboardEnabled:true,//웹접근성 추가
	auto:true,
	autoHover:true
	});

/*	var slider3 = $('.bxslider6').bxSlider({
	slideMargin: 5,
	pager:false,
	slideWidth: 230,
	minSlides: 5,
	maxSlides: 5,
	auto:true,
	autoControls: true,
	autoHover:true
	});

	$('#reload-slider, #reload-slider2').focus(function(e){
	  e.preventDefault();
	  slider3.reloadSlider({

		slideMargin: 5,
		pager:false,
		slideWidth: 230,
		minSlides: 5,
		maxSlides: 5,
		mode: 'fade',
		auto: true,
		pause: 1000,
		speed: 100,
		autoControls: true,
	autoHover:true
	 });
	});
*/
 $('.bxslider6').bxSlider({
	slideMargin: 10,
	pager:false,
	slideWidth: 230,
	minSlides: 1,
	maxSlides: 5,
	auto:false,
	autoControls: true,
	keyboardEnabled:true,//웹접근성 추가
	//autoHover:true,
	infiniteLoop: false  //신제품배너, 이벤트배너 롤링 무한반복
	});



$('.bxslider3').bxSlider({
	auto: true,
		pager:true,
	autoControls: true,
		autoHover:true,
	keyboardEnabled:true,//웹접근성 추가
	infiniteLoop: true  //신제품배너, 이벤트배너 롤링 무한반복

});


$('.bxslider4').bxSlider({
	auto: true,
	autoControls: true,
	keyboardEnabled:true,//웹접근성 추가
	mode: 'fade'
	//infiniteLoop: false  //신제품배너, 이벤트배너 롤링 무한반복
});

$(".dropdown-btn").click(function(){
		$(this).addClass("on").parent("li").siblings().children('a').removeClass('on');
		if($(this).siblings('ul').css("display")=="none"){
			$(this).siblings('ul').css('display','block');
		} else {
			$(this).parent().siblings().children('ul.dropdown-content2').css('display','none');
		}
	});

	$('.selecter').datepicker({ 
		   showOn: 'both',
		   buttonImage: '../../images/common/btn_date.png', //이미지 url
		   buttonImageOnly: true,// 버튼에 있는 이미지만 표시한다.
		   buttonText: "달력",
		   changeMonth: true,// 월을 바꿀수 있는 셀렉트 박스를 표시한다.
		   changeYear: true, //년을 바꿀 수 있는 셀렉트 박스를 표시한다.
		   showButtonPanel: true,
			nextText: '다음 달', // next 아이콘의 툴팁.
			prevText: '이전 달', // prev 아이콘의 툴팁.
			currentText: '오늘 날짜' , // 오늘 날짜로 이동하는 버튼 패널
			closeText: '닫기',  // 닫기 버튼 패널
			dateFormat: "yy-mm-dd", // 텍스트 필드에 입력되는 날짜 형식.
			//showAnim: "slide", 애니메이션을 적용한다.
			showMonthAfterYear: true , // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 
			dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], // 요일의 한글 형식.
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] // 월의 한글 형식.
		  });

	//로그인 input

		// 웹 - 셀렉트박스 gnb
		$("#dropdown11 > li > a").on("click",function(){

			var arrGnb1,arrGnb2,arrGnb3,arrGnb4,arrGnb5,arrGnb6,arrLink1,arrLink2,arrLink3,arrLink4,arrLink5,arrLink6 = new Array();
			arrGnb1 = ["(주)오뚜기","지속 가능 경영","인재 채용","사업장 소개","CEO 인사말","찾아오시는 길"];
			arrGnb2 = ["제품정보"];
			arrGnb3 = ["쿠킹&스토리"];
			arrGnb4 = ["오뚜기 뉴스","광고","즐거운 오뚜기","투자정보"];
			arrGnb5 = ["고객 한마디","공장 견학","이벤트"];
			arrGnb6 = ["오뚜기몰"];

			arrLink1 = ["/overview/about","/overview/social","/overview/system","/overview/laboratory","/overview/ceo","/overview/location"];
			arrLink2 = ["/product/product_list"];
			arrLink3 = ["/cooking/story_list"];
			arrLink4 = ["/pr/news_list","/pr/ad_list1","/pr/joyottogi_list","/pr/ir_list"];
			arrLink5 = ["/customer/counseling","/customer/visit_info","/customer/event_ing"];
			arrLink6 = ["http://www.ottogimall.co.kr/"];

			$("#dropdown11").slideUp(100).prev("a").text($(this).text());

			var num = $(this).attr("data-id");
			var myId = eval("arrGnb" + num);
			var myLink = eval("arrLink" + num);

			$("#dropdown10").empty().prev("a").text(myId[0]);

			for(i=0;i<myId.length;i++){
				$("#dropdown10").append("<li><a href='.." + myLink[i] + ".asp'>" + myId[i]+ "</a></li>");
			}

			return false;
		});

		// 모바일 화면 - 연혁 change
		$(".history_select").on("change",function(){
			$(".tab_view .view").removeClass("active");
			$("#his" + $(this).val()).addClass("active");
		});

  }); // end of document ready
})(jQuery); // end of jQuery name space