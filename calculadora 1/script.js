let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let r = document.querySelector("span");
/*
-Let para ser a declaração da variavel
-Nessa parte pesquisei bem para entender melhor o innerhtml e parseint 
-Na parte do R, estava dando erro. Então utilizei o valvue para ajudar no dado da informação
*/
function somar(n1,n2){
    r.innerHTML=Number(n1.value)+Number(n2.value);
}
function subtrair(n1,n2){
    r.innerHTML=Number(n1.value)-Number(n2.value);
}function multiplicaçao(n1,n2){
    r.innerHTML=Number(n1.value)*Number(n2.value);
}function divisao(n1,n2){
    r.innerHTML=Number(n1.value)/Number(n2.value);
}