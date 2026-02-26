const btn =document.getElementById("themenBtn");

btn,addEventListener("click", () => {
    document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")){
    btn.textContent= "Modo claro";
}else {
    btn.textContent = "Modo oscuro";
}



})