//DOM --> Document object model --> podemos tratar el html a través de todos sus nodos.
// Document -- > Objeto ráiz, todo lo que está englobado por las etiquetas HTML
// Elements --> Todo lo que está englobado por etiquetas de apertura y cierre de html --> <p></p>
// Attr --> Atributos de nuestros elementos --> class, id, type, etc
// Text--> texto del emelemto


//Buscar elementos por tag, clase o id
const myTitle =  document.querySelector("h1")   //QuerySelector devuelver el primer elemento que coincida con la busqueda
console.log("tag", myTitle)
const myTitle2 =  document.querySelector(".miTitulo")
console.log("clase",myTitle2)
const myTitle3 =  document.querySelector("#titulo")
console.log("id",myTitle3)


const myTitle5 =  document.getElementsByClassName('miTitulo')  //getElementsByClassName devuelve un array con todos los elementos que tengan esa clase
console.log("clase",myTitle5[0])
const myTitle4 = document.getElementById("titulo")  //getElementById devuelve el elemento con la clase que busquemos
console.log("id",myTitle4)


const myLis = document.querySelectorAll(".list-element") //querySelectorAll devuelve todos los elementos que coinicidan con la busqueda
console.log("get all li", myLis)