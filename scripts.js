document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!");

    // Dynamic booking handler for buttons
    const bookButtons = document.querySelectorAll(".event-card button");
    bookButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const eventName = e.target.closest(".event-card").querySelector("h3").textContent;
            alert(`Booking confirmed for: ${eventName}`);
        });
    });

    // Add light/dark theme toggle
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Toggle Theme";
    themeToggle.style = `
        position: fixed; 
        bottom: 20px; 
        right: 20px; 
        padding: 0.7em 1em; 
        background: #333; 
        color: #fff; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer;`;
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
    document.body.appendChild(themeToggle);

    // Feature: Add animations for buttons (optional)
    bookButtons.forEach((button) => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.2s ease-in-out";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });
});
function navigateToBooking(eventName) {
    // Save event name in localStorage to persist between pages
    localStorage.setItem("selectedEvent", eventName);
    // Redirect to booking page
    window.location.href = "event_booking.html";
}
