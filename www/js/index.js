var feedURL = "https://www.metaweather.com/api/location/44418";

$(document).on('pagecreate', '#feedPage', function(event) {
	
	// Use an HTML GET request to obtain data from an API
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", feedURL, true);
	xmlhttp.send();

	//Define Ractive binding
    xmlhttp.onreadystatechange=function(){
        // parse the resulting JSON into Javascript Data Object 
        // you can use a live parser to inspect the contents of the JSON
        // http://json.parser.online.fr/ 
        var weather= JSON.parse(xmlhttp.responseText);
        
       	var ractive = new Ractive({
            el: 'container', <!-- where -->
            template: '#myTemplate', <!-- how -->
    	   data: { weather : weather.consolidated_weather } <!-- what - specify the list of   weather reports using dot notation-->
	   }); 
        
    }

});