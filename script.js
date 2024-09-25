const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct: 1
    },
    {
        question: "What is 5 + 3?",
        answers: ["5", "8", "10", "12"],
        correct: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 2
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: ["Oxygen", "Gold", "Silver", "Iron"],
        correct: 0
    },
    {
        question: "What year did World War II end?",
        answers: ["1918", "1939", "1945", "1960"],
        correct: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: 2
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "Who is the author of '1984'?",
        answers: ["George Orwell", "J.K. Rowling", "Ernest Hemingway", "J.R.R. Tolkien"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    document.getElementById('question-text').innerText = questions[currentQuestionIndex].question;
    const answerButtons = document.getElementsByClassName('answer-btn');
    questions[currentQuestionIndex].answers.forEach((answer, index) => {
        answerButtons[index].innerText = answer;
    });

    // Update question number
    document.getElementById('current-question').innerText = currentQuestionIndex + 1;

    document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        score++;
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-box').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = score;
}

// Load the first question on page load
loadQuestion();
