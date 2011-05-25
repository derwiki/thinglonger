// /file/details/2616152/1073442/
console.log('Executing remote_torrentify.js...');
var torrent_prefix = "/files/details/";
var anchors = document.getElementsByTagName('a');
for (var idx = 0; idx < anchors.length; idx++) {
  var anchor = anchors[idx];
  if (anchor.href.indexOf(torrent_prefix) !== -1) {
    anchor.href = "http://www.google.com";
    anchor.style = "display: none;";
  }
}
