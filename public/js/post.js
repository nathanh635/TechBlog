

  const newCommentHandler = async (event) => {
   
      const id = window.location.pathname.slice(6);
    event.preventDefault();
  
    const text = document.querySelector('#comment').value.trim();
    if (text) {
  
      const response = await fetch(`/post/${id}`, {
        method: 'POST',
        body: JSON.stringify({ text, id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${id}`);
      } else {
        alert('Failed to post comment');
      }
    }};



  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);