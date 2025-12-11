import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
    <h1>Welcome to BrainBoost Puzzles!</h1>
    <p>
      BrainBoost Puzzles is a fun and engaging gaming app designed to improve your brain power through a variety of puzzles and challenges. Suitable for all ages, our app offers logic games, memory tests, and creative puzzles to help you sharpen your mind while having fun.
    </p>
    <p>
      Whether you are a child, teen, adult, or senior, BrainBoost Puzzles has something for everyone. Start your journey to a smarter brain today!
    </p>
    <Link to="/privacy">Read our Privacy Policy</Link>
  </div>
);

export default Home;
