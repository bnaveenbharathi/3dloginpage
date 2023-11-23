const box=document.querySelector(".box")
const main=document.querySelector(".main")
const img=document.querySelector("#img")
const form=document.querySelector("#form")
const newimg=document.querySelector("#new")
// animation of the box
main.addEventListener("mousemove", (e) =>{
    console.log(e.pageX)
    // calculate of the animation
    let horizontal=(window.innerWidth /2 - e.pageX) /30;
    let vertical=(window.innerHeight /2 - e.pageY) /30;
    box.style.transform = `rotateX(${vertical}deg) rotateY(${horizontal}deg)`
})
// mouseenter animation
main.addEventListener("mouseenter",(e) => {
         box.style.transition =".2s"
         img.style.transform = `translateZ(120px)`
         form.style.transform = `translateZ(120px)`
         newimg.style.transform = `translateZ(120px)`


})
// mouseleave functionality
main.addEventListener("mouseleave",(e) => {
    box.style.transition =".2s"
    box.style.transform ="rotateY(0deg) rotateX(0deg)"
    img.style.transform = `translateZ(0px)`
    form.style.transform = `translateZ(0px)`
    form.style =`margin-left: 2px;`
    newimg.style.transform = `translateZ(0px)`
})
