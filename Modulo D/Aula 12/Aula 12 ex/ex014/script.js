function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imgdia')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {             
    //Bom Dia
    img.src= "dia.jpg"
    document.body.style.background = "#fde687"
}else if (hora >= 12 && hora < 18){ 
    //Boa Tarde
    img.src= "tarde.jpg"
    document.body.style.background = "#f68981"
}else{ 
    //Boa Noite 
    img.src= "noite.jpg"
    document.body.style.background = "#0b223e"
}
}
