function saluda(){
    console.log("Hola")
}

const myButton = document.createElement('button');
myButton.innerText = "Adios";
myButton.addEventListener("click", adios);
document.body.appendChild(myButton);

function adios(){
    console.log("Adios");
}


const myFocusInput = document.querySelector('.focus');

myFocusInput.addEventListener("focus", focus)

function focus(){
    console.log("focus");
}

//Keypress  -- Keyup -- input
//Key press es evento al pulsar tecla
//keyup al soltar tecla
//se lanza al haber cambios en el input
function input(){
    const myInput = document.querySelector (".input")
    console.log(myInput.value)
}


function handleResize(event){
    console.log(event.target.innerHeight, event.target.innerWidth)

}
window.addEventListener("resize", handleResize)


function handleScroll(event){
    console.log(event)
}
window.addEventListener("scroll", handleScroll)