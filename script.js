const frutas = ["laranja", "limão", "uva"]

//EXERCICIO 1 

const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML += frutas[0]

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML += frutas[1]

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML += frutas[2]

// EXERCICIO 2

const novaFruta = document.getElementById("fruta")
console.log(novaFruta.value)

//EXERCICIO 3

const proximaFruta = () => {
    const fruta4 = document.getElementById("fruta-4")
    const novaFruta = document.getElementById("fruta")
    fruta4.innerHTML = novaFruta.value

    novaFruta.value = ''
}

