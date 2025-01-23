document.getElementById("newsletter-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get input values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    // Display the values (or handle them as needed)
    console.log("Name:", name);
    console.log("Phone:", phone);

    // Example: Sending data to a server via POST request
    fetch("https://server.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, phone })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error submitting form.");
    });
});