function iniciarContagem(){
    let numero = document.getElementById("numeroInicial").ariaValueMax;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

do{
    resultado.innerHTML += numero +"<br>";
    numero--;
}while (numero => 0);
}

function mostrarMultiplos(){
    let limite = document.getElementById("numeroLimite").value;
    let resultado = document.getElementById("resultado2");
    resultado2.innerHTML = "";

    let i = 1;
    do{
        if(i % 5 === 0){
            resultado2.innerHTML += i + "é um múltiplo de 5 <br>";
        }
    i++;
}while (i <= limite);
}