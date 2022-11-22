function verificar (){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById("txtano");
    let res = document.getElementById("res");
    if(fano.value.length == 0 || fano.value > ano){
        alert("Verifique os dados e tente de novo")
    }else{
        let fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value)
        let genero = "";
        let img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = "Homem"
            if(idade>= 0 && idade <=12){
                //criança
                img.setAttribute(`src`, "foto_crianca_homem.jpg")

            }else if(idade>= 13 && idade < 19){
                //jovem
                img.setAttribute(`src`, `foto_jovem_homem.jpg`)
            }else if(idade>= 20 && idade < 59){
                //adultos
                img.setAttribute("src", "foto_adulto_homem.jpg")
            }else 
                //velho
                img.setAttribute(`src`, `foto_idoso_homem.jpg`)

        }else if(fsex[1].checked){
            genero = "Mulher"
            if(idade>= 0 && idade <= 12){
                //criança
                img.setAttribute(`src`, `foto_crianca_mulher.jpg`)
            }else if(idade>= 13 && idade < 19){
                //jovem
                img.setAttribute(`src`, `foto_jovem_mulher.jpg`)
            }else if(idade>= 20 && idade < 59){
                //adultos
                img.setAttribute(`src`, `foto_adulto_mulher.jpg`)
            }else {
                //velho
                img.setAttribute(`src`, `foto_idoso_mulher.jpg`)
        }}
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}