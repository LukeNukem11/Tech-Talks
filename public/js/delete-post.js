// Function to handle the deletion of a post
async function deleteFormHandler(event) {
    event.preventDefault();
  
    // Get the post ID from the current URL
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  
    // Send a DELETE request to the server to delete the post
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        post_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    // Check if the response was successful
    if (response.ok) {
      // Redirect to the dashboard after successful deletion
      document.location.replace('/dashboard/');
    } else {
      // Display an error message if the request was unsuccessful
      alert(response.statusText);
    }
  }
  
  // Add an event listener to the delete post button
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
  