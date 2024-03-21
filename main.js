const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-continue");

for(let i=0;i <botoes .length; i++){
    botoes[i].onclick = function(){
       for(let j=0;j<botoes.length;j++){
         botoes[j].classList.remove("ativo");
         textos[j].classList.remove("ativo");
       
        }
        botoes[j].classList.add("ativo");
        textos[j].classList.add("ativo");
    }
}
const tempoObjetivo1 = new Date("2024-10-21T000:00:00");
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1-tempoAtual;
