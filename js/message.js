// Gravatar Hashing Function 
function getGravatarUrl(email, size = 100) {
  const hashedEmail = CryptoJS.SHA256(email.trim().toLowerCase()).toString(CryptoJS.enc.Hex);
  return `https://www.gravatar.com/avatar/${hashedEmail}?s=${size}`;
}

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
  const gravatarUrl = getGravatarUrl(m.username, 150);

  e.innerHTML = `
    <div class="message-header">
      <img src="${gravatarUrl}" alt="${m.username}'s Avatar" class="avatar" />
      <div class="from-info">
        <strong>FROM:</strong> ${m.username}
      </div>
    </div>
    <div><strong>AT :</strong> ${formatDate(m.createdAt)}</div>
    <div><strong>TEXT :</strong> ${m.text}</div>
    <div><strong>LIKES:</strong> ${m.likes.length}</div>
  `;

  // Create Like/Unlike and Delete buttons
  const likeButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  likeButton.addEventListener("click", async () => {
    // Handle like/unlike functionality
    const like = m.likes.find(like => like.username === localStorage.username);
    if (like !== undefined) {
      // Unliking the post
      await deleteLike(like._id);
      window.location.reload(); // Refresh page
    } else {
      // Liking the post
      await sendLike(m._id);
      window.location.reload(); // Refresh page
    }
  });

   // Add Delete button if the current user is the post's author
   if (localStorage.username === m.username) {
    deleteButton.addEventListener("click", async () => {
        await deletePost(m._id);
        window.location.reload(); // Refresh page
    });
    deleteButton.innerText = "Delete";
  } else {
    deleteButton.style.display = "none"; // Hide the delete button if the user is not the author
  }

  // Check if the user already liked the post
  const likeText = m.likes.find(like => like.username === localStorage.username) ? "Unlike" : "Like";
  likeButton.innerText = likeText;

  // Create a div for the buttons and add the buttons inside
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");
  buttonsDiv.appendChild(likeButton);
  buttonsDiv.appendChild(deleteButton);

  // Append the buttons container to the message
  e.appendChild(buttonsDiv);

  return e;
}

// Sort posts by recent, author, or popularity
function sortPosts(posts, sortBy) {
  switch (sortBy) {
      case 'recent':
          return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Most recent first
      case 'author':
          return posts.sort((a, b) => a.username.localeCompare(b.username)); // Sort alphabetically by username
      case 'popularity':
          return posts.sort((a, b) => b.likes.length - a.likes.length); // Most liked first
      default:
          return posts;
  }
}

// Fetch posts and display them
document.addEventListener("DOMContentLoaded", async () => {
  const messages = await getMessageList();
  
  // Listen for changes in the sort options
  const sortOptions = document.getElementById("sort-options");
  sortOptions.addEventListener("change", async (event) => {
    const sortBy = event.target.value;
    const sortedMessages = sortPosts(messages, sortBy);
    displayMessages(sortedMessages);
  });

  // Initially sort by recent posts
  const sortBy = 'recent';
  const sortedMessages = sortPosts(messages, sortBy);
  displayMessages(sortedMessages);
});

// Display messages on the page
function displayMessages(messages) {
  const output = document.getElementById('output');
  output.innerHTML = ''; // Clear previous messages
  messages.forEach(m => output.appendChild(getMessage(m)));
}
