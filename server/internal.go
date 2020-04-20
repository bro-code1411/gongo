package server

import (
	"bro-code/gongo/logic/web_portal"
	"net/http"
)

//Start the server
func Start() {
	mux := http.NewServeMux()

	addAPIs(mux)

	http.ListenAndServe(":8000", mux)
}

func addAPIs(mux *http.ServeMux) {
	mux.HandleFunc("/", web_portal.HomePage)
}
