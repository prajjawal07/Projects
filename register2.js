document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
  
    // Mock success response
    alert(`Welcome, ${fullname}! Your registration for NewsVerse is successful.`);
  });
  