const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const text = document.querySelector('#post-text').value.trim();

  if (title && text) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);



  // const updateButtonHandler = async (event) => {
  //   event.preventDefault();
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');

  //     let label1 = document.querySelector("h3")
  //     label1.textContent = "Update post:"
  //     let button1 = document.querySelector(".btn-primary")
  //    // button1.style display:none

  
  
  //   const comment = document.querySelector('#comment').value.trim();

  //   if (text && title) {
  
  //     const response = await fetch(`/post/${id}`, {
  //       method: 'PUT',
  //       body: JSON.stringify({ comment }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace(`/post/${id}`);
  //     } else {
  //       alert('Failed to post comment');
  //     }
  //   }
  // };

  // document
  // .querySelector('.post-list')
  // .addEventListener('submit', updateButtonHandler);

