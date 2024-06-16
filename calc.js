const button = document.querySelectorAll(".button")
const screen = document.querySelector(".screen")
const equal = document.querySelector(".btnequal")
const cancel = document.querySelector(".btncancel")

console.log(equal)

button.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        screen.value += btn.innerHTML
    })
})
equal.addEventListener("click", ()=>{
   
    if(screen.value === ""){
        screen.value = ""
    }
    else{
           let answer = eval(screen.value)
            screen.value = answer    
        }
    
})
cancel.addEventListener("click", ()=>{
   screen.value = ""
});