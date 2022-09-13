// Menu Navigation
const menuList = document.querySelector('.menu-list');
const closeMenu = document.querySelector('.close-btn');
const openMenu = document.querySelector('.open-btn');
const menu_items = document.querySelectorAll('.menu-list li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menu_items.forEach(item => {
    item.addEventListener('click', function() {
        close();
    })
});

function show() {
    menuList.style.display = 'flex';
    menuList.style.top = '0';
}

function close() {
    menuList.style.top = '-100%';
}

// Slider Navigation
const slides = document.querySelectorAll(".slider-container .slide");
const dots = document.querySelector(".dots");

let counter = 0;
let autoSlide = true;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

for (let i = 0; i < slides.length; i++) {
    if (i === 0) {
        dots.innerHTML += `<div class="dot active" data-id="${i}"></div>`;
    } else {
        dots.innerHTML += `<div class="dot" data-id="${i}"></div>`;
    }
}

dots.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    counter = id;
    changeImg();
});

const dotControl = (index) => {
    document.querySelectorAll(".dot").forEach((i) => {
        i.classList.remove("active");
    });

    document.querySelector(`.dot[data-id = '${index}']`).classList.add("active");
};

const changeImg = () => {
    if (counter > slides.length - 1) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    dotControl(counter);
};

if (autoSlide === true) {
    setInterval(() => {
        counter++;
        changeImg();
    }, 5000);
};