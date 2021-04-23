$(document).ready(function(){
    let weatherIcon = {
        '01' : 'fas fa-sun',
        '02' : 'fas fa-cloud-sun',
        '03' : 'fas fa-cloud',
        '04' : 'fas fa-cloud-meatball',
        '09' : 'fas fa-cloud-sun-rain',
        '10' : 'fas fa-cloud-showers-heavy',
        '11' : 'fas fa-poo-storm',
        '13' : 'far fa-snowflake',
        '50' : 'fas fa-smog'

    };
 
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=e22d0c5998d33d1993a4a74eb94e5b41&units=metric',
        dataType: 'json',
        type: 'GET',
        success: function(data){
            var $Icon = (data.weather[0].icon).substr(0,2);
            var $Temp = Math.floor(data.main.temp) + 'º';
            var $city = data.name;

             $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
             $('.CurrTemp').prepend($Temp);
             $('.City').append($city);
        }
    })
});



function changeImage() {
    var image = document.getElementById("img");
    if (weatherIcon("01") {
      image.src = "img/구름.jpg";
    } else {
      image.src = "images/dog1after.PNG";
    }
  }

  $(document).ready(function(){
    let sports = {
        '01' : "img/구름.jpg",
        '02' : 'fas fa-cloud-sun',
        '03' : 'fas fa-cloud',
        '04' : 'fas fa-cloud-meatball',
        '09' : 'fas fa-cloud-sun-rain',
        '10' : 'fas fa-cloud-showers-heavy',
        '11' : 'fas fa-poo-storm',
        '13' : 'far fa-snowflake',
        '50' : 'fas fa-smog'

    };