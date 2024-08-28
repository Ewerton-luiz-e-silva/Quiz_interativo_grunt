// Função para selecionar a matéria
function selectSubject(subjectIndex) {
    currentSubjectIndex = subjectIndex;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.length = 0;

    // Esconder a seção de seleção de matérias e mostrar o quiz
    $('#subjectSelection').fadeOut(function() {
        $('#quiz').fadeIn();
        loadQuestion();
    });

    // Esconder o parágrafo do cabeçalho
    $('#header-paragraph').hide();
}

// Função para carregar a questão atual
function loadQuestion() {
    const currentSubject = subjects[currentSubjectIndex];
    const currentQuestion = currentSubject.questions[currentQuestionIndex];
    $('#question').text(currentQuestion.question);
    $('#option0').text(currentQuestion.options[0]);
    $('#option1').text(currentQuestion.options[1]);
    $('#option2').text(currentQuestion.options[2]);
    selectedAnswerIndex = null;
    $('#nextButton').prop('disabled', true);

    $('.option').removeClass('selected');

    // Habilitar ou desabilitar o botão "Anterior"
    if (currentQuestionIndex === 0) {
        $('#prevButton').prop('disabled', true);
    } else {
        $('#prevButton').prop('disabled', false);
    }
}

// Função para selecionar uma resposta
function selectAnswer(answerIndex) {
    selectedAnswerIndex = answerIndex;
    $('#nextButton').prop('disabled', false);

    $('.option').removeClass('selected');
    $($('.option')[answerIndex]).addClass('selected');
}

// Função para ir para a próxima questão
function nextQuestion() {
    if (selectedAnswerIndex !== null) {
        const currentSubject = subjects[currentSubjectIndex];
        const currentQuestion = currentSubject.questions[currentQuestionIndex];
        userAnswers[currentQuestionIndex] = { question: currentQuestion.question, selected: selectedAnswerIndex, correct: currentQuestion.correct };
        if (selectedAnswerIndex === currentQuestion.correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < currentSubject.questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
}

// Função para ir para a questão anterior
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        const previousAnswer = userAnswers[currentQuestionIndex];
        if (previousAnswer) {
            selectedAnswerIndex = previousAnswer.selected;
            score -= (previousAnswer.selected === previousAnswer.correct) ? 1 : 0;
        }
        loadQuestion();
    }
}

// Função para mostrar os resultados
function showResults() {
    $('#quiz').fadeOut(function() {
        $('#results').fadeIn();
    });

    $('#score').text(`Você acertou ${score} de ${subjects[currentSubjectIndex].questions.length} perguntas.`);
    const review = $('#review');
    review.html('');

    userAnswers.forEach((answer, index) => {
        const answerElement = $('<div class="answer"></div>');
        answerElement.addClass(answer.selected === answer.correct ? 'correct' : 'incorrect');
        const userAnswerText = answer.selected !== null ? subjects[currentSubjectIndex].questions[index].options[answer.selected] : "Não respondido";
        const correctAnswerText = subjects[currentSubjectIndex].questions[index].options[subjects[currentSubjectIndex].questions[index].correct];
        answerElement.html(`<strong>Q${index + 1}:</strong> ${subjects[currentSubjectIndex].questions[index].question} <br/>
        <br/>
        Sua resposta: ${userAnswerText} <br/>
        <br/>
        Resposta correta: ${correctAnswerText}`);
        review.append(answerElement);
    });
}

// Função para voltar à seleção de matérias
function returnToSubjectSelection() {
    $('#results').fadeOut(function() {
        $('#subjectSelection').fadeIn();
    });
    $('#header-paragraph').show(); // Mostrar o parágrafo do cabeçalho novamente
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.length = 0;
    
    $('#results').fadeOut(function() {
        $('#quiz').fadeIn();
        loadQuestion();
    });
}

// Função para voltar à seleção de matérias
function returnToSubjectSelection() {
    currentSubjectIndex = -1;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.length = 0;
    
    $('#quiz').fadeOut(function() {
        $('#subjectSelection').fadeIn();
    });
    $('#results').fadeOut();
    $('#header-paragraph').show(); // Mostrar o parágrafo do cabeçalho novamente
}

// Função para inicializar o quiz ao carregar a página
$(document).ready(function() {
    $('#subjectSelection').show();
    $('#quiz').hide();
    $('#results').hide();
});
