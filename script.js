// add slide of projects 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
{
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n)
{let i;
const slides = document.getElementsByClassName("mySlides");

if (n> slides.length) {
    slideIndex = 1;
}
if (n <1) {
    slideIndex = slides.length;
}
for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slides[slideIndex - 1].style.display = "block";

}
//adding pop up about me
document.getElementById("openAbout").addEventListener("click", function(){
    document.getElementById("aboutPopup").style.display = "block";
});

document.getElementById("closeAbout").addEventListener
("click", function(){

document.getElementById("aboutPopup").style.display = "none";
});

//adding table of contents link event

document.getElementById("Project1").addEventListener("click", function () {
    currentSlide(3); // Adjust the slide index accordingly
});
document.getElementById("Project2").addEventListener("click", function () {
    currentSlide(4); // Adjust the slide index accordingly
});
document.getElementById("Project3").addEventListener("click", function () {
    currentSlide(5); // Adjust the slide index accordingly
});
document.getElementById("Project4").addEventListener("click", function () {
    currentSlide(6); // Adjust the slide index accordingly
});