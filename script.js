const display = document.querySelector('#input-display')

function addNumDisplay(num) {
    display.value += num;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    let result = eval(display.value);
    display.value = result;
}

// Selecionando os botões da calculadora
const buttons = document.querySelectorAll('input[type="button"]');

// adicionando um EventListener para cada botão
for (let i in buttons) {
    buttons[i].addEventListener('click', function() {
        let value = this.value;
        
        if(value === 'C') {
            clearDisplay();
        } else if(value === 'Calcular') {
            calculate();
        } else {
            addNumDisplay(value);
        }
    })
}
