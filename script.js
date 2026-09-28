// ================================
// PHISHING AWARENESS
// ================================

function checkPhishing() {
    const result = document.getElementById("phishing-result");

    if (result) {
        result.innerHTML =
            "⚠️ Warning: This example contains several phishing indicators. Check the sender, urgency, unexpected request and link before taking action.";

        result.style.color = "#b3261e";
    }
}


// ================================
// PASSWORD STRENGTH CHECKER
// ================================

function checkPasswordStrength() {
    const passwordInput = document.getElementById("passwordInput");
    const strengthFill = document.getElementById("strengthFill");
    const strengthText = document.getElementById("strengthText");

    if (!passwordInput || !strengthFill || !strengthText) {
        return;
    }

    const password = passwordInput.value;

    let score = 0;

    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (password.length === 0) {
        strengthFill.style.width = "0%";
        strengthText.textContent = "Strength: Not checked";
        return;
    }

    if (score <= 2) {
        strengthFill.style.width = "35%";
        strengthText.textContent = "Strength: Weak";
    }
    else if (score <= 4) {
        strengthFill.style.width = "70%";
        strengthText.textContent = "Strength: Moderate";
    }
    else {
        strengthFill.style.width = "100%";
        strengthText.textContent = "Strength: Strong";
    }
}


// ================================
// SHOW / HIDE PASSWORD
// ================================

function togglePassword() {
    const passwordInput =
        document.getElementById("passwordInput");

    const button =
        document.querySelector(".password-input button");

    if (!passwordInput || !button) {
        return;
    }

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.textContent = "Hide";
    }
    else {
        passwordInput.type = "password";
        button.textContent = "Show";
    }
}


// ================================
// CYBERSECURITY QUIZ
// ================================
function calculateScore() {

    const answers = {
        q1: "b",
        q2: "c",
        q3: "a",
        q4: "b",
        q5: "b"
    };

    const correctAnswers = {
        q1: "A social engineering attack",
        q2: "Use strong and unique passwords",
        q3: "Network traffic analysis",
        q4: "An additional authentication layer",
        q5: "Encrypts or restricts access to data"
    };

    let score = 0;
    let resultText = "";

    for (let question in answers) {

        const selected = document.querySelector(
            `input[name="${question}"]:checked`
        );

        if (selected && selected.value === answers[question]) {

            score++;

            resultText += `
                <p>✅ ${question.toUpperCase()}: Correct</p>
            `;

        } else {

            resultText += `
                <p>
                    ❌ ${question.toUpperCase()}: 
                    Correct answer - ${correctAnswers[question]}
                </p>
            `;
        }
    }

    const result = document.getElementById("quiz-result");

    result.innerHTML = `
        <h2>Your Score: ${score}/5</h2>

        <p>
            You answered <strong>${score}</strong>
            out of <strong>5</strong> questions correctly.
        </p>

        <hr>

        ${resultText}
    `;
}


// ================================
// MOBILE MENU
// ================================

function toggleMenu() {

    const navLinks =
        document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}