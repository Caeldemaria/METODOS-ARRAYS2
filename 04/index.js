const numeros = [0, 122, 4, 6, 7, 8, 44]
const resultado= numeros.every((numeros)=>{
   return numeros%2===0
})


if(resultado){
    console.log('array válido')
}else {
    console.log('array inválido')
}