var FIRST = 0;
var torrentPrefix = "/files/download/";

$("a[href^='" + torrentPrefix + "']").each(function(index, element) {
  $(element).click(function(ev) {
    ev.preventDefault();
    var detailsPrefix = "/files/details/";
    var torrentUrl = ev.target.parentNode.toString();
    var torrentId = torrentUrl.substring(torrentUrl.indexOf(torrentPrefix) + torrentPrefix.length);
    var detailsLink = $("a[href^='" + detailsPrefix + torrentId + "']")[FIRST];
    var torrentFilename = detailsLink.innerHTML;
    console.log('Initiating remote download for: ' + torrentUrl + ' - ' + torrentFilename);

    $.post(torrentUrl, function(data) {
      var base64_data = $.base64.encode(data);
      console.log('Torrent size: ', data.length, 'Encoded size: ', base64_data.length);
      chrome.extension.sendRequest({
        'torrent_data' : base64_data,
        'torrent_filename': $.base64.encode(torrentFilename)
      });
    });
  });
});
