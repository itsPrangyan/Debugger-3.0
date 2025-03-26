function validateForm() {
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;

    if (rating === "") {
        alert("Please select a rating.");
        return false;
    }

    if (comments.trim() === "") {
        alert("Please provide some comments or feedback.");
        return false;
    }

    // If all validations pass
    document.getElementById("feedbackResponse").innerText = "Thank you for your feedback!";
    document.getElementById("feedbackForm").reset(); // Reset the form
    return false; // Prevent actual form submission for this example
}

