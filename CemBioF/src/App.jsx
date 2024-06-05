import React from 'react';
import HeaderCemBio from './components/HeaderCemBio/HeaderCemBio';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/Landing';
import MetaTags from './components/MetaTags/MetaTags';
import './App.css';

function App() {
  return (
    <div className="App">
      <MetaTags />
      <HeaderCemBio />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;

