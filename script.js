function loadXMLDoc(b) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const xmlDoc = xmlhttp.responseXML;
    const item = xmlDoc.getElementsByTagName("item");
    myFunction(item, b);
  }
  xmlhttp.open("GET", "haha.xml", true);
  xmlhttp.send();
}
var school = "";

function myFunction(item, b) {
  school += "<h1>" + item[b-1].getElementsByTagName("title")[0].childNodes[0].wholeText + "</h1>" 
+ "<p>" + item[b-1].getElementsByTagName("description")[0].childNodes[0].wholeText + "</p>";
console.log(school);
document.getElementById("haha").innerHTML = school;
}

function oruulah(bagsh){
document.cookie = bagsh;
}
function terMedee(){
return document.cookie;
}
