import urllib
import sys

import bottle
from bottle import request
from bottle import run
from bottle import static_file

LAST = -1

@bottle.route('/')
def rtorrent():
    torrent_url = request.GET.get('rtorrent')
    torrent_filename = torrent_url.split('/')[LAST]
    urllib.urlretrieve(torrent_url, torrent_filename)
    return torrent_filename


port = sys.argv[1] if len(sys.argv) > 1 else 8080
run(host='0.0.0.0', port=port)
