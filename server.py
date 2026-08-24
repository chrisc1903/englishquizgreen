import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit


HOST = "0.0.0.0"
PORT = 5000
CLERK_PLACEHOLDER = "__CLERK_PUBLISHABLE_KEY__"


class AppHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        request_path = urlsplit(self.path).path
        if request_path in ("/", "/index.html"):
            self.serve_index()
            return
        super().do_GET()

    def serve_index(self):
        publishable_key = os.environ.get("VITE_CLERK_PUBLISHABLE_KEY")
        if not publishable_key:
            self.send_error(500, "VITE_CLERK_PUBLISHABLE_KEY is not configured")
            return

        with open("index.html", "r", encoding="utf-8") as index_file:
            document = index_file.read().replace(CLERK_PLACEHOLDER, publishable_key)

        payload = document.encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(payload)


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), AppHandler)
    print(f"Serving English Quiz on {HOST}:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()