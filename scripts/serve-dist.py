#!/usr/bin/env python3
"""Static file server with SPA fallback, for local verification only.

Mirrors what vercel.json's rewrite does in production: any path that is not a
real file is served index.html so client-side routes work.
"""
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "dist")


class SPAHandler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path) or os.path.isdir(path) and not os.path.exists(
            os.path.join(path, "index.html")
        ):
            self.path = "/index.html"
        return super().do_GET()

    def log_message(self, fmt, *args):
        sys.stderr.write("%s\n" % (fmt % args))


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4174
    print(f"serving {ROOT} on http://127.0.0.1:{port}")
    ThreadingHTTPServer(("127.0.0.1", port), SPAHandler).serve_forever()
