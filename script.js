const quizForm = document.getElementById('quiz-form');
const resultContainer = document.getElementById('result');

// Envio do formulário
quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura as respostas usando name
    const jogador = quizForm.elements['jogador'].value.trim();
    const estilo = quizForm.elements['estilo'].value;
    const evento = quizForm.elements['evento'].value;
    const gosta = quizForm.elements['gosta'].value.trim();
    const documento = quizForm.elements['documento'].files[0];
    const redeSocial = quizForm.elements['rede_social'].value.trim();

    // Validação simples
    if (!jogador || !estilo || !evento || !gosta || !redeSocial) {
        alert("Por favor, preencha todas as perguntas obrigatórias!");
        return;
    }

    // Mensagem de resultado
    let resultMessage = `
        <h2>Fã Analisado! 🐆🔥</h2>
        <p><strong>Jogador favorito:</strong> ${jogador}</p>
        <p><strong>Estilo de jogo:</strong> ${estilo}</p>
        <p><strong>Participou de eventos:</strong> ${evento === 'sim' ? 'Sim' : 'Não'}</p>
        <p><strong>O que mais gosta na FURIA:</strong> ${gosta}</p>
        <p><strong>Rede Social:</strong> <a href="${redeSocial}" target="_blank">${redeSocial}</a></p>
    `;

    // Se enviou documento
    if (documento) {
        resultMessage += `<p><strong>Documento enviado:</strong> ${documento.name}</p>`;
    } else {
        resultMessage += `<p><strong>Documento enviado:</strong> Nenhum</p>`;
    }

    // Exibe resultado
    resultContainer.innerHTML = resultMessage;
    resultContainer.classList.remove('hidden');

    // Resetar o formulário
    quizForm.reset();
});
