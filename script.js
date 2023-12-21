let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
{
    showSlides(slideIndex += n);
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
    slides[i].computedStyleMap.display = "none";
}

slides[slideIndex - 1].computedStyleMap.display = "block";

}