let botao = document.querySelector("#botao");
botao.addEventListener('click', function () {
    let entrada = document.querySelector("#entrada").value;
    document.querySelector("#informe").innerText = entrada;
})