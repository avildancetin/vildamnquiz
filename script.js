// script.js
const questions = [
    {
        question: "eski muhabbet kusumun ismi?",
        answers: ["azize", "julide", "nazmiye", "feride"],
        correctAnswer: "julide"
    },
    {
        question: "kalan kedularimin renkleri?",
        answers: ["sari ve beyaz", "siyah ve beyaz", "tekir renkleri", "3 renkliler"],
        correctAnswer: "siyah ve beyaz"
    },
    {
        question: "bu donem aldigim ders sayisi?",
        answers: ["7", "6", "5", "4"],
        correctAnswer: "6"
    },
    {
        question: "bu donem verdigim ders sayisi?",
        answers: ["6", "5", "4", "3", "2"],
        correctAnswer: "3"
    },
    {
        question: "en sevdigim alizeyd sarkisi?",
        answers: ["Kalbin bana kaldi", "Afedersin", "Keko", "Trip attim", "Kedi gibiyim", "Beynimi siktin", "olofdiebov"],
        correctAnswer: "olofdiebov"
    },
    {
        question: "en sevdigim britney sarkisi?",
        answers: ["Toxic", "Gimme more", "Oops!...I did it again", "...Baby one more time", "Criminal", "I'm a slave 4 u"],
        correctAnswer: "Oops!...I did it again"
    },
    {
        question: "en sevdigim alkol? -bunu da bilirsin artik-",
        answers: ["Cin", "Viski", "Vodka", "Bira", "Rom", "Tekila"],
        correctAnswer: "Vodka"
    },
    {
        question: "sıkıldıgımda en cok napiyom",
        answers: ["uyuyom", "overthink", "agliyom", "yemekyiyom", "ders yapiyom", "kod yaziyom", "kod ve ders disi hepsini cok yapiyon secemiyom"],
        correctAnswer: "kod ve ders disi hepsini cok yapiyon secemiyom"
    }
];

const questionContainer = document.getElementById("question-container");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

// Function to display the current question
function displayQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionContainer.innerHTML = `
        <h2>${currentQuestionData.question}</h2>
        ${currentQuestionData.answers.map(answer => `
            <button class="option-btn">${answer}</button>
        `).join('')}
    `;

    // Add event listener to all option buttons
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Check if the clicked answer is correct
            const selectedAnswer = button.textContent;
            if (selectedAnswer === currentQuestionData.correctAnswer) {
                button.style.backgroundColor = "green";
                score++; // Increment score if correct
            } else {
                button.style.backgroundColor = "red";
                // Find and color the correct answer button
                optionButtons.forEach(btn => {
                    if (btn.textContent === currentQuestionData.correctAnswer) {
                        btn.style.backgroundColor = "green";
                    }
                });
            }

            // Disable all option buttons after selection
            optionButtons.forEach(btn => {
                btn.disabled = true;
            });

            // Move to the next question after a brief delay
            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayQuestion();
                } else {
                    showResult();
                }
            }, 1000); // Delay in milliseconds
        });
    });
}

// Function to show the quiz result
function showResult() {
    questionContainer.innerHTML = "";
    //check if the amount is good

    resultContainer.textContent = `${questions.length} sorudan ${score} tanesini bildin!`;
    submitBtn.style.display = "none";
}

// Display the first question when the page loads
displayQuestion();
