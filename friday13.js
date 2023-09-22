function numberOfFriday13(ano) {
let contador = 0 
for (let mes = 0; mes < 12; mes++) {
    let date  = new Date(ano,mes,13) 
    if(date.getDay() === 5)
    contador++
}                
    return contador
}

console.log(numberOfFriday13(2023));
