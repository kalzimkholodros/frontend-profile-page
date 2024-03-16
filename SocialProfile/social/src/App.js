import React, { useState } from 'react';
import './App.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPost(postId);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="profile">
      <div className="social-media-icons">
        <a href="https://www.facebook.com"><FaFacebook className="social-media-icon" /></a>
        <a href="https://twitter.com"><FaTwitter className="social-media-icon" /></a>
        <a href="https://www.instagram.com"><FaInstagram className="social-media-icon" /></a>
      </div>
      <div className="social-media-logo-container">
        {/* Resmi buradan sildik */}
      </div>
      <div className="profile-header">
        <p className="profile-picture" alt="Profile" />
        <h1 className="profile-name">@basket.asigi.zenci</h1>
        <p className="profile-bio">Basket oynuyom.</p>
      </div>
      <div className="profile-posts">
        <div className="post post1" onClick={() => handlePostClick(1)}></div>
        <div className="post post2" onClick={() => handlePostClick(2)}></div>
        <div className="post post3" onClick={() => handlePostClick(3)}></div>
        <div className="post post4" onClick={() => handlePostClick(4)}></div>
        <div className="post post5" onClick={() => handlePostClick(5)}></div>
        <div className="post post6" onClick={() => handlePostClick(6)}></div>
      </div>

      {selectedPost && (
        <div className="modal">
          <button className="close-button" onClick={handleCloseModal}>Close</button>
          {/* Seçilen gönderi detayları buraya gelecek */}
          <div className="post-details">
          <img className="post-picture" src={`posts/post${selectedPost}.jpg`} alt={`Post ${selectedPost}`} />

            <div className="post-info">
              <p>Like: 100</p>
              <p>Comments: 20</p>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
