(function($) {
    let bmi_matrix = [
    	{
            id : 'low_weight'
        	, min_val : 0
            , max_val : 18.5
            , msg : '저체중'
        }
        ,{
            id : 'standard_weight'
        	, min_val : 18.5
            , max_val : 23
            , msg : '정상'
        },{
            id : 'over_weight'
        	, min_val : 23
            , max_val : 25
            , msg : '과체중'
        },{
            id : 'Mild_obesity'
        	, min_val : 25
            , max_val : 30
            , msg : '경도비만'
        },{
            id : 'Moderate_obesity'
        	, min_val : 30
            , max_val : 99999
            , msg : '중등비만'
        }
    ]
  	$("#i_stature").on('change keyup paste',function(){
      setBmiResult();
    });
    $("#i_weight").on('change keyup paste',function(){
      setBmiResult();
    });
    
    setBmiResult = () => {
      let i_stature = $("#i_stature").val();
      let i_weight = $("#i_weight").val();
      i_stature = i_stature / 100;
      let bmi_result = (i_weight / ( i_stature * i_stature )) ;
      console.log("bmi_result", bmi_result);
      let bmi_msg;
      for( let bm of bmi_matrix ){
       	 if(  bmi_result >= bm.min_val && bmi_result < bm.max_val ){
            bmi_msg = bm.msg;
         }
      }
      
      $(".bmi_result").text( parseFloat(bmi_result).toFixed(2) + " " + bmi_msg + "입니다.");
      
      return;
      
      if( i_stature < 100 ) { $("#stnr_stature").text(""); return;}
      let stnr_weight = (i_stature - 100) * ( i_stature > 150 ? 0.9 : 1);
      $("#stnr_weight").val(stnr_weight);
      let bmi_result2 = ( i_weight - stnr_weight ) / stnr_weight * 100;
      $("#bmi_result").val( parseFloat(bmi_result).toFixed(2) );
      console.log("bmi_result : ",  bmi_result);
    }
  })(jQuery);