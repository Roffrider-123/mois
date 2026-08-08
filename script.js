/* =========================
   QUIZ
========================= */

const questions = [
    {
        question: "Who is the birthday girl?",
        answers: ["Miss Megamind", "Superman", "Batman", "Iron Man"],
        correct: 0
    },

    {
        question: "What level is Miss Megamind unlocking?",
        answers: ["18", "19", "20", "21"],
        correct: 2
    },

    {
        question: "What date is her birthday?",
        answers: ["8 August", "10 August", "1 August", "18 August"],
        correct: 0
    },

    {
        question: "What nickname does she have?",
        answers: ["Miss Genius", "Miss Megamind", "Queen Bee", "Boss Lady"],
        correct: 1
    },

    {
        question: "What does every birthday need?",
        answers: ["Homework", "Cake", "Exams", "Traffic"],
        correct: 1
    },

    {
        question: "What should Miss Megamind do on her birthday?",
        answers: ["Stress", "Sleep all day", "Celebrate", "Study"],
        correct: 2
    },

    {
        question: "How old is Miss Megamind turning?",
        answers: ["18", "19", "20", "25"],
        correct: 2
    },

    {
        question: "What is Miss Megamind's official brain level?",
        answers: ["10", "100", "500", "999+"],
        correct: 3
    },

    {
        question: "What is today supposed to be about?",
        answers: ["Her birthday", "Homework", "A meeting", "Nothing"],
        correct: 0
    },

    {
        question: "What should we say to Miss Megamind?",
        answers: [
            "Happy Birthday!",
            "Go to school!",
            "Do your homework!",
            "Wake up!"
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {

    const questionElement = document.getElementById("question");

    if (!questionElement) return;

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `QUESTION ${currentQuestion + 1} OF ${questions.length}`;

    questionElement.textContent = question.question;

    const answers = document.getElementById("answers");

    answers.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";
        button.textContent = answer;

        button.onclick = function () {

            document.querySelectorAll(".answer").forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            selectedAnswer = index;
        };

        answers.appendChild(button);
    });
}

function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Choose an answer first! 🧠");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }

    selectedAnswer = null;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {

    document.getElementById("quiz").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("score").textContent =
        `${score} / ${questions.length}`;

    let message;

    if (score <= 3) {
        message = "😂 Bro... do you even know Miss Megamind?";
    } else if (score <= 6) {
        message = "😎 Not bad! You're getting there.";
    } else if (score <= 8) {
        message = "🔥 You actually know her pretty well!";
    } else {
        message = "🏆 CERTIFIED MEGAMIND EXPERT!";
    }

    document.getElementById("resultMessage").textContent = message;
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";

    loadQuestion();
}

loadQuestion();


/* =========================
   20 GIFTS
========================= */

const giftMessages = {

    1: "🎂 Gift #1: May your birthday cake be as amazing as you are.",
    2: "✨ Gift #2: May this new year bring you beautiful memories.",
    3: "😂 Gift #3: You are officially 20. Please act responsible... or don't.",
    4: "🧠 Gift #4: Your Megamind status remains undefeated.",
    5: "❤️ Gift #5: Never forget how special you are.",
    6: "🌟 Gift #6: May your dreams become reality.",
    7: "🎉 Gift #7: More laughter. More happiness. More adventures.",
    8: "🎁 Gift #8: Today belongs completely to you.",
    9: "💫 Gift #9: Keep shining.",
    10: "😎 Gift #10: Level 20 looks good already.",
    11: "🥳 Gift #11: Here's to another amazing year.",
    12: "😂 Gift #12: Congratulations, you survived your teenage years!",
    13: "🖤 Gift #13: Stay exactly as wonderfully weird as you are.",
    14: "🌍 Gift #14: May you see more of the world.",
    15: "🚀 Gift #15: Your next chapter is going to be incredible.",
    16: "💎 Gift #16: Never underestimate yourself.",
    17: "🎂 Gift #17: More cake. That's the gift.",
    18: "🔥 Gift #18: Keep being legendary.",
    19: "✨ Gift #19: One more gift before the big one...",
    20: "👑 FINAL GIFT: HAPPY 20TH BIRTHDAY, MISS MEGAMIND! 🧠🎂🖤✨"
};

function openGift(number) {

    const modal = document.getElementById("giftModal");

    if (!modal) return;

    document.getElementById("giftTitle").textContent =
        `GIFT #${number}`;

    document.getElementById("giftMessage").textContent =
        giftMessages[number];

    modal.style.display = "flex";
}

function closeGift() {

    const modal = document.getElementById("giftModal");

    if (modal) {
        modal.style.display = "none";
    }
}


/* =========================
   RANDOM BIRTHDAY WISH
========================= */

const wishes = [
    "May your 20s be filled with happiness and unforgettable memories. ✨",
    "May every dream you have become a goal you achieve. 🚀",
    "May you laugh more, worry less and enjoy every moment. 🖤",
    "May this year be your best chapter yet. 🌟",
    "May Level 20 bring you nothing but good things. 🎂",
    "May your Megamind powers continue growing. 🧠😂",
    "Here's to more adventures, more memories and more happiness. 🥳"
];

function randomWish() {

    const element = document.getElementById("randomWish");

    if (!element) return;

    const random =
        wishes[Math.floor(Math.random() * wishes.length)];

    element.textContent = random;
}


/* =========================
   MINI GAME
========================= */

let gameScore = 0;
let gameInterval;

function startGame() {

    const area = document.getElementById("gameArea");

    if (!area) return;

    clearInterval(gameInterval);

    gameScore = 0;

    document.getElementById("gameScore").textContent = gameScore;

    area.innerHTML = "";

    gameInterval = setInterval(() => {

        const circle = document.createElement("div");

        circle.className = "gold-circle";

        const maxX = area.clientWidth - 40;
        const maxY = area.clientHeight - 40;

        circle.style.left =
            Math.random() * maxX + "px";

        circle.style.top =
            Math.random() * maxY + "px";

        circle.onclick = function () {

            gameScore++;

            document.getElementById("gameScore").textContent =
                gameScore;

            circle.remove();
        };

        area.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 900);

    }, 700);

    setTimeout(() => {

        clearInterval(gameInterval);

        alert(
            `GAME OVER! 🎮\nYour score: ${gameScore}`
        );

    }, 15000);
}


/* =========================
   FINAL CELEBRATION
========================= */

function celebrate() {

    const message = document.getElementById("finalMessage");

    if (!message) return;

    message.innerHTML = `
        🎉 🎊 ✨ 🖤 ✨ 🎊 🎉
        <br><br>
        HAPPY 20TH BIRTHDAY!
        <br>
        MISS MEGAMIND 🧠👑
        <br><br>
        LEVEL 20 COMPLETE!
    `;

    createConfetti();
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.background = "#d4af37";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.zIndex = "9999";
        confetti.style.borderRadius = "2px";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 3000 + 2000;

        confetti.animate(
            [
                {
                    transform:
                        `translateY(0) rotate(0deg)`
                },
                {
                    transform:
                        `translateY(110vh) rotate(720deg)`
                }
            ],
            {
                duration: duration,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}