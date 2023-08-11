const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]
let novoArray= cidades.filter((cidades)=>cidades.length<=8)
console.log(novoArray.join(','))