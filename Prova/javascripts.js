function verificarNumero() {
 const numero = parseInt(prompt("Digite um número:"));

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    const tipo = numero % 2 === 0 ? "par" : "ímpar";

    const divisivelPor5 = numero % 5 === 0;

    let mensagem = `O número ${numero} é ${tipo}.`;
    if (divisivelPor5) {
        mensagem += ` Ele também é divisível por 5.`;
    } else {
        mensagem += ` Ele não é divisível por 5.`;
    }

    alert(mensagem);
}
document.getElementById('verificaNumero').addEventListener('click', verificarNumero);


document.addEventListener('DOMContentLoaded', function() {
    const lerDadosButton = document.getElementById('lerDados');
    const form = document.getElementById('registroForm');

    lerDadosButton.addEventListener('click', function() {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const rgm = document.getElementById('rgm').value;
        const curso = document.getElementById('curso').value;

        alert(`Dados do Aluno:\nNome: ${nome}\nEmail: ${email}\nRGM: ${rgm}\nCurso: ${curso}`);
    });
});
