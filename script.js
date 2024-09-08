// Pegando os elementos
var emptyList = window.document.getElementById('task-empty-div')
var modal = document.getElementById("task-modal");
var btn = document.getElementById("add-task-button");
var span = document.getElementsByClassName("close-button")[0];

// Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// Quando o usuário clica em <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, ele também fecha
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function teste(){
    console.log(emptyList.style.display)
    //carregar div com um tem na lista
    p[0].style.visibility = 'hidden'
    p[1].style.visibility = 'hidden'


    // window.alert("XIIII MANO")
    // Verifica o display atual
// if (emptyList.style.display === 'none') {
//     // Se estiver 'none', volta para o valor original (ou o padrão, como 'block')
//     emptyList.style.display = emptyList.dataset.originalDisplay || 'block';
// } else {
//     // Salva o valor atual do display para restaurá-lo depois
//     emptyList.dataset.originalDisplay = emptyList.style.display || 'block';
//     // Oculta a div
//     emptyList.style.display = 'none';
//     let list = document.createElement('seltab')
//     let item = document.createElement('option')
//     item.text = 'teste teste teste teste teste teste '
//     list.appendChild(item)
//     emptyList.appendChild(list)

// }
    // emptyList.style.visibility = 'hidden';

}
// <select name="Tabuada" id="seltab" size="10" ></select>