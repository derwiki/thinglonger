var torrentPrefix = "/files/download/";

$("a[href^='" + torrentPrefix + "']").each(function(index, element) {
  $(element).click(function(ev) {
    ev.preventDefault();
    var torrentUrl = ev.target.parentNode;
    console.log('Initiating remote download for: ' + torrentUrl);
    $.post(torrentUrl, function(data) {
      chrome.extension.sendRequest({'torrent_data' : data});
    });
  });
});
