package web_portal

import (
	"net/http"
)

//HomePage ... Serve the HomePage http request
func HomePage(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./resources/index.html")
}
