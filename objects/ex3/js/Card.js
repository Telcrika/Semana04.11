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
        
        
    }
    
}

//o componente ´precisa ser construido de uma forma versátil, de modo que possa
//ser reutilizado.