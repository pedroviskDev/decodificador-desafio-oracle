const textoEntrada = document.querySelector("#entrada-texto");
const textoSaida = document.querySelector("#saida-texto");

const botaoCriptografar = document.querySelector("#criptografar");
const botaoDescriptografar = document.querySelector("#descriptografar");

function criptografar(texto) {

    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descriptografar(textoCriptografado) {

    return textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

botaoCriptografar.addEventListener("click", () => {
    textoSaida.textContent = criptografar(textoEntrada.value)
})

botaoDescriptografar.addEventListener("click", () => {
    textoSaida.textContent = descriptografar(textoEntrada.value)
})




textoEntrada.addEventListener("input", () => {
    if(textoEntrada.value === "") {
        textoSaida.textContent = ""
        textoSaida.placeholder = "Nenhuma mensagem encontrada \n\nDigite um texto que você deseja criptografar ou descriptografar."
    }
})