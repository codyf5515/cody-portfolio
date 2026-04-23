const contactForm = document.getElementById("contactForm");
const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");
const formMessage = document.getElementById("formMessage");
const resetBtn = document.getElementById("resetBtn");
const themeRadios = document.querySelectorAll('input[name="theme"]');
const contactBox = document.getElementById("contactBox");

// Character counter
messageBox.addEventListener("input", function () {
    charCount.textContent = `Characters: ${messageBox.value.length} / 250`;
});

// Color toggle
themeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
        if (this.value === "green") {
            contactBox.style.borderColor = "#00ff99";
            contactBox.style.boxShadow = "0 0 10px rgba(0, 255, 153, 0.3)";
        } else if (this.value === "blue") {
            contactBox.style.borderColor = "#00ccff";
            contactBox.style.boxShadow = "0 0 10px rgba(0, 204, 255, 0.3)";
        } else if (this.value === "purple") {
            contactBox.style.borderColor = "#9966ff";
            contactBox.style.boxShadow = "0 0 10px rgba(153, 102, 255, 0.3)";
        }
    });
});

// Form validation
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const reason = document.getElementById("reason").value;
    const message = document.getElementById("message").value.trim();
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');

    formMessage.style.color = "#ff6666";
    formMessage.textContent = "";

    if (fullName === "") {
        formMessage.textContent = "Please enter your full name.";
        return;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (reason === "") {
        formMessage.textContent = "Please select a reason for contact.";
        return;
    }

    if (!contactMethod) {
        formMessage.textContent = "Please select a preferred contact method.";
        return;
    }

    if (message === "") {
        formMessage.textContent = "Please enter a message.";
        return;
    }

    formMessage.style.color = "#00ff99";
    formMessage.textContent = "Form submitted successfully.";
});

// Reset behavior
resetBtn.addEventListener("click", function () {
    charCount.textContent = "Characters: 0 / 250";
    formMessage.textContent = "";
    contactBox.style.borderColor = "#00ff99";
    contactBox.style.boxShadow = "0 0 10px rgba(0, 255, 153, 0.3)";
});