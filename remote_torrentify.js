var torrentPrefix = "/files/download/";
var SERVER = "http://localhost:8080";

$("a[href^='" + torrentPrefix + "']").each(function(index, element) {
  $(element).click(function(ev) {
    ev.preventDefault();
    var torrentUrl = ev.target.parentNode;
    console.log('Initiating remote download for: ' + torrentUrl);
    $.post(torrentUrl, function(data) {
      ev.target.innerHTML = "success!";
      console.log(data);
    });
  });
});
