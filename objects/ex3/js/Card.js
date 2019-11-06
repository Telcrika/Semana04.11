class Card {
    constructor(receita){
        this.receita = receita;
    }
    render() {
        return `<div class="card">
            <img class="imagem" src="${this.receita.imagem}" />
            <h1>${this.receita.titulo}</h1>
            <p>${this.receita.ingredientes}
        </div> `
      //o componente ´precisa ser construido de uma forma versátil, de modo que possa
//ser reutilizado.Por isso não acrescentar aqui a linha do DOM  
        
    }
    
}


//resolução da Lydia:
class Card{
    constructor(receita){
        this.receita = receita 
    }
    render(){
        const {
            imagem,
            titulo,
            ingredientes
        } = this.receita
        const card = `<div class="card">
            <img class="imagem" src="${imagem}" />
            <h2>${titulo}</h2>
            <p class="ingredientes">${ingredientes}</p>
        </div>`
        document.querySelector('.cards').insertAdjacentHTML('beforeend', card)
    }
}

