console.log('Executing remote_torrentify.js...');
//var torrent_prefix = "http://www.demonoid.me/files/details/"; //2616152/1073442/
var torrent_prefix = "/files/details/";
var anchors = document.getElementsByTagName('a');
for (var idx in anchors) {
  var anchor = anchors[idx];
  if (anchor.href === undefined) { continue; }
  if (anchor.href.indexOf(torrent_prefix) === 0) {
    console.log(anchor.href);
    anchor.href = "http://www.google.com";
    anchor.style = "display: none;";

  }
}

