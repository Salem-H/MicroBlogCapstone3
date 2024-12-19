// Gravatar Hashing Function
function getGravatarUrl(email, size = 100) {
  const hashedEmail = CryptoJS.SHA256(email.trim().toLowerCase()).toString(CryptoJS.enc.Hex);
  return `https://www.gravatar.com/avatar/${hashedEmail}?s=${size}`;
};

// Format the date for readability
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
      weekday: 'long', 
      year: 'numeric',
      month: 'long',   
      day: 'numeric',  
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
  };
  return date.toLocaleString('en-US', options);
}

// Get the HTML for each message post
function getMessage(m) {
  const e = document.createElement("div");
  e.setAttribute("class", "message");
  e.dataset.post_id = m._id;
  
  // Create Gravatar image

  // const userGravatarUrl = getGravatarUrl(m.email);
  // const avatar = `<img src="${userGravatarUrl}" alt="${m.username}'s Avatar" class="avatar">`;
  const gravatarUrl = getGravatarUrl(m.username, 150);

  e.innerHTML = `
    <img scr="${gravatarUrl}"/> 
    FROM:  <b>${m.username}</b><br>\n    
    WHEN:  <b>${formatDate(m.createdAt)}</b>\n    
    TEXT:  <b>${m.text}<br></b>\n
    LIKES: <b>${m.likes.length}</b>
  `;

  const b = document.createElement("button");
  b.addEventListener("click", async () => {
    // Handle like/unlike functionality
    const like = m.likes.find(like => like.username === localStorage.username);
    if (like !== undefined) {
      // Unliking the post
      await deleteLike(like._id);
      window.location.href = 'messages.html'; // Refresh page
    } else {
      // Liking the post
      await sendLike(m._id);
      window.location.href = 'messages.html'; // Refresh page
    }
  });

  const like = m.likes.find(like => like.username === localStorage.username);
  b.innerText = like !== undefined ? "UnLike" : "Like";
  e.appendChild(b);
  return e;
}

// Sort posts by recent, author, or popularity
function sortPosts(posts, sortBy) {
  switch (sortBy) {
      case 'recent':
          // Sort by createdAt (most recent first)
          return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case 'author':
          // Sort alphabetically by username
          return posts.sort((a, b) => a.username.localeCompare(b.username));
      case 'popularity':
          // Sort by number of likes (most liked first)
          return posts.sort((a, b) => b.likes.length - a.likes.length);
      default:
          return posts;
  }
}

// Fetch posts and display them
document.addEventListener("DOMContentLoaded", async () => {
  const messages = await getMessageList();  
  const sortBy = 'recent'; 
  
  const sortedMessages = sortPosts(messages, sortBy);
  
  // Append sorted messages to the page
  const output = document.getElementById('output');
  sortedMessages.forEach(m => output.appendChild(getMessage(m)));
});
