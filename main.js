'use strict'

const botaoIdenti = document.getElementById('Situacao')

function somar(){
    const n1 = Number(document.getElementById('Nota1').value)
    const n2 = Number(document.getElementById('Nota2').value)
    const n3 = Number(document.getElementById('Nota3'.value))
    const n4 = Number(document.getElementById('Nota4'.value))
    const resultado = document.getElementById('resultado')

    const soma = n1 + n2 + n3 + n4

    var total = soma / 4

    resultado.textContent = total

}

function situacao(){
    const resultado = document.getElementById('resultado')

    let msg

    if(total > 7 ){
        msg = 'APROVADO!'
    } else if (total < 7) {
        msg = 'REPROVADO!'
    } 
    resultado.textContent = msg
}

botaoIdenti.addEventListener('click', situacao)
