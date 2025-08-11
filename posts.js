document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('blogPosts');
  if (!container) return;
  const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
  if (posts.length === 0) {
    container.innerHTML = '<p>No posts yet.</p>';
    return;
  }
  posts.forEach((post) => {
    const div = document.createElement('div');
    div.className = 'blog-post mb-4';
    if (post.thumbnail) {
      const img = document.createElement('img');
      img.src = post.thumbnail;
      img.alt = post.title;
      img.className = 'img-fluid mb-2';
      div.appendChild(img);
    }
    const h3 = document.createElement('h3');
    h3.textContent = post.title;
    div.appendChild(h3);
    const p = document.createElement('p');
    p.textContent = post.content;
    div.appendChild(p);
    container.appendChild(div);
  });
});
