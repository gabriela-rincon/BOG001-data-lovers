
import { filterByRol } from "./data.js";
import { orderNames } from "./data.js";

import data from "./data/lol/lol.js";

const champions = Object.values(data.data);


const print = (champions) =>{
  let contenedor = document.getElementById("card");
  contenedor.innerHTML = "";
  champions.forEach(element => {
    let championContainer = document.createElement("div");
    championContainer.classList.add("champions");
    const image = document.createElement("img");
    image.src = element.img;
    championContainer.appendChild(image);
    const parrafoName = document.createElement("p");
    parrafoName.appendChild(document.createTextNode("Name:" + " " + element.name));
    const parrafoRol = document.createElement("p");
    parrafoRol.appendChild(document.createTextNode("Rol:" + " " + element.tags));
    championContainer.appendChild(parrafoName);
    championContainer.appendChild(parrafoRol);
    contenedor.appendChild(championContainer);
    });
    /*champions.forEach(information => {
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("information");
    const parrafoAttack = document.createElement("p");
    parrafoAttack.appendChild(document.createTextNode("Attack:" + " " + information.info.attack));
    const parrafoDefense = document.createElement("p");
    parrafoDefense.appendChild(document.createTextNode("Defense:" + " " + information.info.defense));
    const parrafoMagic = document.createElement("p");
    parrafoMagic.appendChild(document.createTextNode("Magic:" + " " + information.info.magic));
    const parrafoDifficulty = document.createElement("p");
    parrafoDifficulty.appendChild(document.createTextNode("Difficulty:" + " " + information.info.difficulty));
    infoContainer.appendChild(parrafoAttack);
    infoContainer.appendChild(parrafoDefense);
    infoContainer.appendChild(parrafoMagic);
    infoContainer.appendChild(parrafoDifficulty);
    contenedor.appendChild(infoContainer);
    //contenedor.appendChild(contenedor);
  });*/
    
}

/* --------Hover--------*/


/* --------Ordenar de la A-Z y Z-A--------*/
let order = document.querySelector('.orderLol');
order.addEventListener('click', function(e){
  const btnOrder = e.target.textContent;
  console.log(btnOrder)
  const filterData =filterByRol(champions)
  const orderData = orderNames(champions,btnOrder);
  console.log(orderData)
  print (orderData);
});

/* --------Filtro--------*/

let roles = document.querySelector(".rolesLol");
roles.addEventListener('click', function(e){
const btnRol = e.target.textContent;
const filterData = filterByRol(champions,btnRol);
//console.log(filterData);
print (filterData);
});


print(champions);