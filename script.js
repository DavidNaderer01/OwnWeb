var date = new Date();

document.getElementById("header").innerHTML = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

var children = document.getElementById("headersection").children;

var span = document.createElement("span");
span.innerHTML = "This is a try";

children.item(1).appendChild(span);