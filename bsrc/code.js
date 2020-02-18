// Copyright
var d;
var dtx; 
var cyr;
var con;
con = document.getElementByClass("container");
cyr = Date.getFullYear();
d = document.createElement("p");
dtx = "&copy; " + cyr;
d.innerHTML = dtx;
con.appendChild(d);
