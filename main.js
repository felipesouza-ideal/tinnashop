document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        var email = document.getElementById('inputEmail').value;
        var number = document.getElementById('inputNumber').value;

        if (!email || !number) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            event.preventDefault(); //
        } else if (!email.includes('@')) {
            alert('Por favor, insira um e-mail válido.');
            event.preventDefault(); // 
        }
    });
});
