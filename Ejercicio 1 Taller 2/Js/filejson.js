function init(){
function ajaxRequest(){
    //Crear array() con cadenas para creación de objeto ActiveX
    //en caso de navegadores antiguos de Internet Explorer
    var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]; 
    //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
    if(window.ActiveXObject){ 
        for(var i=0; i<activexmodes.length; i++){
            try{
                return new ActiveXObject(activexmodes[i]);
            }
            catch(e){
                return false;
            }
        }
    }
    // Si se está usando Chrome, Mozilla, Safari, Opera, etc.
    else if (window.XMLHttpRequest){ 
        return new XMLHttpRequest();
    }
    else{
        return false;
    }
}
var request = new ajaxRequest();
var peli1= document.getElementById("1");
var peli2= document.getElementById("2");
var peli3= document.getElementById("3");
var peli4= document.getElementById("4");
var peli5= document.getElementById("5");
var peli6= document.getElementById("6");
request.onreadystatechange = function(){
    if(request.readyState==4){
        if(request.status==200 || window.location.href.indexOf("http")==-1){
        //Recibir resultado como un objeto de JavaScript usando la función eval()
        //var jsondata = eval("("+request.responseText+")");
        //Recibir resultado como un objeto de JavaScript usando el método parse()
            if(peli1.addEventListener){
                peli1.addEventListener("click", function () {
                    var jsondata = JSON.parse(request.responseText);
                    var rssentries = jsondata.items;
                    var output = "<ul>";
                        var i=0;
                        output += "<li>";
                        output += "<h3>" + rssentries[i].title1 + "</h3>";
                        output += "<p>" + rssentries[i].pro1 + "</p>";
                        output += "<p>" + rssentries[i].description1 + "</p>";
                        output += "<p>" + rssentries[i].director1 + "</p>";
                        output += "</a>";
                        output += "</li>";
                    output += "</ul>";
                    document.getElementById("result").innerHTML = output
                    return false;
                }, false);
            }
            if(peli2.addEventListener){
                peli2.addEventListener("click", function () {
                    var jsondata = JSON.parse(request.responseText);
                    var rssentries = jsondata.items;
                    var output = "<ul>";
                        var i=1;
                        output += "<li>";
                        output += "<h3>" + rssentries[i].title2 + "</h3>";
                        output += "<p>" + rssentries[i].pro2 + "</p>";
                        output += "<p>" + rssentries[i].description2 + "</p>";
                        output += "<p>" + rssentries[i].director2 + "</p>";
                        output += "</a>";
                        output += "</li>";
                    output += "</ul>";
                    document.getElementById("result").innerHTML = output
                    return false;
                }, false);
            }
            if(peli3.addEventListener){
                peli3.addEventListener("click", function () {
                    var jsondata = JSON.parse(request.responseText);
                    var rssentries = jsondata.items;
                    var output = "<ul>";
                        var i=2;
                        output += "<li>";
                        output += "<h3>" + rssentries[i].title3 + "</h3>";
                        output += "<p>" + rssentries[i].pro3 + "</p>";
                        output += "<p>" + rssentries[i].description3 + "</p>";
                        output += "<p>" + rssentries[i].director3 + "</p>";
                        output += "</a>";
                        output += "</li>";
                    output += "</ul>";
                    document.getElementById("result").innerHTML = output
                    return false;
                }, false);
            }
            if(peli4.addEventListener){
                peli4.addEventListener("click", function () {
                    var jsondata = JSON.parse(request.responseText);
                    var rssentries = jsondata.items;
                    var output = "<ul>";
                        var i=3;
                        output += "<li>";
                        output += "<h3>" + rssentries[i].title4 + "</h3>";
                        output += "<p>" + rssentries[i].pro4 + "</p>";
                        output += "<p>" + rssentries[i].description4 + "</p>";
                        output += "<p>" + rssentries[i].director4 + "</p>";
                        output += "</a>";
                        output += "</li>";
                    output += "</ul>";
                    document.getElementById("result").innerHTML = output
                    return false;
                }, false);
            }
            if(peli5.addEventListener){
                peli5.addEventListener("click", function () {
                    var jsondata = JSON.parse(request.responseText);
                    var rssentries = jsondata.items;
                    var output = "<ul>";
                        var i=4;
                        output += "<li>";
                        output += "<h3>"+ rssentries[i].title5 + "</h3>";
                        output += "<p>" + rssentries[i].pro5 + "</p>";
                        output += "<p>" + rssentries[i].description5 + "</p>";
                        output += "<p>" + rssentries[i].director5 + "</p>";
                        output += "</a>";
                        output += "</li>";
                    output += "</ul>";
                    document.getElementById("result").innerHTML = output
                    return false;
                }, false);
            }
            if(peli6.addEventListener){
                peli6.addEventListener("click", function () {
                    var jsondata = JSON.parse(request.responseText);
                    var rssentries = jsondata.items;
                    var output = "<ul>";
                        var i=5;
                        output += "<li>";
                        output += "<h3>" + rssentries[i].title6 + "</h3>";
                        output += "<p>" + rssentries[i].pro6 + "</p>";
                        output += "<p>" + rssentries[i].description6 + "</p>";
                        output += "<p>" + rssentries[i].director6 + "</p>";
                        output += "</a>";
                        output += "</li>";
                    output += "</ul>";
                    document.getElementById("result").innerHTML = output
                    return false;
                }, false);
            }

        }
        else{
            alert("Ha ocurrido un error mientras se realizaba la petición");
        }
    }
}
request.open("GET", "json/pelis.json", true);
request.send(null);
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
}
else if (window.attachEvent) {
    window.attachEvent("load", init);
}