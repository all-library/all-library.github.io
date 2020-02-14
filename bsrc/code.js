// Copyright
var d;
var dtx; 
var cyr;
cyr = Date.getFullYear();
d = document.createElement("p");
dtx = document.createTextNode("&copy; " + cyr);
d.appendChild(dtx);
document.body.appendChild(d);

