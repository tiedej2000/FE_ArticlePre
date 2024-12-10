const shareBtn = document.querySelector('.share-button')
const shareBox = document.querySelector('.share-box')
const shareBtnSvg = shareBtn.querySelector('svg')

const triangle = document.querySelector('.triangle')

shareBtn.addEventListener('click',(e) =>{
    shareBox.classList.toggle('share-box-active')
    shareBtn.classList.toggle('share-button-active')
    shareBtnSvg.classList.toggle('share-button-active')
    triangle.classList.toggle('triangle-active')
})

