
// Script para adicionar os participantes por meio de um botão


function addParticipantes() {

    var qtd_participantes = document.getElementsByClassName("dados-participante").length;

    event.preventDefault();

    // Declarando os elementos que serão usados
    var div_12_colunas    = document.createElement("div");
    var field_nome        = document.createElement("div");
    var field_matricula   = document.createElement("div");
    var input_nome        = document.createElement("input");
    var input_matricula   = document.createElement("input");
    var divider           = document.createElement("hr");


    // Maximo de participantes
    var max_participantes = 7;

    // Conteudo
    div_12_colunas.className  = "dados-participante";

    // Fields de nome e matricula
    field_nome.className      = "row input_field col l6 m6 s12";
    field_matricula.className = "row input_field col L6 m6 s12";

    // Divider
    divider.className = "row divisor divider hide-on-med-and-up col s4 offset-s4";

    // Inputs
    input_nome.type = "text";
    input_nome.placeholder = "Nome Completo"

    input_matricula.type = "text";
    input_matricula.placeholder = "Matrícula da UFMG";


    if (qtd_participantes < max_participantes) {

        input_nome.className = "p-nome";
        input_matricula.className = "p-matricula";

        field_nome.append(input_nome);
        field_matricula.append(input_matricula);
        div_12_colunas.append(divider,field_nome,field_matricula);

        document.getElementById("conteudo").appendChild(div_12_colunas);

    } else
        alert("Você pode ter no máximo 7 participantes por equipe!");

}