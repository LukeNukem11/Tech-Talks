// Function to handle the submission of the login form
async function loginFormHandler(event) {
    event.preventDefault();
  
    // Get the username and password values from the form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    // Check if both username and password are provided
    if (username && password) {
      // Send a POST request to the server to authenticate the user
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Check if the response was successful
      if (response.ok) {
        // Redirect to the dashboard after successful login
        document.location.replace('/dashboard');
      } else {
        // Display an error message if the request was unsuccessful
        alert(response.statusText);
      }
    }
  }
  
  // Add an event listener to the login form
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
  