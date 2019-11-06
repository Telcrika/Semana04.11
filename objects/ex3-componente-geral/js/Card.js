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
        return `<div class="card">
            <img class="imagem" src="${imagem}" />
            <h2>${titulo}</h2>
            <p class="ingredientes">${ingredientes}</p>
        </div>`
    }
}

//um bom construtor deve ser construido de modo que possa ser reaproveitado por qualquer outra classe.

