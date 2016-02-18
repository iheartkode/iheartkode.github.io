$(document).ajaxStart(function() {
  $("#loader").show();
}).ajaxStop(function() {
  $("#loader").hide();
});

$("#stats").on("click", function() {
  $("#output").empty();
  var url = "https://www.googleapis.com/pagespeedonline/v2/runPagespeed";
  var site = $('#site').val();
  url += '?' + $.param({ 'url': 'http://' + site });

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    var speed = result.ruleGroups.SPEED.score
    var siteid = result.id;
    var resources = result.pageStats.numberResources;
    $("#output").html(
        "<span class=\"titles\">Site:</span> " + siteid + "<br>" +
        "<span class=\"titles\">Site Score:</span> " + speed + "<br>" +
        "<span class=\"titles\">Total Resources:</span> " + resources
    );

  }).fail(function(err) {
    throw err;
  });
});
