console.log("JS");
/**
 * Para interactuar con el DOM tenemos que seguir varios pasos.
 *
 * 1. Buscar el elemento con el que queremos interactuar
 *
 * 2. Hacer el cambio o modificación que queramos.
 *
 * 3. Actualizar el elemento en el HTML
 */

/**
 * Selectores, elegir un elemento del DOM y guardarlo en una variable
 */
// Por ID
const one = document.getElementById("pepe"); // Coge el documento con ID Pepe
one.getAttribute("class"); // una-clase otra-clase
one.classList.add("blue");
one.classList.remove("red");
console.log(one);

const showPepe = () => {
  console.log("Ejecuto showPepe");
  /**
   * Si el div pepe tiene la clase visible, la cambiaremos por hidden.
   * Si el div pepe tiene la clase hidden, la cambiaremos por visible.
   */

  const divPepe = document.getElementById("pepe");
  const clasesDePepe = divPepe.className;

  if (clasesDePepe.includes("visible")) {
    divPepe.classList.replace("visible", "hidden");
  } else {
    divPepe.classList.replace("hidden", "visible");
  }
};

// por Clase
const byClassName = document.getElementsByClassName("list");
console.log(byClassName);
// ejecutar forEach cuando el resultado es HTMLCollection
const byClassNameArray = Array.from(byClassName);
console.log(byClassNameArray);
byClassNameArray.forEach(function (element) {
  console.log(element);
});

// por name
const element = document.getElementsByName("apellido");
console.log(element);

// por tipo de elemento.
const inputs = document.getElementsByTagName("input");
console.log(inputs);

// usando selectores como en CSS -> querySelector querySelectorAll
const primerElementoConClaseList = document.querySelector(".list");

const todosConClaseList = document.querySelectorAll(".list");

const dentroDeFormConClaseList = document.querySelectorAll("form .list");

todosConClaseList.forEach(function (element) {
  console.log(element);
  element.classList.add("upgrade");
});

// CreateTextNode
const text = document.createTextNode("Contenido del H3");
const title3 = document.querySelector(".title-3");
title3.appendChild(text);

// Añadir HTML a un elemento.
const divContainer = document.querySelector("#container");
divContainer.innerHTML = "<ul><li>Elemento1</li> <li>Elemento2</li> </ul>";

// RemoveChild aplicamos la función parent.removeChild(hijo)
const formParent = document.querySelector("form");

document.body.childNodes.forEach(function (element) {
  if (element.style) element.style.color = "blue";
});

/**
 * Módulo de HTML & CSS -> Portfolio
 * Módulo de JS -> portfolio-js -> aprender a generar el html con JS.
 * Módulo de Node -> Crear API para vuestro portfolio (en base de datos estará todo)
 * Módulo de React -> portfolio-react -> Llegar al mismo resultado, pero con React.
 */

/**
 * ESTO NO!!!!
 */
const myHtml = `
    <div>
        <h1>Div generado automáticamente</h1>

        <footer>
            <span> Esto es un Span </span>
            <span> Esto es un Span </span>
            <span> Esto es un Span </span>
        </footer>
    </div>
`;

divContainer.innerHTML = myHtml;