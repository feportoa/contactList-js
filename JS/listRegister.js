// function register() {
//     // Coleta valores dos campos
//     const nameInput = document.querySelector('#nome').value;
//     const telInput = querySelector('#Tel').value;
//     const cepInput = querySelector('#CEP').value;

//     // Cria textnode com os valores dos campos
//     const name = document.createTextNode(nameInput);
//     const tel = document.createTextNode(telInput);
//     const cep = document.createTextNode(cepInput);

//     // Coleta id da lista
//     const list = document.querySelector('#lista');

//     // Define as constantes que criam o li e as divs da lista
//     const createLi = document.createElement('li');
//     const div_listContainer = document.createElement("div").classList.add('listContainer');
//     const div_namePlaceholder = document.createElement("div").classList.add('namePlaceholder');
//     const div_telPlaceholder = document.createElement("div").classList.add('telPlaceholder');
//     const div_cepPlaceholder = document.createElement("div").classList.add('cepPlaceholder');

//     // Executa a criação
//     if(nameInput === ''){
//         return;
//     } else {

//         div_namePlaceholder.appendChild(name);
//         div_telPlaceholder.appendChild(tel);
//         div_cepPlaceholder.appendChild(cep);

//         let div_item = list.createLi;
//         div_item.appendChild(div_namePlaceholder);

//     }
// }   

function register() {
    let newRegister = document.querySelector('#button');
    let name_form = document.querySelector('#nome').value;
    let tel_form = document.querySelector('#Tel').value;
    let cep_form = document.querySelector('#CEP').value;
    
    let contact = {
        name: name_form,
        tel: tel_form,
        cep: cep_form,
    }
}