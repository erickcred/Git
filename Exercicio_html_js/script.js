const form = document.querySelector(".form-numbers");
const buttonEnviar = document.querySelector(".enviar");
let primaryNumber = document.getElementById("primary-number");
let secondNumber = document.getElementById("second-number");
let formIsValid = false;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formIsValid) {
        removeError();
        document.querySelector(".message-form-valid").classList.add("message-success");
        document.querySelector(".message").classList.remove("message-success");
        form.reset();
    }
});

function validaNumero(n1, n2) {
    return n1 > n2;
}

secondNumber.addEventListener("keyup", (event) => {
    if (validaNumero(parseInt(primaryNumber.value), parseInt(event.target.value))) {
        removeError();
    } else {
        setaError();
    }
});

function setaError() {
    document.querySelector(".message").textContent = "O primeiro número que tem que ser maior que o sengundo";
    document.querySelector(".message").classList.add("message-error");
    document.querySelector(".message").classList.remove("message-success");
    primaryNumber.classList.add("input-error");
    buttonEnviar.setAttribute("disabled", "true");
    buttonEnviar.classList.add("disabled");
    formIsValid = false;
}

function removeError() {
    formIsValid = true;
    document.querySelector(".message").textContent = "Tudo certo por aqui";
    document.querySelector(".message").classList.add("message-success");
    document.querySelector(".message").classList.remove("message-error");
    primaryNumber.classList.remove("input-error");
    buttonEnviar.removeAttribute("disabled");
    buttonEnviar.classList.remove("disabled");
}

