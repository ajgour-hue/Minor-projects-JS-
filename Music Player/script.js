let arr = [
    { songName: "Maruti", url: "./Songs/maruti.mp3", img: "./Images/maruti.webp", time: "3:56" },
    { songName: "dil dil", url: "./Songs/dil.mp3", img: "./Images/dil dil.jpg", time: "2:56" },
    { songName: "Unse Kehna", url: "./Songs/kehna.mp3", img: "./Images/isha.jpg", time: "2:28" },
    { songName: "I Really Do", url: "./Songs/i.mp3", img: "./Images/karan.jpg", time: "4:56" },
];

let allSongs = document.querySelector('.all-songs');
let poster = document.querySelector('.left');
let audio = new Audio();
let selectedSong = 0;

let pause = document.querySelector('#paus');
let forward = document.querySelector('#for');
let backward = document.querySelector('#rev');

let flag = 0;

function dataFunction() {
    let clutter = "";
    arr.forEach(function (elem, indx) {
        clutter += `
            <div id="${indx}" class="song-card">
                <div class="part1">
                    <img src="${elem.img}">
                    <h2>${elem.songName}</h2>
                </div>
                <h6>${elem.time}</h6>
            </div>`;
    });

    allSongs.innerHTML = clutter;
    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

dataFunction();



allSongs.addEventListener('click', function (dets) {
    let card = dets.target.closest(".song-card");
    if (!card) return;

    selectedSong = Number(card.id);
    dataFunction();
    pause.innerHTML = `<i class="ri-pause-line"></i>`;
    flag = 1;
    audio.play();
});



pause.addEventListener('click', function () {
    if (flag == 0) {
        pause.innerHTML = `<i class="ri-pause-line"></i>`;
        audio.play();
        flag = 1;
    } else {
        pause.innerHTML = `<i class="ri-play-circle-fill"></i>`;
        audio.pause();
        flag = 0;
    }
});


// for
forward.addEventListener('click', function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++;
    dataFunction();
    audio.play();
    } else {
        forward.style.opacity = 0.4;
    }
});


// back
backward.addEventListener('click', function () {
    if (selectedSong > 0) {
    selectedSong--;
    dataFunction();
    audio.play();   

    } else {
        backward.style.opacity = 0.4;
    }
});
