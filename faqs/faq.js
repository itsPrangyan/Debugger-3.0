/*
document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", function () {
            this.classList.toggle("active");
            const answer = this.querySelector(".answer");
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
*/

        document.addEventListener("DOMContentLoaded", function() {
    let questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            let answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

    