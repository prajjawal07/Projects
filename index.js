function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = '';
    if (username === '' || password === '') {
      errorMessage.innerHTML = 'Both fields are required.';
      return false;
    }
    if (username !== 'prajjawal' || password !== 'prajjawal') {
      errorMessage.innerHTML = 'Invalid username or password.';
      return false;
    }
  
    alert('Login successful!');
    return true;
  }
  