function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var response = JSON.parse(xmlHttp.responseText);
	document.getElementById('ip').innerHTML = response.query;
    document.getElementById('region').innerHTML = response.regionName;
    document.getElementById('country').innerHTML = response.country;
}

document.addEventListener('DOMContentLoaded', function() {
	var url = "http://ip-api.com/json";
    httpGet(url); 
});
