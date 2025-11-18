document.getElementById('redeemButton').addEventListener('click', function() {
    const codeInput = document.getElementById('codeInput');
    const message = document.getElementById('message');
    const code = codeInput.value.trim().toUpperCase(); // Get and clean the input

    // Free Fire codes are typically 12 characters long, consisting of letters and numbers.
    const codePattern = /^[A-Z0-9]{12}$/; 

    if (code === '') {
        message.textContent = '❌ Please enter a code.';
        message.style.color = '#e74c3c'; // Red
    } else if (code.length !== 12 || !codePattern.test(code)) {
        message.textContent = '⚠️ Invalid code format. Must be 12 alphanumeric characters.';
        message.style.color = '#f1c40f'; // Yellow
    } else {
        // *** This is the successful redemption simulation ***
        message.textContent = `✅ Code "${code}" submitted for redemption! Please wait for confirmation.`;
        message.style.color = '#2ecc71'; // Green
        
        // In a real application, you would send this code to a server here.
        // For example: fetch('/api/redeem', { method: 'POST', body: JSON.stringify({ code: code }) })
    }
});
