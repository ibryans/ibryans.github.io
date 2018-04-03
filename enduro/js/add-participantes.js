// Script para adicionar os participantes por meio de um botão

function addParticipantes() {

    // Declarando os elementos que serão usados
    var div_12_colunas = document.createElement("div");
    var input_field    = document.createElement("div");
    var input          = document.createElement("input");
    var label          = document.createElement("label");

    // Contador pro numero de participantes
    var count = 1;

    // Maximo de participantes
    var max_participantes = 7;

    // Classes materialize
    div_12_colunas.className  = "col s12";
    input_field.className     = "input_field col s6";
    
    if (count <= max_participantes) {

        input.id = "p" + count + "-nome";
        label.htmlFor = input.id;

        document.body.appendChild(div_12_colunas,input_field,input,label);
        console.log("Clique");

    }

}