// Chamada do button (onclick="register()")
function register() {
    // Declaracao dos elementos do form + lista
    let newRegister = document.querySelector('#button');
    let name_form = document.querySelector('#nome').value;
    let tel_form = document.querySelector('#Tel').value;
    let cep_form = document.querySelector('#CEP').value;
    let list = document.querySelector('#lista')
    let formEvent = document.querySelector('#contactForm');

    formEvent.addEventListener('submit', (event) => {
        event.preventDefault();
    })

    // Objeto com os dados do contato
    let contact = {
        name: name_form,
        tel: tel_form,
        cep: cep_form,
    }

    // Chamada da funcao de criar listas, passando o objeto contact com os dados do contato
    if(contact.name != '' || contact.tel != ''){
        var li = createLi(contact);
    }
    // Criando o li com as divs no HTML
    list.appendChild(li);
}

// Funcao de criar listas. Recebe o objeto contact contendo dados do contato
function createLi(contact) {
    // Cria o li dentro do ul e adicionando classe
    let li = document.createElement('li');
    li.classList.add('contactContainer');

    // Criando div, adicionando class nome e colocando informacoes do objeto contact (name)
    let divName = document.createElement('div');
    divName.classList.add('name');
    divName.innerHTML = contact.name;

    // Criando div, adicionando class tel e colocando informacoes do objeto contact (tel)
    let divTel = document.createElement('div');
    divTel.classList.add('tel');
    divTel.innerHTML = contact.tel;

    // Criando div, adicionando class cep e colocando informacoes do objeto contact (cep)
    let divCep = document.createElement('div');
    divCep.classList.add('cep');
    divCep.innerHTML = contact.cep;

    // Colocando as divs dentro do li
    li.appendChild(divName);
    li.appendChild(divTel);
    li.appendChild(divCep);

    // Retornando li configurado com as divs para quem chamou
    return li;
}