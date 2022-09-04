const tel = document.querySelector('#Tel');
const cep = document.querySelector('#CEP');

tel.addEventListener('keypress', () => {
    let telLength = tel.value.length;

    if(telLength === 0) {
        if(tel.value == '+') {
            
        }
        tel.value = '(+';
    } else if (telLength === 4) {
        tel.value += ') ';
    } else if (telLength === 8) {
        tel.value += ' ';
    } else if (telLength === 14) {
        tel.value += '-';
    }
})

cep.addEventListener('keypress', () => {
    let cepLength = cep.value.length;

    if (cepLength === 5) {
        cep.value += '-';
    }
})