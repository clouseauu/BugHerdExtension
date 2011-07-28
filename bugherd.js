chrome.extension.sendRequest({method: "getLocalStorage"}, function(response) {
    var bh_destination_url = response.data["bh_destination_url"];
     var _bugHerdAPIKey = response.data["bh_api_key"];

    if(window.location.href.indexOf(bh_destination_url)>-1){
        var d = document.createElement("div");
        d.setAttribute("id","bh_data_container")
        d.setAttribute("data-url",bh_destination_url);
        d.setAttribute("data-key",_bugHerdAPIKey);

        document.body.appendChild(d);

        var s = document.createElement("script");
        s.setAttribute("src","http://www.bugherd.com/bugherd_development.js");
        s.setAttribute("type","text/javascript");
        document.body.appendChild(s);
    }
});



//7917d741-16cc-4c2b-bb1a-bdd903d53d72