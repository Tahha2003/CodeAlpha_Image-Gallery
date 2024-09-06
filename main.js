// Get the modal element
var modal = document.getElementById("modal");

// Get the modal image element and caption
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

// Get all images in the gallery and add click event
var images = document.getElementsByClassName("gallery-item");
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Close the modal when the user clicks on <span> (x)
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
