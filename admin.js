document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('postForm');
  const postsList = document.getElementById('postsList');

  function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    postsList.innerHTML = '';
    posts.forEach((p) => {
      const li = document.createElement('li');
      li.textContent = p.title;
      postsList.appendChild(li);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const fileInput = document.getElementById('postThumbnail');
    const file = fileInput.files[0];

    const savePost = (thumbnail) => {
      const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      posts.push({ title, content, thumbnail });
      localStorage.setItem('blogPosts', JSON.stringify(posts));
      form.reset();
      loadPosts();
    };

    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        savePost(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      savePost('');
    }
  });

  loadPosts();
});
