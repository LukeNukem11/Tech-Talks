// Function to handle the submission of the edit post form
async function editFormHandler(event) {
    event.preventDefault();
  
    // Get the updated title and content values from the form
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value.trim();
  
    // Get the post ID from the current URL
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  
    // Send a PUT request to the server to update the post
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id,
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    // Check if the response was successful
    if (response.ok) {
      // Redirect to the dashboard after successful update
      document.location.replace('/dashboard/');
    } else {
      // Display an error message if the request was unsuccessful
      alert(response.statusText);
    }
  }
  
  // Add an event listener to the edit post form
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  