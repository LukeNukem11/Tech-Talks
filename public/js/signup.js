// Function to handle the signup form submission
async function signupFormHandler(event) {
    event.preventDefault();
  
    // Get the values from the signup form inputs
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    // Check if all the required fields are filled
    if (username && email && password) {
      // Send a POST request to the server to create a new user
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // Check if the response was successful
      if (response.ok) {
        console.log('success');
        
        // Redirect to the dashboard after successful signup
        document.location.replace('/dashboard');
      } else {
        // Display an error message if the request was unsuccessful
        alert(response.statusText);
      }
    }
  }
  
  // Add an event listener to the signup form
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
  