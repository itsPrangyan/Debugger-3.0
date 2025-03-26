// Mock user data (you can replace this with a real backend)
const users = {
    "user1": "password123",
    "user2": "mysecretpassword"
};

// Function to log in
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        localStorage.setItem("username", username);
        showDiary();
    } else {
        alert("Incorrect username or password.");
    }
}

// Function to log out
function logout() {
    localStorage.removeItem("username");
    window.location.reload();
}

// Function to display the diary interface
function showDiary() {
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".diary-container").style.display = "block";
    
    loadEntries();
}

// Function to save the diary entry
function saveEntry() {
    const entry = document.getElementById("diary-entry").value;

    if (entry.trim() !== "") {
        let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
        const username = localStorage.getItem("username");
        entries.push({ username, entry, date: new Date().toLocaleString() });
        localStorage.setItem("diaryEntries", JSON.stringify(entries));
        loadEntries();
        document.getElementById("diary-entry").value = ""; // Clear the entry box
    }
}

// Function to load and display saved entries
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    const username = localStorage.getItem("username");
    
    const userEntries = entries.filter(entry => entry.username === username);
    const entriesDiv = document.getElementById("entries");
    entriesDiv.innerHTML = "";

    if (userEntries.length === 0) {
        entriesDiv.innerHTML = "<p>No entries yet.</p>";
    } else {
        userEntries.forEach(entry => {
            const entryDiv = document.createElement("div");
            entryDiv.classList.add("entry");
            entryDiv.innerHTML = `<p><strong>Entry on ${entry.date}:</strong><br>${entry.entry}</p>`;
            entriesDiv.appendChild(entryDiv);
        });
    }
}

// Check if user is logged in when page loads
window.onload = function() {
    const username = localStorage.getItem("username");
    if (username) {
        showDiary();
    }
}
