function KeyR()
{
var cm , kg, BMI;

	var cm = document.getElementById("id01");
	cm=Number(cm.value);
	cm=cm*0.01;
	
		if(cm == "")
		{alert ("키를 입력하세요");
		return;}
	
	var kg = document.getElementById("id02");
	kg=Number(kg.value);
	
		if(kg == "")
		{alert ("몸무게를 입력하세요");
		return;}
		
		/* if (isNaN(cm) == true || isNaN(kg) == true)
		{alert ("빈공간을 체워주세요");
		return;} */
		
		/* 이런식으로 한번에 처리도 가능합니다. 뭔뜻이냐면,
		cm 과 kg 둘 중에 빈공간이 있거나, 숫자가 아닐경우,
		 "빈공간을 체워주세요" 라는 메세지가 뜨게끔 하는
		스크립트 구성이지요^^ */
	
	BMI=kg/(cm*cm);
	
	
	if(BMI > 30.0)
	{
		alert ("당신은 현재 [비만] 상태 입니다. 운동하세요!");
	}
	
	else if((BMI > 25.0) && (BMI<=29.9))
	{
		alert ("당신은 현재 [과체중] 상태 입니다. 조심하세요!");
	}
	
	else if((BMI > 18.5) && (BMI<=24.9))
	{
		alert ("당신은 [정상] 입니다^^");
	}

	else if(BMI <= 18.5)
	{
		alert ("당신은 현재 [저체중] 상태 입니다. 많이 드세요!");
	}
	
	else
	{
		alert ("부끄러우시더라도, 올바른 키랑 몸무게를 입력하세요^^;");
	}
}