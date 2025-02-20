document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const fullName = document.getElementById('fullName').value.trim();
    const address = document.getElementById('address').value.trim();
    const aadharId = document.getElementById('aadharId').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();

    let isValid = true;
    let errorMessages = [];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessages.push("❌ Invalid Email Address.");
        isValid = false;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        errorMessages.push("❌ Mobile Number should be 10 digits.");
        isValid = false;
    }

    const aadharRegex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
    if (!aadharRegex.test(aadharId)) {
        errorMessages.push("❌ Invalid Aadhar ID.");
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessages.join("\n"));
        return;
    }

    const formData = new FormData(this);

    fetch('dbconnection.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log("Response from PHP:", data);

        const notification = document.getElementById('notification');
        
        if (data.trim() === "success") {
            notification.textContent = "✅ Registration Successful!";
            notification.style.backgroundColor = "#4CAF50";
        } else {
            notification.textContent = "❌ Error: " + data;
            notification.style.backgroundColor = "#f44336"; 
        }

        notification.style.display = "block";
        notification.classList.add('show');

        setTimeout(() => { 
            notification.classList.remove('show');
            notification.style.display = "none";
            if (data.trim() === "success") document.getElementById('registrationForm').reset();
        }, 3000);
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Something went wrong! Check console for details.");
    });
});
