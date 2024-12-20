# HobbyHub 

## Project Overview

**HobbyHub** is an online platform where users can post and share content related to their hobbies and interests. The site allows users to create posts, like or dislike content, interact through messages, and manage their profiles. It's a social hub for hobby enthusiasts to connect, share, and discover new activities.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [File Structure](#file-structure)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features

- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Create Posts**: Users can create and share posts related to their hobbies.
- **Likes and Dislikes**: Each post can be liked or unliked, allowing users to engage with content.
- **Messaging**: Users can send and receive messages from others.
- **Profile Management**: Users can update their personal details and view their posts.
- **Gravatar Integration**: User avatars are pulled from Gravatar based on the user's email/username.

---

## Technologies Used

- **Frontend**:
  - HTML5, CSS3, JavaScript
  - Bootstrap 4 for responsive design
  - FontAwesome for icons
  - CryptoJS for hashing (used for Gravatar URL generation)
  
- **Backend**:
  - Node.js (with Express.js)
  - MongoDB for data storage
  - JSON Web Tokens (JWT) for user authentication
  - RESTful APIs for fetching data

---

## Installation

To run this project locally, follow the steps below:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Salem-H/MicroBlogCapstone3
    cd hobbyhub
    ```

2. **Install dependencies**:
    If you're using Node.js for the backend:
    ```bash
    npm install
    ```


3. **Set up environment variables**:
    Ensure that your backend is properly configured with the required environment variables such as:
    - `MONGODB_URI` (for MongoDB connection)
    - `JWT_SECRET` (for JWT authentication)

    These variables can be set in a `.env` file in the root directory:
    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/hobbyhub
    JWT_SECRET=your-jwt-secret
    ```

4. **Run the application**:
    - For the backend:
      ```bash
      node server.js
      ```
    - For the frontend (open the `index.html` file in a browser).

---

## Usage

Once you have the application running locally, you can interact with it by:

1. **Sign Up / Login**: Create an account using your email and password. After logging in, you'll be redirected to the home page.
   
2. **Create a Post**: You can create a post by navigating to the "Create Post" section, entering your text, and submitting it.

3. **Like and Dislike**: Engage with posts by liking or unliking them.

4. **View Messages**: Check your inbox for messages, and reply to them.

5. **Profile Management**: Update your personal information and view your posts.

---

## File Structure

Here’s an overview of the project structure:

## Screenshots

### Landing Page/ Login Page
![HobbyHub LandingPage](./img/pages/LandinPage.jpg)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Authors

- **Salem Hailemariam** - [https://github.com/Salem-H]

## Acknowledgements

- My instructor Kevin E Long for the support throuhout this project.
- **National Park Service** for providing open data on parks.
- **sunrise-sunset.org** used to fetch the sunset and sunrise time.
- **cdnjs.cloudflare.com** for the social media icons.
- **MDN Web Docs** for form/enctype to upload picture

## Contact

If you have any questions or suggestions, feel free to contact me [salemkassal@gmail.com]