function Contar (){
     let inicio = document.getElementById("txtinicio")
     let Fim = document.getElementById("txtfim")
     let Passo = document.getElementById("txtpasso")
     let res = document.getElementById("res")
    
    if(inicio.value.length == ``|| Fim.value.length  == `` || Passo.value.length  == ``){
        res.innerHTML = "Impossivel contar! Falta dados"
    }else{
         res.innerHTML = `Contando: <br>`
         let ini = Number(inicio.value)
         let Fi = Number(Fim.value)
         let Pas = Number(Passo.value)
         if ( Pas <=0){
            alert("Passo inválido! Considerando o Numero: 1 ")
            Pas=1 
        }

        if(ini <Fi ){
            //contagem crescente 
            for(let i = ini;i<=Fi;i+=Pas){
                
                res.innerHTML +=`${i} 👉 `
            }
        } else {
            // contagem regressiva 
            for(let i = ini;i>=Fi;i-=Pas){
                res.innerHTML +=`${i} 👉 `
            }
        }res.innerHTML +=`🏁 `
}
}