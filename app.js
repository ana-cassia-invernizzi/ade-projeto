// Esse código de javascript vai validar o formulário da página contato
// Ele verifica se os campos estão preenchidos e exibe uma mensagem de agradecimento quando o usuário envia o formulário.

document.addEventListener('DOMContentLoaded', function() {

    const formulario = document.getElementById('form');
    
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = formulario.querySelector('input[type="text"]').value;
            const email = formulario.querySelector('input[type="email"]').value;
            
            if (nome === '' || email === '') {
                alert('Por favor, preencha todos os campos!');
            } else {
                alert('Obrigada pela mensagem, ' + nome + '!');
                formulario.reset();
            }
        });
    }
    
});