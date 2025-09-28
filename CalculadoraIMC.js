function CalculadoraIMC (){
    let Peso = Number (document.getElementById("Peso").value);
    let altura = Number (document.getElementById("Altura").value);

let imc = Peso  / (altura*altura)

document.getElementById("Pontuacao").innerText = "Sua Pontuação é:" + imc.toFixed(2)

let resultado = document.getElementById("resultado")

 resultado.className = ""; 

 resultado.classList.add("resultado-bg");

if(imc < 18.5){
    resultado.innerText = "Abaixo do peso";
    resultado.classList.add("amarelo-bg")
}
else if (imc < 25){
    resultado.innerText= "Peso normal";
    resultado.classList.add("verde-bg");
}
else if(imc < 30){
    resultado.innerText = "sobrepeso";
     resultado.classList.add("amarelo-bg")
}
else if (imc >= 30){
    resultado.innerText = "Obesidade";
    resultado.classList.add("vermelho-bg")
}
const cores = ['verde','amarelo','laranja','vermelho'];
}
