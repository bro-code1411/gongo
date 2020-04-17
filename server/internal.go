package server

import "net/http"

func Start() {
	mux := http.NewServeMux()

	addAPIs(mux)

}

func addAPIs() {
	mux.HandleFunc("/", web-portal.HomePage)
	http.ListenAndServe(":8000", mux)
}
