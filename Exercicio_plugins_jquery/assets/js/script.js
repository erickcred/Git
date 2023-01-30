$(document).ready(() => {

    /* Validações */
    $("#form-endereco").validate({
        rules: {
            nome: { 
                required: true,
                maxlength: 100,
                minlength: 10
            },
            telefone: { required: true },
            email: { 
                required: true,
                email: true
            },
            cpf: { required: true },
            cep: { required: true }
        },
        messages: {
            nome: {
                required: "Nome é obrigatório!",
                minlength: "Por favor, informe o <em>Nome completo</em>",
                maxlength: "Esse campo pode conter no maximo <em>100 caracteres</em>"
            },
            telefone: { required: "Telefone é obrigatório!" },
            email: { required: "E-mail é obrigatório!" },
            cpf: { required: "O CPF deve ser informado" },
            cep:  { required: "CEP é obrigatório!" }
        },
        submitHandler: function (form) {
            alert("Dados enviados com sucesso!")
            form.reset();
        },
        invalidHandler: (evento, validador) => {
            let camposIncorretos = validador.numberOfInvalids();
        }
    })


    /* Mascaras */
    $("input[name='telefone']").mask("(00) 0 0000-0000", {
        placeholder: "(41) 98888-8888"
    });
    $("input[name='cpf']").mask("000.000.000-00", {
        placeholder: "011.011.011-112"
    });
    $("input[name='cep']").mask("00000-000", {
        placeholder: "81000-000"
    });
    
    /* API Via CEP */
    $("input[name='cep']").blur(async function() {

    let cep = this.value;

        await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
            method: "get",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            response.json().then((data) => {
                if (!data.erro) {
                    $("input[name='endereco']").val(`${data.logradouro}, ${data.bairro}, ${data.localidade}/${data.uf}`)
                    return;
                }

                $("input[name='endereco']").val("Erro: CEP invalido ou não encontrado, preencha este campo manualmente!")
            });
        }).catch(() => {  });
    })
    
});
