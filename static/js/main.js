if('serviceWorker' in navigator){
    navigator.serviceWorker.register("/sw.js")
    .then(function(){
        console.log("sw reg");
    });
}


$("#minu").click(function (e) { 
    e.preventDefault();
    $("#navigation").toggle();
});