/*Colocamos un bowl 
Añadir 400 gramos de harina de trigo
Añadir 200 ml de agua tibia
Añadir 2 cucharadas de aceite de oliva
Añadir 15 gramos de levadura fresca
Añadir 10 gr. de sal
Mezclar todo
Dejar reposar 20 min. en cámara cerrada para que fermente
Alisar hasta darle un grosor de 0,5 cm y forma redonda con un rodillo de cocina
Pinchar la masa
Añadir 200 ml de tomate triturado repartido por toda la base 
Añadir 150 gr jamón york troceado repartido por toda la base
Añadir 150 gr queso rallado repartido por toda la base
Añadir 15 gr de orégano seco repartido por toda la base
Introducir al horno 20 min a 180 º con calor por arriba y por abajo
Sacamos del horno.*/


let bowl = "bowl";
let GrSalt = 10;
let flour = "harina"; 
let GrFlour = 400;
let cheese = "cheese"
let water = "water"
let oliveoil = "oliveoil"
let yeast = "yeast"

let grams

/*function MakePizza() {
    console.log("Colocamos un", bowl);
    console.log("añadir",GrFlour, )
}*/

let pizza = "Pizza";
let kind = "margarita";
console.log (Pizza+margarita)


//slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}