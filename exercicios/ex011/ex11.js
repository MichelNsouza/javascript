var agora = new Date()
var hora = agora.getHours()
//var hora = 8
console.log(`agora são exatamente ${hora} horas.`)
if (hora<12){
    console.log('Boa tarde!')
} else if (hora <= 18 ){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite')
}