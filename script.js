let lista_nome = ["cafe", "cafeina"]
let adicionarF = document.getElementById('fn')
let RmUltimo = document.getElementById('RMU')
let RmPrimeiro = document.getElementById('RM')
let ADDinicio = document.getElementById('AdI')
const nome = document.getElementById('nm')

function renderizar() {
    const lista_pagina = document.getElementById("lista")
    lista_pagina.innerHTML = ''
    for (let item of lista_nome) {
        let elemento = document.createElement('li')
        elemento.innerText = item
        lista_pagina.appendChild(elemento)
    }
}


ADDinicio.addEventListener("click", function () {
    const valor = nome.value;
    lista_nome.unshift(valor);
    renderizar();

})
adicionarF.addEventListener("click", function () {
    const valor = nome.value;
    lista_nome.push(valor);
    renderizar();
})

RmPrimeiro.addEventListener("click", function () {
    const valor = nome.value;   
    lista_nome.shift(valor);
    renderizar();

})

RmUltimo.addEventListener("click", function () {
    const valor = nome.value;   
    lista_nome.pop(valor);
    renderizar();

})

document.addEventListener("DOMContentLoaded", () => {
    renderizar()

})


