// Function to handle the submission of a new post form
async function handleNewPostForm(event) {
    event.preventDefault();
  
    // Get the values from the form inputs
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="content"]').value;
  
    // Send a POST request to the server with the form data
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    // Check if the response was successful
    if (response.ok) {
      // Redirect to the dashboard if the post was created successfully
      document.location.replace('/dashboard');
    } else {
      // Display an error message if the request was unsuccessful
      alert(response.statusText);
    }
  };
  
  // Add an event listener to the new post form submit event
  document.querySelector('#new-post-form').addEventListener('submit', handleNewPostForm);
  