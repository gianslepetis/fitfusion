document.querySelector('#show-login').addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active")
})
document.querySelector('.popup .btn-cerrar').addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active")
})
