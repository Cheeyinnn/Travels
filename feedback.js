document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".stars i");
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackContainer = document.querySelector(".feedback-container");
    let selectedRating = 0;

    // Star Hover & Click Effect
    stars.forEach(star => {
        star.addEventListener("mouseover", function () {
            highlightStars(this.getAttribute("data-value"));
        });

        star.addEventListener("click", function () {
            setRating(this.getAttribute("data-value"));
        });

        star.addEventListener("mouseout", function () {
            resetStars();
        });
    });

    function highlightStars(value) {
        stars.forEach(star => {
            if (star.getAttribute("data-value") <= value) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    }

    function setRating(value) {
        selectedRating = value;
        highlightStars(value);
        document.getElementById("rating").value = value;
        hideError("rating-error");
    }

    function resetStars() {
        stars.forEach(star => {
            if (star.getAttribute("data-value") > selectedRating) {
                star.classList.remove("active");
            }
        });
    }

    function showError(fieldId, message) {
        let errorElement = document.getElementById(fieldId);
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }

    function hideError(fieldId) {
        let errorElement = document.getElementById(fieldId);
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }

    function validateForm() {
        let nameInput = document.getElementById("name");
        let emailInput = document.getElementById("email");
        let ratingInput = document.getElementById("rating");
        let isValid = true;

        if (nameInput.value.trim() === "") {
            showError("name-error", "⚠ Name is required.");
            nameInput.classList.add("error-input");
            isValid = false;
        } else {
            hideError("name-error");
            nameInput.classList.remove("error-input");
        }

        if (emailInput.value.trim() === "") {
            showError("email-error", "⚠ Email is required.");
            emailInput.classList.add("error-input");
            isValid = false;
        } else {
            hideError("email-error");
            emailInput.classList.remove("error-input");
        }

        if (ratingInput.value.trim() === "") {
            showError("rating-error", "⚠ Please select a rating.");
            isValid = false;
        } else {
            hideError("rating-error");
        }

        return isValid;
    }

    feedbackForm.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
            return;
        }

        event.preventDefault();

        // ✅ Save feedback to localStorage
        const feedback = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            rating: document.getElementById("rating").value,
            feedback:document.getElementById("feedback").value,
            date: new Date().toLocaleString()
        };

        // Get previous feedbacks, or start a new array
        const previousFeedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");

        // Add new feedback
        previousFeedbacks.push(feedback);

        // Save back to localStorage
        localStorage.setItem("feedbacks", JSON.stringify(previousFeedbacks));

        // Thank you screen
        feedbackContainer.innerHTML = `
            <div class="thank-you-container">
                <h2>TravelHUB Feedback</h2>
                <p style="color: green;">Thank you for your feedback!</p>
                <a href="travelmain.html" class="home-btn">Home</a>
            </div>
        `;

        setTimeout(() => {
            window.location.href = "travelmain.html";
        }, 4000);
    });
});