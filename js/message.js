
// document.addEventListener('DOMContentLoaded', () => {
//     checkAuth();  // Check if user is logged in
// });

// // Format the date for readability
// function formatDate(dateString) {
//     const date = new Date(dateString);
    
//     const options = {
//         weekday: 'long', 
//         year: 'numeric',
//         month: 'long',   
//         day: 'numeric',  
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true
//     };

//     return date.toLocaleString('en-US', options);
// }

// // Send a like request to the backend
// async function createLike(postId, username) {
//     const response = await fetch(`http://microbloglite.us-east-2.elasticbeanstalk.com/api/likes`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${yourJWTToken}`, // Include the token if necessary
//         },
//         body: JSON.stringify({ postId, username }),
//     });

//     const data = await response.json();
//     if (response.status === 201) {
//         return data; // Newly created like
//     } else {
//         console.error(data.message);
//         return null;
//     }
// }

// // Send a request to remove a like (optional if you need an "unlike" feature)
// async function removeLike(postId, username) {
//     const response = await fetch(`http://microbloglite.us-east-2.elasticbeanstalk.com/api/likes/{likeId}`, {
//         method: 'DELETE', // Make sure your backend supports DELETE to remove likes
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${yourJWTToken}`, // Include the token if necessary
//         },
//     });

//     const data = await response.json();
//     if (response.status === 200) {
//         return data; // Successfully removed like
//     } else {
//         console.error(data.message);
//         return null;
//     }
// }

// // Handle the Like/Unlike action when the user clicks the button
// async function handleLike(postId, currentLikes, username) {
//     const alreadyLiked = currentLikes.includes(username);
//     let updatedLikes;

//     if (alreadyLiked) {
//         // If already liked, unlike it (send DELETE request to remove like)
//         updatedLikes = await removeLike(postId, username);
//     } else {
//         // If not liked, like it (send POST request to create like)
//         updatedLikes = await createLike(postId, username);
//     }

//     if (updatedLikes) {
//         // Update the UI with the new like count and button state
//         const messages = await getMessageList();
//         output.innerHTML = messages.map(m => getMessage(m, username)).join("<hr>\n");
//     }
// }

// // Generate the HTML for each message
// function getMessage(m, username) {
//     const isLiked = m.likes.includes(username);
//     return `
//         <div data-post_id="${m._id}" class="message">
//             <strong>FROM:</strong> ${m.username}<br>
//             <strong>WHEN:</strong> ${formatDate(m.createdAt)}<br>
//             <strong>TEXT:</strong> ${m.text}<br>
//             <strong>LIKES:</strong> <span class="like-count">${m.likes.length}</span>
//             <button class="like-button" onclick="handleLike('${m._id}', ${JSON.stringify(m.likes)}, '${username}')">
//                 ${isLiked ? 'Unlike' : 'Like'}
//             </button>
//         </div>
//     `;
// }

// // When the DOM is loaded, fetch and display messages
// document.addEventListener("DOMContentLoaded", async () => {
//     const username = "currentUser"; // Get the logged-in user's username dynamically
//     const messages = await getMessageList();
//     output.innerHTML = messages.map(m => getMessage(m, username)).join("<hr>\n");
// });

function getMessage(m) {
    const e = document.createElement("div");
    e.setAttribute("class", "message");
    e.dataset.post_id = m._id;
    e.innerHTML = `
      <hr>
      FROM:  ${m.username}<br>\n    
      WHEN:  ${m.createdAt}<br>\n    
      TEXT:  ${m.text}<br>\n
      LIKES: ${m.likes.length}
    `;
    const b = document.createElement("button");
    b.addEventListener("click", async ()=>{
      //is username in list of likes?
      const like = m.likes.find(like=>like.username===localStorage.username);
      if( like != undefined){
        //found - delete
        await deleteLike(like._id);
        window.location.href = 'messages.html'; //refresh page
      }else{
        //not found - create
        await sendLike(m._id);
        window.location.href = 'messages.html'; //refresh page
      }
    });//end click
    
    const like = m.likes.find(like=>like.username===localStorage.username);
    b.innerText = like != undefined ? "UnLike" : "Like";
    e.appendChild(b);
    return e;
  }
  document.addEventListener("DOMContentLoaded", async () => {
    const messages = await getMessageList();
    //output.innerHTML = messages.map(getMessage).join("<hr>\n")
    messages.forEach(m => output.appendChild(getMessage(m)));
  });//end load