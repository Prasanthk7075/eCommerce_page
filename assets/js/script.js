
var Main_image = document.getElementById("Big-Image")
var small_img = document.querySelectorAll('.small-img')

small_img[0].onclick = function () {
    Main_image.src = small_img[0].src;
}

small_img[1].onclick = function () {
    Main_image.src = small_img[1].src;
}

small_img[2].onclick = function () {
    Main_image.src = small_img[2].src;
}
small_img[3].onclick = function () {
    Main_image.src = small_img[3].src;
}

console.log("hello")