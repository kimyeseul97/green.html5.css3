var url = locarion.href;
console.log(url);

var urlObj = new URL(url);
var params = urlObj.searchParams;
var q = params.get("q");

console.log(q);

var forecast = new forecast();
var locationWeather = forecast.getCurrentWeahter(q);