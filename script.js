const btToggle = document.getElementById("botao")
const header =document.getElementById("header")

btToggle.addEventListener("click", ()=> {
    btToggle.classList.toggle("on");
    header.classList.toggle("active")
    document.body
})

