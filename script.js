// Check if an email is already saved in localStorage
document.addEventListener("DOMContentLoaded", () => {
    const savedEmail = localStorage.getItem("email");
    const emailField = document.getElementById("email");
    const form = document.getElementById("signup-form");
    const welcomeMessage = document.getElementById("welcome-message");
    const userEmailSpan = document.getElementById("user-email");

    if (savedEmail) {
        welcomeMessage.classList.remove("hidden");
        userEmailSpan.textContent = savedEmail;
        form.classList.add("hidden");
    }

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = emailField.value;
        localStorage.setItem("email", email);
        userEmailSpan.textContent = email;
        form.classList.add("hidden");
        welcomeMessage.classList.remove("hidden");
    });
});
