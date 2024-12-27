document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.querySelector(".booking-form");

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission for demonstration
        const eventName = document.getElementById("event").value;
        const userName = document.getElementById("name").value;
        const userEmail = document.getElementById("email").value;

        if (eventName && userName && userEmail) {
            alert(`Thank you, ${userName}! Your booking for "${eventName}" has been confirmed. Details have been sent to ${userEmail}.`);
            bookingForm.reset(); // Reset the form fields
        } else {
            alert("Please fill out all fields before booking.");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const selectedEvent = localStorage.getItem("selectedEvent");
    if (selectedEvent) {
        const eventDropdown = document.getElementById("event");
        eventDropdown.value = selectedEvent; // Preselect the event
        localStorage.removeItem("selectedEvent"); // Clear the stored event
    }
});
