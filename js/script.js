
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const outputDiv = document.getElementById('output');
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const message = document.getElementById('message').value;

        if (!name || !age || !email || !date || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const outputHtml = `
            <div class="output-item">
                <label>Name:</label> ${name}
            </div>
            <div class="output-item">
                <label>Age:</label> ${age}
            </div>
            <div class="output-item">
                <label>Email:</label> ${email}
            </div>
            <div class="output-item">
                <label>Date:</label> ${date}
            </div>
            <div class="output-item">
                <label>Message:</label> ${message}
            </div>
        `;

        outputDiv.innerHTML = outputHtml;
        form.reset();
    });
});
