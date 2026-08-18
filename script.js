let carImages = [
    "assets/car rental1.png",
    "assets/car rental2.png",
    "assets/car rental3.png",
    "assets/car rental4.png",
    "assets/car rental5.png"
];

let slider = document.getElementById("carimg"); 
let buttons = document.querySelectorAll(".dot");

let currentnumber = 0; 

function changeimg(number){
    slider.src = carImages[number];

    buttons.forEach(function(btn){
        btn.classList.remove("active");
    });

    buttons[number].classList.add("active"); 
}

function autoplay(){
    currentnumber = currentnumber + 1;

    if(currentnumber == carImages.length){
        currentnumber = 0;
    }
    changeimg(currentnumber);
}

let timer = setInterval(autoplay, 3000);

buttons.forEach(function(btn, index){
    btn.addEventListener("click", function(){
        currentnumber = index;
        changeimg(currentnumber);
        clearInterval(timer);
        timer = setInterval(autoplay, 3000);
    });
});