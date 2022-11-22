/*HORÁRIO PASSANDO EM TEMPO REAL NA TELA

Quem quiser os minutos e segundos é só criar novas variáveis c o  data.getMinutes() /data.getSeconds() ,  chama elas lá no msg.InnerHTML.

Quem quiser que a hora passe em tempo real, cria um nova variável como esse método:

function realTime()
        setInterval( carregar,1000)

    }

Muda o valor do onload = "realTime()"

*/
function realTime(){
        setInterval(carregar,1000)
}

function carregar(){
const msg = document.getElementById("msg")
const img = document.getElementById("img")
let data = new Date()
var minuto = data.getMinutes()
let segundo = data.getSeconds();
let hora = data.getHours()
//let hora = 15;
msg.innerHTML=`Agora são ${hora} horas e ${minuto} minuto e ${segundo} segundos `
if (hora >= 0 && hora < 12){
    //bom dia
    img.src = "imagens/manh3.jpg"
    document.body.style.background = "#e2cd9f" 
    }
   
    else if(hora >= 12 && hora <= 18){
        // boa tarde 
        img.src = "imagens/tarde.jpg"
        document.body.style.background = "#b9846f" }

    else{
        //boa noite
        img.src = "imagens/noite.jpg"
        document.body.style.background = "#515154"
        return res ("Boa Noite")
    }
}
