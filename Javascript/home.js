//Image Slide
const slides = naturalizavivalacalera.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider()
naturalizavivalacalera.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function Actions(changeColor, addTxt) {
  //modificar contenido de un elemento
  naturalizavivalacalera
    .getElementById("cambiarEstilo")
    .addEventListener("click", () => {
      const parrafo = naturalizavivalacalera.getElementById("parrafo");
      parrafo.style.color = "blue";
      parrafo.style.fontSize = "20px";
      parrafo.style.fontWeight = "bold";
    });
  //cambiar estilo
  naturalizavivalacalera
    .getElementById("cambiarEstilo")
    .addEventListener("click", () => {
      const parrafo = document.getElementById("parrafo");
      parrafo.style.color = "red";
      parrafo.style.fontSize = "20px";
      parrafo.style.fontWeight = "bold";
    });
  //añadir o quitar clases
  document.getElementById("toggleClase").addEventListener("click", () => {
    const parrafo = document.getElementById("parrafo");
    parrafo.classList.toggle("resaltado");
  });
  //añadir elementos al DOM
  document.getElementById("añadirElemento").addEventListener("click", () => {
    const nuevoElemento = document.createElement("p");
    nuevoElemento.innerText = "Nuevo párrafo añadido";
    document.getElementById("contenedor").appendChild(nuevoElemento);
  });
  //cambiar contenidos en base a eventos
  document.getElementById("entrada").addEventListener("input", (event) => {
    document.getElementById("salida").innerText = event.target.value;
  });
}
