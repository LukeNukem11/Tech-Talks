// Function to handle the submission of a new comment form
async function commentFormHandler(event) {
    event.preventDefault();
  
    // Get the comment text from the input field
    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
  
    // Get the post ID from the current URL
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  
    // Check if the comment text is not empty
    if (comment_text) {
      // Send a POST request to the server with the comment data
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Check if the response was successful
      if (response.ok) {
        // Reload the page to display the new comment
        document.location.reload();
      } else {
        // Display an error message if the request was unsuccessful
        alert(response.statusText);
        document.querySelector('#comment-form').style.display = "block";
      }
    }
  }
  
  // Add an event listener to the comment form submit event
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
  