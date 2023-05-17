const langBtn = document.querySelector('.header-menu__btn-lang');
const langWindow = document.querySelector('.header-menu__window-lang');

langBtn.addEventListener("click", function(){
    if(backgroundWindow.classList.contains("active")){
        langWindow.classList.add('dispay-hidden')
        langWindow.classList.remove('dispay-flex')
    }
    else{
        langWindow.classList.toggle('dispay-hidden')
        langWindow.classList.toggle('dispay-flex')
    }
})






const submitBtn = document.querySelector('.order-form__button');
const checkbox = document.querySelector('.checkbox');

function fun1() {
      if (checkbox.checked) {
        submitBtn.disabled = false
      }
      else {
        submitBtn.disabled = true
      }
    }




const accordion = document.querySelectorAll('.main-accordion')

accordion.forEach(function(e){
    e.addEventListener("click", function(){
        let myClasses = document.querySelectorAll('.main-accordion div:nth-child(2)')
        let i = 0;
        let l = myClasses.length;

        for (i; i < l; i++) {
            myClasses[i].classList.remove("active")
        }

        e.querySelector('.main-accordion__cross').classList.toggle("active")
        e.querySelector('div:nth-child(2)').classList.toggle("active")

        
    })
    
})

const backgroundWindow = document.querySelector('.background__windows')
const windowBtns = document.querySelectorAll('.header-navbar__btn')
const windowService = document.querySelector('.header-service')
const windowCompany = document.querySelector('.header-company')
const windowMenu = document.querySelector('.header-menu')
const btnMenu = document.querySelector('.header-navbar__btn-menu')
const btnService = document.querySelector('.header-navbar__btn-service')
const btnCompany = document.querySelector('.header-navbar__btn-company')

windowBtns.forEach(function(e){
    e.addEventListener("click", function(){
        langWindow.classList.add('dispay-hidden')
        langWindow.classList.remove('dispay-flex')

        window.scrollTo(0, 0);
        document.querySelector('body').style.overflow='hidden'
        document.querySelector('body').style.overflowX='hidden'
        let l = 4;

        for (i = 0; i < l; i++) {
            windowBtns[i].classList.remove("active")
        }

        if(e.classList.contains('header-navbar__btns-service')){
            windowService.style.marginTop = '0px'
            windowCompany.style.marginTop = '-550px'
            windowMenu.style.marginTop = '-550px'
            btnService.classList.toggle('active')
            backgroundWindow.classList.add('active')
        }
        else if(e.classList.contains('header-navbar__btns-company')){
            windowCompany.style.marginTop = '0px'
            windowService.style.marginTop = '-550px'
            windowMenu.style.marginTop = '-550px'
            btnCompany.classList.toggle('active')
            backgroundWindow.classList.add('active')
        }
        else if(e.classList.contains('header-navbar__btn-menu')){
            windowMenu.style.marginTop = '0px'
            windowCompany.style.marginTop = '-550px'
            windowService.style.marginTop = '-550px'
            btnMenu.classList.toggle('active')
            backgroundWindow.classList.add('active')
        }
        else if(e.classList.contains('header-window_next')){
            windowMenu.style.marginTop = '0px'
            windowCompany.style.marginTop = '-550px'
            windowService.style.marginTop = '-550px'
            btnMenu.classList.toggle('active')
            backgroundWindow.classList.add('active')
        }
    })
    
})

backgroundWindow.addEventListener("click", function(){
    langWindow.classList.add('dispay-hidden')
    langWindow.classList.remove('dispay-flex')

    backgroundWindow.classList.remove('active')
    document.querySelector('body').style.overflow='scroll'
    document.querySelector('body').style.overflowX='hidden'
    windowService.style.marginTop = '-550px'
    windowCompany.style.marginTop = '-550px'
    windowMenu.style.marginTop = '-550px'
    let l = 4;

        for (i = 0; i < l; i++) {
            windowBtns[i].classList.remove("active")
        }
})



let ScreenWidth1 = window.matchMedia('(max-width: 1280px)')
function handleMobilePhoneResize(e) {   
    // Проверяем, верен ли медиа-запрос
   
    if(e.matches){
        count = 3;  
    }
    else{
        count = 4;
    }
    return
}

// Настраиваем слушателя событий

ScreenWidth1.addListener(handleMobilePhoneResize);
    

const prev = document.getElementById('prev-c');
const next = document.getElementById('next-c');


// конфигурация
let width = 282+24; // ширина картинки
// let count; // видимое количество изображений, и оно зависит он разрешение экрана
    if(window.matchMedia("(max-width: 1280px)").matches){
        count = 3;
    }
    else if (window.matchMedia("(min-width: 1280px)").matches){
        count = 4;
    }

let list = galleryCarousel.querySelector('ul');
let listElems = galleryCarousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

prev.addEventListener("click", function(){
    // сдвиг влево
    if(Math.abs(position) === 0){
        position = -((listElems.length * width) - width * count);
    } 
    else{
    position += width * count;
    }
    // последнее передвижение влево может быть не на 4, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
});

next.addEventListener("click", function(){
    // сдвиг вправо

    position -= width * count;
    if (Math.abs(position) === listElems.length * width) {
    position = 0;
    }
    // последнее передвижение вправо может быть не на 4, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
});