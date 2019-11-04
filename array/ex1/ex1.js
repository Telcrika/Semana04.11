function verificaLista (e) {
    e.preventDefault();
    const input = document.querySelector("input");
    const procura = frutas.filter((fruta) => fruta === input.value)
    if (frutas.find(fruta => fruta === input.value)) {
        alert ("Fruta localizada");
    } else {
        alert (`não encontrado ${input.value} nesta lista de frutas`)
    }
    
   
}

const botao = document.querySelector("button");

botao.addEventListener("click",(e) => verificaLista (e))
