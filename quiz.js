// Respostas corretas do quiz
const respostasCorretas = {
    q1: 'b',
    q2: 'c',
    q3: 'b',
    q4: 'b',
    q5: 'b'
};

// Função para verificar o quiz
function checkQuiz() {
    let pontuacao = 0;

    // Verificar cada resposta
    for (let questao in respostasCorretas) {
        const respostaUsuario = document.querySelector(`input[name="${questao}"]:checked`);
        
        if (!respostaUsuario) {
            alert(`Por favor, responda a pergunta ${questao.substring(1)}`);
            return;
        }

        if (respostaUsuario.value === respostasCorretas[questao]) {
            pontuacao++;
        }
    }

    // Mostrar resultado
    displayResult(pontuacao);
}

// Função para exibir o resultado
function displayResult(pontuacao) {
    const resultadoDiv = document.getElementById('resultado');
    const pontuacaoTexto = document.getElementById('pontuacao');
    const textoFeedback = document.getElementById('textoFeedback');
    const formulario = document.getElementById('formulario');

    // Mostrar pontuação
    pontuacaoTexto.innerText = `Você acertou ${pontuacao} de 5 perguntas!`;

    // Feedback baseado na pontuação (Desafio Extra)
    if (pontuacao === 5) {
        textoFeedback.innerText = '🌟 Excelente!';
    } else if (pontuacao === 3 || pontuacao === 4) {
        textoFeedback.innerText = '👍 Muito bom!';
    } else {
        textoFeedback.innerText = '📚 Continue praticando!';
    }

    // Mostrar resultado e esconder formulário
    resultadoDiv.classList.remove('hidden');
    formulario.style.display = 'none';
}

// Função para resetar o quiz
function resetQuiz() {
    document.getElementById('formulario').reset();
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('formulario').style.display = 'block';
}

// Event listener para o botão Responder
document.getElementById('submitBtn').addEventListener('click', checkQuiz);
