let imgSlider = document.getElementsByClassName('imgSlider');

let etape = 0;

let nbrImg = imgSlider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for(let i = 0 ; i < nbrImg ; i++) {
        imgSlider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >= nbrImg) {
        etape = 0;
    }
    enleverActiveImages();
    imgSlider[etape].classList.add('active');
})

precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbrImg - 1;
    }
    enleverActiveImages();
    imgSlider[etape].classList.add('active');
})

//setInterval(function() {
 //   etape++;
 //   if(etape >= nbrImg) {
//        etape = 0;
//    }
//    enleverActiveImages();
//    imgSlider[etape].classList.add('active');
//}, 3000)