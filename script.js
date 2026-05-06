let lista_nome = ["cafe", "cafeina"]
let adicionarF = document.getElementById('fn')
let RmUltimo = document.getElementById('RMU')
let RmPrimeiro = document.getElementById('RM')
let ADDinicio = document.getElementById('AdI')
const nome = document.getElementById('nm')
let nameM = document.getElementById('MAI')

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

nameM.addEventListener("click", function(){
    let resultado = " ";
    lista_nome.forEach(function(nome){
        resultado += nome.toUpperCase()+ " ";
    })
      document.getElementById("result").textContent= resultado; 
})
function contador() {
    let contador = 0;
    for (let i = 0; i < lista_nome.length; i++) {
        if (lista_nome[i].length > 5) {
            contador++;
        }
    }
    document.getElementById("resultado").textContent= "total de nomes com mais de 5 letras:" + " " + contador; 
}

function filtrar(){
    
    const mai = lista_nome.filter(function(nome){
        return nome.length>5;
    })
    document.getElementById("res").textContent = mai.join();
}


document.addEventListener("DOMContentLoaded", () => {
    renderizar()
})


