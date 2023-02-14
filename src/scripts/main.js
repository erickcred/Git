const urlActive = document.location.pathname.split("/").pop();
let menuPrincipal = document.querySelectorAll(".container nav ul li a");

menuPrincipal.forEach((menu) =>  {
    let active = menu.href.split("/").pop();
    
    if(active == urlActive) {
        menu.classList.add("active");
        console.log(urlActive)
    }
});
