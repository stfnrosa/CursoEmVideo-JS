function verificar(){
    var data  = new Date()
    var ano =  data.getFullYear()
    var fAno = Number(document.getElementById("txtano").value)
    var res = document.getElementById("res")
    if(fAno.length == 0 || fAno > ano){
        window.alert("[ERRO!] Verifique os dados e tente novamente.")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            //genero = 'Homem'
            if(idade >= 0 && idade <11){
                //criança
                genero = 'Menino'
                img.setAttribute('src','imagem/menino.jpg')
            }else if (idade < 19){
                //jovem
                genero = 'Moço'
                img.setAttribute('src','imagem/moço.jpg')
            }else if(idade < 50){
                //adulto
                genero = 'Homem'
                img.setAttribute('src','imagem/homem.jpg')
            }else{
                //idoso
                genero = 'Senhor'
                img.setAttribute('src','imagem/senhor.jpg')
            }
        }else if(fsex[1].checked){
            //genero = 'Mulher'
            if(idade >= 0 && idade <11){
                //criança
                genero = 'Menina'
                img.setAttribute('src','imagem/menina.jpg')
            }else if (idade < 19){
                //jovem
                genero = 'Moça'
                img.setAttribute('src','imagem/moça.jpg')
            }else if(idade < 50){
                //adulto
                genero = 'Mulher'
                img.setAttribute('src','imagem/mulher.jpg')
            }else{
                //idoso
                genero = 'Senhora'
                img.setAttribute('src','imagem/senhora.jpg')
            }
        } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img) 
    }    

    
}
