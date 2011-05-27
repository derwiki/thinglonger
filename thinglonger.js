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

    $.ajax({
      // need special patched version of jQuery to support 'binary'
      dataType: 'binary',
      url: torrentUrl,
      success: function(data) {
        var base64_data = base64ArrayBuffer(data);
        console.log('Encoded size: ', base64_data.length);
        chrome.extension.sendRequest({
          'torrent_data' : base64_data,
          'torrent_filename': torrentFilename
        });
      }
    });
  });
});
