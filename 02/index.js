const palavras = ["livro", "fé", "sol", "carro", "oba"]
const resultado = palavras.some((letras) => {
    let verificar = false
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > 5) {
verificar = true
        } else{
            !verificar
        }

    } return verificar
})
if (resultado) {
    console.log('existe palavra inválida')
} else {
    console.log('array validado')
}

