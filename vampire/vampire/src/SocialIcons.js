// SocialIcons.js

import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './SocialIcons.css'; // CSS dosyasını import ediyoruz

const SocialIcons = () => {
  return (
    <div className="social-icons-container">
      <a href="#"><FaInstagram /></a>
      <a href="#"><FaTwitter /></a>
      <a href="#"><FaFacebook /></a>
    </div>
  );
}

export default SocialIcons;
