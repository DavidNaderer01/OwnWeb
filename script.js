const date = new Date();

document.getElementById("header").textContent = date.getDate().toString() + "." + date.getMonth().toString() + "." + date.getFullYear().toString();

let children = document.getElementById("header section").children;

let span = document.createElement("span");
span.innerHTML = "This is a try";

children.item(1).appendChild(span);