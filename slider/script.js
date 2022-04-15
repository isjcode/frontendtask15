let pics = ["img/apple.jpg", "img/banana.jpg", "img/watermelon.jpg"];

let current_index = 0;
let pic = document.getElementById("pic");

let next = () => {
    current_index++;
    if (current_index == pics.length) {
        current_index = 0;
    }

    pic.src = pics[current_index];
};

let prev = () => {
    current_index--;
    if (current_index == -1) {
        current_index = pics.length - 1;
    }

    pic.src = pics[current_index];
}

document.getElementsByClassName("fa-chevron-right")[0].addEventListener("click", () => {
    next();
});

document.getElementsByClassName("fa-chevron-left")[0].addEventListener("click", () => {
    prev();
});

setInterval(next, 1000);


