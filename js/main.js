'use strict';

function add() {
    
    var paragraph = document.createElement("p");
    var node = document.createTextNode("Task number");
    paragraph.appendChild(node);
    
    var display = document.getElementById("display");
    
    display.appendChild(paragraph);  
}

function remove() {
    var list = document.getElementById("display");
    if (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    }
}

function cleaning() {
    var liste = document.getElementById("display");
    while (liste.hasChildNodes()) {
        liste.removeChild(liste.firstChild);
    }
}


