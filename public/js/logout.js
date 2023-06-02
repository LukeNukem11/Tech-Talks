// Function to handle the logout process
async function logout() {
    // Send a POST request to the server to log out the user
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
  
    // Check if the response was successful
    if (response.ok) {
      // Redirect to the homepage after successful logout
      document.location.replace('/');
    } else {
      // Display an error message if the request was unsuccessful
      alert(response.statusText);
    }
  }
  
  // Add an event listener to the logout button
  document.querySelector('#logout').addEventListener('click', logout);
  