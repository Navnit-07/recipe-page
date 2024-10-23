const close = document.querySelector('.close');
const openCloseContent = document.querySelector('.options');
const open = document.querySelector('.slide-bar');
const blackBackground = document.querySelector('.cont-slide')

open.addEventListener('click',()=>{
    openCloseContent.style= 'left: 0;'
    open.style= 'opacity: 0'
    close.style= 'visiblity: visible;'
    blackBackground.style = 'opacity: 0.5'
})
close.addEventListener('click',()=>{
    openCloseContent.style= 'left: -40vw;'
    open.style= 'visiblity: visible;'
    close.style= 'opacity: 0;'
    blackBackground.style = 'opacity: 0'
})