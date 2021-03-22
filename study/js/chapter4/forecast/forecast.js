var date = ["21-03-22","21-03-23","21-03-24","21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10,50,10,5];
var dust = [40,60,70,90];
var day1 = [], day2 = [], day3=[], day4=[];
var forcast = new Object();

forecast.tempShow = function(){
    for(var i = 0; i < temp.length; i++){

    }
};

forecast.temp_Avg_Show = function(){
    var num = 0;
    for(var i = 0; i < temp.length; i++){
        num += temp[i];
    }

    var avg = num / temp.length;
    return avg;
};

forecast.temp_rain_Show = function(){
    for(var i = 0; i < rain.length; i++){

    }
};

forecast.temp_Avg_rainShow = function(){
    var num = 0;
    for(var i = 0; i < rain.length; i++){
        num += rain[i];
    }

    var avg = num / rain.length;
    return avg;

};

forecast.temp_dust_Show = function(){
    for(var i = 0; i < dust.length; i++){

    }
};

forecast.temp_dust_Avg_Show = function(){
    var num = 0;
    for(var i = 0; i < dust.length; i++){
        num += dust[i];
    }

    var avg = num / dust.length;
    return avg;
};




// 내가 만든 코드
// document.write("<h1>1일 날씨 정보</h1>");
// document.write("현재날짜:"+date[0],"<br>");
// document.write("온도:"+temp[0],"<br>");
// document.write("강수량:"+rain[0],"<br>");
// document.write("미세먼지:"+dust[0],"<br>");

// document.write("<h1>2일 날씨 정보</h1>");
// document.write("현재날짜:"+date[1],"<br>");
// document.write("온도:"+temp[1],"<br>");
// document.write("강수량:"+rain[1],"<br>");
// document.write("미세먼지:"+dust[1],"<br>");

// document.write("<h1>3일 날씨 정보</h1>");
// document.write("현재날짜:"+date[2],"<br>");
// document.write("온도:"+temp[2],"<br>");
// document.write("강수량:"+rain[2],"<br>");
// document.write("미세먼지:"+dust[2],"<br>");

// document.write("<h1>4일 날씨 정보</h1>");
// document.write("현재날짜:"+date[3],"<br>");
// document.write("온도:"+temp[3],"<br>");
// document.write("강수량:"+rain[3],"<br>");
// document.write("미세먼지:"+dust[3],"<br>");


