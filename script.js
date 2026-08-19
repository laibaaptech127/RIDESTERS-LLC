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

document.getElementById("cardrow");
cards=[
    {
        image:"assets/Group (1).png",
        heading:"assets/No Delays (1).png",
        para:"Lorem Ipsum has been the industry's <br> standard dummy text ever since."
    },
    {
        image:"assets/Group (1).png",
        heading:"assets/Diverse Selection (3).png",
        para:"Lorem Ipsum has been the industry's <br> standard dummy text ever since."
    },
    {
        image:"assets/Group (1).png",
        heading:"assets/Best Prices (6).png",
        para:"Lorem Ipsum has been the industry's <br> standard dummy text ever since."
    }
]

for(let i=0;i<cards.length;i++){
    cardrow.innerHTML+=`<div class="col-4 flex flex-col justify-center items-center text-center gap-3">
                <div class="box flex justify-center items-center text-center">
                    <img src="${cards[i].image}" class="myimg" alt="" width="50px">
                </div>
                <img src="${cards[i].heading}" alt="">
                <p class="text-gray-600 text-sm">"${cards[i].para}</p>
            </div>
    `
}