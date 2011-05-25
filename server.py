from __future__ import with_statement

import logging
import sys
import time

import bottle

log = logging.getLogger('rtorrent_servlet')
log.setLevel(logging.DEBUG);

bottle.debug(True)

@bottle.route('/rtorrent', method="POST")
def rtorrent():
    import ipdb; ipdb.set_trace()
    torrent_data = bottle.request.POST.get('torrent_data')
    with open('%s.torrent' % time.time(), 'w') as torrent:
        torrent.write(torrent_data)
    return dict(success=True)

port = sys.argv[1] if len(sys.argv) > 1 else 8080
bottle.run(host='0.0.0.0', port=port)
