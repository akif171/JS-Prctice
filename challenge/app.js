const navbar = document.querySelector('.header')

navbar.addEventListener('scroll',()=>{

    if(scroll>100){
        navbar.style.backgroundcolor = "#fff"
    }
})