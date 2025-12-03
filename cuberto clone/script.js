


var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});



// Button hover effect
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        cursor.classList.add("btn-hover");
    });
    btn.addEventListener("mouseleave", () => {
        cursor.classList.remove("btn-hover");
    });
});


// Image hover effect
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("mouseenter", () => {
        cursor.classList.add("img-hover");
    });
    img.addEventListener("mouseleave", () => {
        cursor.classList.remove("img-hover");
    });
});


var heading = document.querySelectorAll('#big-heading');

heading.forEach(function(e){

    e.addEventListener('mouseenter', function () {
    cursor.classList.add("heading-hover");
});

e.addEventListener('mouseleave', function () {
    cursor.classList.remove("heading-hover");
});

})

// var homemain = document.querySelector('#home-main');
//     homemain.addEventListener('mouseenter', function () {
//     cursor.classList.add("heading-hover");
// });

// homemain.addEventListener('mouseleave', function () {
//     cursor.classList.remove("heading-hover");
// });



var random  = document.querySelector('.randomise');
var characters = 'ABCDEFGHIJKLMNOPQRmnopqrstuvwxyz0123456789';
var text = random.innerText;
random.innerText = text;

let iteration = 0 ;
function setRandom(){
      const str  = text.split("").map((char , index)=>{
        if(index < iteration){
    return char;
}
        return characters.split("")[Math.floor(Math.random()*characters.length)];
     }).join("");
     random.innerText = str;
      iteration += 0.6;
}


    setInterval(setRandom , 30);