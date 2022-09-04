function register() {
    const nameInput = document.querySelector('#nome').value;
    const name = document.createTextNode(nameInput);
    const createLi = document.createElement('li');
    const list = document.querySelector('#lista');

    createLi.appendChild(name);
    list.appendChild(createLi);
}
  