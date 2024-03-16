// UserPosts.js

import React from 'react';
import './UserPosts.css'; // CSS dosyasını import ediyoruz

const UserPosts = ({ posts }) => {
  return (
    <div className="user-posts">
      <h3>Gönderiler</h3>
      <div className="post-list">
        {posts.map((post, index) => (
          <img key={index} src={post.imageUrl} alt={`Gönderi ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default UserPosts;
