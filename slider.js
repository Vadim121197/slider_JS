//create object  - slider
let slider = {
    //find elements
    nextBtn: document.querySelector('.nextButton'),
    backBtn: document.querySelector('.prevButton'),
    img: document.querySelector('.img'),
    txt: document.querySelector('.text'),
    // current value for img and text
    currentValue: 0,
    //array of img and descriptions
    pictures: [
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
    ],
    //method of next btn
    showNextImg: function (e) {
        this.currentValue++;
        //check currentValue
        if (this.currentValue === (this.pictures.length)) {
            this.currentValue = 0;
        }
        this.img.src = this.pictures[this.currentValue].img;
        this.txt.innerHTML = this.pictures[this.currentValue].text;
    },
    //method of previous btn
    showPrevImg: function (e) {

        this.currentValue--;
        //check currentValue
        if (this.currentValue < 0) {
            this.currentValue = this.pictures.length - 1;
        }
        this.img.src = this.pictures[this.currentValue].img;
        this.txt.innerHTML = this.pictures[this.currentValue].text;
    },
    //initial value img and txt + method event handler
    start: function () {
        //will grasp for object - slider
        let that = this;

        this.img.src = this.pictures[this.currentValue].img;
        this.txt.innerHTML = this.pictures[this.currentValue].text;

        //function (e){that.showNextImg(e)} - call method showNextImg of that(object - slider)
        //circuit - замыкание
        this.nextBtn.addEventListener('click', function (e){that.showNextImg(e)});
        this.backBtn.addEventListener('click', function (e){that.showPrevImg(e)});
    }
}