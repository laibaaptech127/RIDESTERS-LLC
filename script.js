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
        image:"assets/icon1.png",
        heading:"assets/No Delays (1).png",
        para:"Lorem Ipsum has been the industry's <br> standard dummy text ever since."
    },
    {
        image:"assets/icon2.png",
        heading:"assets/Diverse Selection (3).png",
        para:"Lorem Ipsum has been the industry's <br> standard dummy text ever since."
    },
    {
        image:"assets/icon3.png",
        heading:"assets/Best Prices (6).png",
        para:"Lorem Ipsum has been the industry's <br> standard dummy text ever since."
    }
]

for(let i=0;i<cards.length;i++){
    cardrow.innerHTML+=`<div class="col-4 flex flex-col justify-center items-center text-center gap-3">
                <div class="box flex justify-center items-center text-center">
                    <img src="${cards[i].image}" class="myimg" alt="" width="80px">
                </div>
                <img src="${cards[i].heading}" alt="">
                <p class="text-gray-600 text-sm">"${cards[i].para}</p>
            </div>
    `
}

// Card Section
Carcards=[
    {
        img:"assets/cardd1.png",
        head:"ferrari 458 italia",
    },
    {
        img:"assets/card2.png",
        head:"Toyota Camry",
    },
    {
        img:"assets/card3.png",
        head:"BMW 3 Series",
    },
    {
        img:"assets/card4.png",
        head:"Mercedes-Benz E-Class",
    },
    {
        img:"assets/card5.png",
        head:"Ford Mustang",
    },
    {
        img:"assets/card6.png",
        head:"Honda Civic",
    },
    {
        img:"assets/card7.png",
        head:"Chevrolet Corvette",
    },
    {
        img:"assets/card8.png",
        head:"Audi A4",
    },
]
let maincards = document.getElementById("maincards");
for(let i=0;i<Carcards.length;i++){
    maincards.innerHTML+=`<div class="col-3 mt-4">
                <div class="main-container flex flex-col justify-start gap-5 ">
                    <div class="img-container flex justify-center items-center">
                        <center><img src="${Carcards[i].img}" alt="" width="200px"></center>
                    </div>
                    <div class="con-container">
                        <h5>${Carcards[i].head}</h5>
                        <div class="divider flex justify-start items-center gap-2 mt-2">
                            <div class="divider1 flex gap-1">
                            <i class="fa-regular fa-user" style="color: rgb(128, 128, 128);"></i>
                                <p class="text-sm">3 passengers</p>
                            </div>
                            <div class="divider2 flex gap-1">
                            <i class="fa-solid fa-user" style="color: rgb(128, 128, 128);"></i>
                                <p class="text-sm">manual</p>
                            </div>
                        </div>
                        <p class="text-sm">Lorem Ipsum has been <br>the industry standard since...</p>
                        <div class="btn-div flex gap-2">
                            <p class="pt-2"><span class="text-black font-bold">$200/</span>day</p>
                            <div class="carbtn">
                         <button class="cbtn">Book Now</button>
                       </div>
                        </div>
                    </div>
                </div>
            </div>`
}