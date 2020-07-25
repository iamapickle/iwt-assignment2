var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log(slideIndex)
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let xmlContent = " ";
let tablealbums = document.getElementById("tableCD");
fetch("artist.xml").then((response) => {
    response.text().then((xml) => {
        xmlContent = xml;
        let parser = new DOMParser();
        let xmlDom = parser.parseFromString(xmlContent, 'application/xml');
        let albums = xmlDom.querySelectorAll("CD");
        albums.forEach(albumXMLNode => {
            let row = document.createElement('tr');
            let td = document.createElement('td');
            td.innerHTML = albumXMLNode.children[0].innerHTML;
            row.appendChild(td);
            td = document.createElement('td');
            td.innerHTML = albumXMLNode.children[1].innerHTML;
            row.appendChild(td);
            tablealbums.children[1].appendChild(row);
        })
    })
})

// function loadXMLDoc() {
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       myFunction(this);
//     }
//   };
//   xmlhttp.open("GET", "artist.xml", false);
//   xmlhttp.send();
// }
// function myFunction(xml) {
//   var i;
//   var xmlDoc = xml.responseXML;
//   var table="<tr><th>Artist</th><th>Title</th></tr>";
//   var x = xmlDoc.getElementsByTagName("CD");
//   for (i = 0; i <x.length; i++) { 
//     table += "<tr><td>" +
//     x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
//     "</td><td>" +
//     x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
//     "</td></tr>";
//   }
//   document.getElementById("demo").innerHTML = table;
// }