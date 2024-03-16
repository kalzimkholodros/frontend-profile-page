import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage />
        <Profile 
          username="cart_curt" 
          bio="Merhaba, ben Cart Curt! React geliştiricisiyim ve Instagram'da harika anılarımı paylaşıyorum." 
        />
      </header>
    </div>
  );
}

function WelcomeMessage() {
  return (
    <div className="Welcome">
      <h2>Hoş Geldin!</h2>
      <p>Seni burada görmek güzel! 😊</p>
    </div>
  );
}

function Profile(props) {
  const { username, bio } = props;
  const posts = [
    { id: 1, imageUrl: "/images/man1.png", caption: "Güzel bir manzara! 🌄", date: "2024-03-12" },
    { id: 2, imageUrl: "/images/man2.png", caption: "Yemek zamanı! 🍕", date: "2024-03-11" },
    { id: 3, imageUrl: "/images/man3.png", caption: "Arkadaşlarla birlikte keyifli bir gün! 😊", date: "2024-03-10" }
  ];

  return (
    <div className="Profile">
      <div className="Profile-info">
        <div className="Profile-header"></div>
        <h1>{username}</h1>
        <p>{bio}</p>
      </div>
      <div className="Posts">
        {posts.map(post => (
          <div key={post.id} className="Post">
            <img src={post.imageUrl} alt={`Post ${post.id}`} />
            <p>{post.caption}</p>
            <p>Paylaşım Tarihi: {post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
