const nomesNoRole =['Adriana','Adrielly','Aline','Ana',
'Angelica','Ba','Babs','Carolzinha','Carolzona','Telma',
'Cecilia','Daiana','Emanuelle','Jackeline','Raissa',
'Jennifer','Josiane','Lia','Marcela','Monique','Thaís',
'Priscilla Roiz Garcia','Priscilla Soares Alves',
'Raquel','Romênia','Rosana','Simara','Simone','Talita','Valdeniza']
const botao = document.addEventListener("click", (e) => confereRole (e));
const recebe = document.getElementById("#nome");
const elemento_mae = document.getElementById("#status");
const mensagem = document.createElement('p');

function confereRole (e) {
    e.preventDefault();
    const convidado = nomesNoRole.filter((convite) => convite === recebe);
    if (nomesNoRole.filter(convite => convite === recebe)) {
        elemento_mae.appendChild(mensagem);
        const texto = createElement.texto("Este nome está na lista do Rolê");
    } else {
        const texto = createElement.texto("Este nome  naõ está na lista do Rolê");
    }
}
