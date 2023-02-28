// document.addEventListener("DOMContentLoaded", function() {

//     document.getElementById("btn-buscar-cep").addEventListener("click", function() {
//         // AJAX - Asynchronous JavaScript and XML
//         const xhttp = new XMLHttpRequest();
//         const inputCep = document.getElementById("cep").value;
//         const endpoint =  `http://viacep.com.br/ws/${inputCep}/json`;

//         console.log(endpoint)

//         xhttp.open("GET", endpoint);
//         xhttp.send();

//     });

// });

$(document).ready(function() {
    $("#cep").mask('00000-000', { placeholder: "80000-100"});

    $("#btn-buscar-cep").on("click", function() {
        const cep = $("#cep").val();
        const endpoint = `http://viacep.com.br/ws/${cep}/json`;
        const botaoSearch = $(this);

        $(botaoSearch).find("i").addClass("d-none");
        $(botaoSearch).find("span").removeClass("d-none");

        $.ajax(endpoint).done(function(resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            
            
            setTimeout(function() {
                $("#endereco").val(endereco);
                $(botaoSearch).find("i").removeClass("d-none");
                $(botaoSearch).find("span").addClass("d-none");
            }, 1000);

        });
    })
});