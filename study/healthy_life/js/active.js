// 햄버거 메뉴바 클릭
$(function(){
    $(".content").click(function() {
        var lnbShow = $(".content #lang ul").is(":visible");

        if (lnbShow) {  // 하위 메뉴가 보이면
            $(".content #lang ul").removeClass("appear");
            $(".content #lang ul").addClass("disappear");
        } else {       // 하위 메뉴가 보이지 않으면
            $(".content #lang ul").removeClass("disappear");
            $(".content #lang ul").addClass("appear");
        }

        $(".content #lang ul").toggle();   // block 혹은 none 처리
        
    });
});