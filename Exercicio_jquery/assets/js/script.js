$(document).ready(() => {
    const formTarefa = $("#form-tarefa");
    let inputTarefa = $("#tarefa");
    let ul = $("#lista-tarefas");

    $(formTarefa).on("submit", (event) => {
        event.preventDefault();
        criaLinha();
        inputTarefa.val("");
    });

    let criaLinha = () => {
        let li = $("<li></li>", {
            style: "display: none",
            class: "tarefa",
            text: inputTarefa.val()
        }).appendTo(ul);
        $(li).fadeIn(500);        
    }

    $(ul).on("click", ".tarefa", (e) => {
        $(e.target).addClass("finalizado");

        if ( $(e.target.classList.contains("finalizado")) ) {
            $(e.target).fadeOut(750, 0, function () {
                $("ul li").last().after(e.target);
            });

            $(e.target).fadeIn(750, 0, function () {
                $("ul li").last().after(e.target);
            });
        }
    });

});