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




const accordion = document.querySelectorAll('.service-accordion')

accordion.forEach(function(e){
    e.addEventListener("click", function(){
        let myClasses = document.querySelectorAll('.service-accordion div:nth-child(2)')
        let i = 0;
        let l = myClasses.length;

        for (i; i < l; i++) {
            myClasses[i].classList.remove("active")
        }

        e.querySelector('.service-accordion__cross').classList.toggle("active")
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
    windowService.style.marginTop = '-550px'
    windowCompany.style.marginTop = '-550px'
    windowMenu.style.marginTop = '-550px'
    let l = 4;

        for (i = 0; i < l; i++) {
            windowBtns[i].classList.remove("active")
        }
})