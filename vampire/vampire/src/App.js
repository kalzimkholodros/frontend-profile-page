// App.js

import React from 'react';
import ProfileInfo from './ProfileInfo';
import UserPosts from './UserPosts';
import SocialIcons from './SocialIcons';
import CustomIcon from './CustomIcon';


import './App.css';

const App = () => {
  const userInfo = {
    username: 'NICKNAME',
    followers: 1000,
    following: 500,
    profilePicture: '/images/pp.png',
    posts: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ]
  };

  return (
    <div className="App">
       
        <CustomIcon />
      <ProfileInfo
        username={userInfo.username}
        followers={userInfo.followers}
        following={userInfo.following}
        profilePicture={userInfo.profilePicture}
      />
      <UserPosts posts={userInfo.posts} />
      <SocialIcons />
    </div>
  );
}

export default App;
