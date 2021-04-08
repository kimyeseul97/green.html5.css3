$(function(){
    $(".trigger").click(function() {
        var lnbShow = $(".lnb_container").is(":visible");

        if (lnbShow) {  // 하위 메뉴가 보이면
            $(".trigger_container").removeClass("appear");
            $(".trigger_container").addClass("disappear");
        } else {       // 하위 메뉴가 보이지 않으면
            $(".trigger_container").removeClass("disappear");
            $(".trigger_container").addClass("appear");
        }

        $(".trigger_container").toggle();   // block 혹은 none 처리
        
    });
});


$(function(){
    $(".nav").click(function() {
        var lnbShow = $(".lnb_container").is(":visible");

        if (lnbShow) {  // 하위 메뉴가 보이면
            $(".lnb_container").removeClass("appear");
            $(".lnb_container").addClass("disappear");
        } else {       // 하위 메뉴가 보이지 않으면
            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
        }

        $(".lnb_container").toggle();   // block 혹은 none 처리
        
    });
});