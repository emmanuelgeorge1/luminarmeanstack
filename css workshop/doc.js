//var ur= document.URL
//alert(ur)
//var tags=document.getElementsByTagName("h1")
//for(tg of tags){
//    tg.style.color="red"
//}
//var hone=document.getElementById("one")
//hone.style.color="blue"
//
//var cls=document.getElementsByClassName("cls")
//for(tg of cls){
//    tg.style.color="cyan"
//}

var hd=document.querySelector("#one")
hd.style.color="red"
var uhd=document.querySelectorAll(".cls")
uhd.forEach(li=>li.style.color="green")
var tg=document.querySelectorAll("li")
tg.forEach(li=>li.style.color="blue")

var dom=document.querySelector("#dom")
dom.innerHTML="<em>DocumentObjectMethod</em>"