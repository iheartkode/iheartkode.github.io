

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
    $('.js-geolocation').show();
} else {
    $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('#get-location').on('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
    });
});


$(document).ready(function() {
    loadWeather('San Francisco',''); //@params location, woeid
});

function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'f',
        success: function(weather) {
            html = '<h2><i class="icon-' + weather.code + '"></i> '+ weather.temp +'&deg;'+ weather.units.temp +'</h2>';
            html += '<ul><li>'+ weather.city + ', ' + weather.region + '</li>';
            html += '<li class="currently">'+weather.currently+'</li>';
            html += '<li>' + weather.alt.temp + '&deg;C</li></ul>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
}
