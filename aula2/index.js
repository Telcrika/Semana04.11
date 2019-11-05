function Professor(nome,materia,turma){
    this.nome = nome;
    this.materia = materia;
    this.turma = turma;
}

Professor.prototype.dizMateria = function(){
    return `A matéria é: ${this.materia}`//como está encapsulado, basta apenas chamar com o this
}

const js3 = new Professor("Cintia","Fumi","Javascript")
console.log(js3.dizMateria());
