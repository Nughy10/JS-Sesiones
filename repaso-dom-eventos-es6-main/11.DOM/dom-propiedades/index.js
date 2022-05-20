// Propiedades de los nodos


const myTitle = document.querySelector('h1')

console.log(myTitle.classList)

myTitle.classList.add('title2')  /// añadimos clase a la lista

const myImage = document.querySelector('img')
console.log(myImage.attributes)
myImage.setAttribute("src", "https://th.bing.com/th/id/OIP.bwK8Zr21aOuO3gSd6U_lHgHaEo?pid=ImgDet&rs=1")
myImage.setAttribute("alt", "one piece")

myImage.className = "miImagen"  // añadimos clase

const myLista = document.querySelector('ul')
console.log(myLista.firstElementChild) //Cogemos el primer elemento de la lista

console.log(myLista.lastElementChild)   // cogemoso el ultimo elemento de la lista



//Construir elementos anidados
const myDiv = document.createElement('div')
const myP =  document.createElement('p');
const myDivImage = document.createElement('img')
myP.innerText = "soy un nuevo p";
myDivImage.setAttribute("src", "https://th.bing.com/th/id/R.ad7d4c55c45784cdd313546adcfe47e3?rik=vJ8jW2itFRp2jQ&pid=ImgRaw&r=0")
myDivImage.setAttribute("alt", "otra imagen de one piece")

myDiv.appendChild(myP);
myDiv.appendChild(myDivImage);

document.body.appendChild(myDiv)




//innerHTML

const  myObjeto = {
    name: "Juan",
    edad: "30",
    telefono: "900900900"
}

const myDiv2 = document.createElement('div');

myDiv2.innerHTML = `
    <p class="nombre">${myObjeto.name}</p>
    <p class="edad">${myObjeto.edad}</p>
    <p class="telefono">${myObjeto.telefono}</p>
`;

document.body.appendChild(myDiv2)

