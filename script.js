var images = [
    "assets/images/renta1.png",
    "assets/images/renta2.png",
    "assets/images/renta3.png",
    "assets/images/renta4.png",
    "assets/images/renta5.png"
];
var index = 0;
var car = document.getElementById("carimg");
var dots = document.querySelectorAll(".dot");


function changeImage() {

    index++;
    if (index >= images.length) {
        index = 0;
    }
    car.src = images[index];

    for (var i = 0; i < dots.length; i++) {

        dots[i].classList.remove("active");
    }
    dots[index].classList.add("active");
}
setInterval(changeImage, 2000)

for (var i = 0; i < dots.length; i++) {

    dots[i].addEventListener("click", function () {
        for (var j = 0; j < dots.length; j++) {

            if (this == dots[j]) {
                index = j;
                car.src = images[index];

                for (var k = 0; k < dots.length; k++) {
                    dots[k].classList.remove("active");
                }
                dots[index].classList.add("active");
            }
        }
    });
}