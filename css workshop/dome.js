var clk=document.querySelector("#clk")

let change=
clk.addEventListener("click",()=>{
    clk.textContent="clicked"
    clk.style.color="red"

})
var dbclk=document.querySelector("#dbclk")
dbclk.addEventListener("dblclick",()=>{
    dbclk.textContent="doubleclicked";
    dbclk.style.color="green"
})
var ove=document.querySelector("#ove")
ove.addEventListener("mouseover",()=>{
    ove.textContent="mouse currently over me"
    ove.style.color="blue"
})
ove.addEventListener("mouseout",()=>{
    ove.textContent="mouse not overme";
    ove.style.color="cyan"
})