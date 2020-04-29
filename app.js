
//my array of objects
let pictures = [
    {
        id: 1,
        img: 'https://ak0.picdn.net/shutterstock/videos/1016997550/thumb/1.jpg',
        text: 'black_1'
    },
    {
        id: 2,
        img: 'https://pluspng.com/img-png/smoke-hd-png-hd-smoke-png-6-1600.png',
        text: 'black_2'
    },
    {
        id: 3,
        img: 'https://img.freepik.com/free-photo/_44314-865.jpg?size=626&ext=jpg',
        text: 'black_3'
    },
    {
        id: 4,
        img: 'https://wallpaperaccess.com/full/2222081.jpg',
        text: 'black_4'
    }
];

//find elements
let nextBtn = document.querySelector('.nextButton');
let backBtn = document.querySelector('.prevButton');
let img = document.querySelector('.img');
let txt = document.querySelector('.text');

//create current value
let currentValue = 0;

//initial value
initialValue();

//event handler
nextBtn.addEventListener('click', showNextImg);
backBtn.addEventListener('click', showPrevImg);

//functions definitions
function initialValue() {
    img.src = pictures[currentValue].img;
    txt.innerHTML = pictures[currentValue].text;
}

function showNextImg() {
    currentValue++;
    //check currentValue
    if (currentValue === (pictures.length)) {
        currentValue = 0;
    }
    img.src = pictures[currentValue].img;
    txt.innerHTML = pictures[currentValue].text;
}

function showPrevImg() {
    currentValue--;
    //check currentValue
    if (currentValue < 0) {
        currentValue = pictures.length - 1;
    }
    img.src = pictures[currentValue].img;
    txt.innerHTML = pictures[currentValue].text;
}

