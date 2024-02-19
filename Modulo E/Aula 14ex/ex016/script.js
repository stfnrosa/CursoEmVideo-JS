function clicar (){
    var n1 = Number(document.getElementById("inicio").value)
    var n2 = Number(document.getElementById("final").value)
    var c = Number(document.getElementById("salto").value)
    var res = document.getElementById("contagem")
    if(n1 == 0 || n1 > n2 || n2 == 0 || c == 0 ){
        res.innerHTML = `Impossivel Calcular...`
    }else{
        res.innerHTML = `${n1} `
        while(n1 < n2) {
            res.innerHTML += `👉 `
            n1 += c
            res.innerHTML += `${n1}`
        }
        res.innerHTML += `🏁`
    }
    
}