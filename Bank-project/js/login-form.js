document.getElementById("submit-btn").addEventListener('click', function () {
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    if (email === 'rojinaakter.2795@gmail.com' && password === 'secret') {
    window.location.href = "bank.html";
        console.log('valid')
        
    } else {
        alert('invalid')
   }
    
})
