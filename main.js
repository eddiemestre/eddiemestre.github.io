// Google Maps API

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('location'), {
    // Los Angeles
    center: {lat: 34.0522, lng: -118.2437},
    zoom: 14
  });
}

// Gallery Scroller

var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

// Gallery fit div

(function() {

var img = document.getElementById('gallery').firstChild;
img.onload = function() {
    if(img.height > img.width) {
        img.height = '100%';
        img.width = '100%';
    }
};

}());
