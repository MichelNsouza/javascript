function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passos = document.getElementById('txtpassos')
    var resultado = document.getElementById('txtresultado')
        // alerta de dados
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert(`[ERRO] Faltam dados`)
    } else {
        //variaveis
        resultado.innerHTML = `Contando: `
        let ninicio = Number(inicio.value)
        let nfim= Number(fim.value)
        let npassos = Number(passos.value)
        // passo menor ou igual a 0
        if(npassos <=0){
            window.alert(`passo invalido! Considerando PASSO 1`)
            p = 1
        }

       //contagem crescente 
        if (ninicio < nfim){
            for(let contador = ninicio; contador <= nfim; contador += npassos){
            resultado.innerHTML += `${contador} \u{1F449}`
        }
        //contagem decrescente 
        } else{
            for(let contador = ninicio; contador >= nfim; contador -= npassos) {
            resultado.innerHTML += `${contador} \u{1F449}`
        } 
        //bandeirinha no final
            resultado.innerHTML += `\u{1F3C1}`
        }
    }
}