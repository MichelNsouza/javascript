function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passos = document.getElementById('txtpassos')
    var resultado = document.getElementById('txtresultado')
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        window.alert(`[ERRO] Faltam dados`)
    } else {
        resultado.innerHTML = `Contando:`
        var i =Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)

        for(var contagem = i; contagem <= f; c += p){
            resultado.innerHTML += `${contagem}`
        }
    
    }
}