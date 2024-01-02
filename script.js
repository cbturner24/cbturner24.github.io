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

// add buttons for other sites 
document.getElementById("Linkedin").addEventListener("click", function(){
    window.open('www.linkedin.com/in/chloebturner', '_blank');
});
document.getElementById("Github").addEventListener("click", function(){
    window.open('https://github.com/cbturner24/', '_blank');
});

//adding table of contents link event

document.getElementById("LinkProject1").addEventListener("click", function () {
    currentSlide(3); // Adjust the slide index accordingly
});
document.getElementById("LinkProject2").addEventListener("click", function () {
    currentSlide(4); // Adjust the slide index accordingly
});
document.getElementById("LinkProject3").addEventListener("click", function () {
    currentSlide(5); // Adjust the slide index accordingly
});
document.getElementById("LinkProject4").addEventListener("click", function () {
    currentSlide(6); // Adjust the slide index accordingly
});