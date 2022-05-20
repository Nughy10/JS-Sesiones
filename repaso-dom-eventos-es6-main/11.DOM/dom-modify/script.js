//CREAR NODOS
const myP = document.createElement('p');
myP.innerText = "Soy un parrafo <i>hola</i>";  //coge solo texto


const myP2 = document.createElement('p');
myP2.innerHTML = "Soy otro parrafo <b>con bold</b>"; //coge html



//Añadir un nodo
document.body.appendChild(myP);
document.body.appendChild(myP2);


const myList = document.querySelector('.miLista');
const myLi = document.createElement('li');
myList.appendChild(myLi);

myLi.innerText = "soy un li";


const myDiv = document.querySelector('div')

const listaAlimentos = ["lechuga", "tomate", "zanahoria", "cebolla"];

const listaComidas = document.createElement('ul');  //creo mi lista

for (const alimento of listaAlimentos) {            //Recorremos el array
    const comida = document.createElement('li');   //creamos un nodo para cada elemento de nuestra lista
    comida.innerText = alimento;                    //añadimos su contenido
    listaComidas.appendChild(comida);               //lo añado a la lista
}

myDiv.appendChild(listaComidas)             //añado mi lista al documento