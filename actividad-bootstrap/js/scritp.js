// botones de las cards para abrir la modal 
let botones = document.querySelectorAll(".btn-modal");

botones.forEach(boton => {
    boton.addEventListener("click", function () {
        let modal = new bootstrap.Modal(document.getElementById("modal"));
        modal.show();
    })
});

// validacion de formulario

document.getElementById("Login").addEventListener("submit", function (e) {

    e.preventDefault();

    let correo = document.getElementById("Email").value
    let password = document.getElementById("password").value
    let mensaje = document.getElementById("mensaje");

    const USER_DEFAULT  = "SHARIKJAIME@GMAIL.COM";
    const PASSWORT_DEFAULT = "1234435";

    if (correo === "" || password === "" ){
        mensaje.innerHTML  = "Todos los campos son obligatorios";
        mensaje.className = "text-warnig"    
    }else if (correo === USER_DEFAULT && password === PASSWORT_DEFAULT){
        mensaje.innerHTML = "Bienvenido al sistema";
        mensaje.className = "texl-success"
    }else{
        mensaje.innerHTML = "error al procesar los datos!!!";
        mensaje.className = "text-danger";
    }
    
});
