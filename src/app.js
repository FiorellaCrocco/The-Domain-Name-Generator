/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo!");
};

let createTexto = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominio = [".com.uy", ".edu.uy"];

  let ul = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dominio.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + dominio[l]);
          ul += "<h3>" + pronoun[i] + adj[j] + noun[k] + dominio[l] + "</h3>";
        }
      }
    }
  }
  return ul;
};

document.getElementById("mostrar").innerHTML = createTexto();
console.log(createTexto());
