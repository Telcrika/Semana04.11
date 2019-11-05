class Botao {
    constructor(texto, cor, tamanho, icone){//construção dos métodos do objeto botão
        this.texto = texto;    //instanciando = encapsular o método para que ele possa ser utilizado em qquer parte do código
        this.cor = cor;
        this.tamanho = tamanho;
        this.icone = icone;

    }
    desenhaBotao(){ //desenhando um objeto
        const novoBotao = document.createElement('button') //cria o elemento botão
        novoBotao.setAttribute("class", `${this.cor} ${this.tamanho}`) //atribui o botão a uma classe
        if (this.icone) { 
            //<i></i>
            const tagIcone= document.createElement("i")
            tagIcone.setAttribute("class", `fas ${this.icone}`)//acrescenta um icone personalizado, pesquisar no site de icones
            novoBotao.appendChild(tagIcone)
            const text = document.createTextNode(this.texto)
            novoBotao.appendChild(text)
        } else {
            novoBotao.innerHTML=this.texto
        }
        document.getElementById('buttons-section').appendChild(novoBotao)
    }
    desenhaBotaoString(){
        return `<button class="${this.cor} ${this.tamanho}">
                    ${this.icone ? `<i class="fas ${this.icone}"></i>` : ''} ${this.texto}
                </button>`
                
    }
    
}


const botaoAzul = new Botao("Telbutton", "azul", "grande", "fa-fish" );


document.getElementById('buttons-section').insertAdjacentHTML("beforeend",botaoAzul.desenhaBotaoString())