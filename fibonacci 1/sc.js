function fibon(){
    let n1 = document.getElementById("n1")
    let res = document.getElementById("res")
    
    if(n1.value.length==" "){
        alert("Por favor, digite um número!")
        res.innerHTML = 'FALHA NO PROCESSAMENTO'
    }else{
        res.innerHTML = ""
        let t = [];
        for(let i = 1; i<=n1.value; i++){
            if(i==1 || i==2){
                t[i] = 1; 
            }else{
                t[i] = t[i-1] +  t[i-2]
            }
            res.innerHTML += t[i] + "👉" 
        }
        res.innerHTML += "🏁"
    }
}
