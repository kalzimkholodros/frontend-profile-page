import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import faker from 'faker';

function App() {
  return (
    <div className="app">
      <Header />
      <ProfileInfo />
      <Timeline />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Profil Sayfası</h1>
    </header>
  );
}

function ProfileInfo() {
  return (
    <section className="profile-info">
      <img src={faker.image.avatar()} alt="Profil Resmi" />
      <h2>{faker.name.findName()}</h2>
      <p>{faker.lorem.sentence()}</p>
    </section>
  );
}

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/random?count=30&client_id=RabaKxh_TIeW7c0rmonG8hpKhOLfQpiE_OQBgBEH5CI`)
      .then(response => {
        const fetchedPosts = response.data.map(photo => ({
          id: photo.id,
          imageUrl: photo.urls.small,
          text: faker.lorem.paragraph(),
          likes: faker.random.number(),
          comments: faker.random.number()
        }));
        setPosts(fetchedPosts);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <section className="timeline">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

function Post({ post }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="post" onClick={handleClick}>
      <img src={post.imageUrl} alt="Paylaşım Resmi" />
      {showDetails && (
        <div className="post-details">
          <img src={post.imageUrl} alt="Paylaşım Resmi" />
          <p>Beğeni Sayısı: {post.likes}</p>
          <p>Yorum Sayısı: {post.comments}</p>
        </div>
      )}
    </div>
  );
}

export default App;
