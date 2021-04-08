$(function(){
    $(".nav li").hover(function() {
        var lnbShow = $(".lnb_container").is("visible");
        
        if(lnbShow) { // 하위 메뉴가 보이면
            $(".lnb_container").removeClass("appear");
            $(".lnb_container").addClass("disappear");
        } else { //하위 메뉴가 보이지 않으면
            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");        
        }

        $(".lnb_contaier").toggle(); //block 혹은 none 처리
    });
});