import React from 'react';
import WaitlistForm from './components/WaitlistForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Startup</h1>
        <p>We are doing amazing things. Stay tuned!</p>
        <WaitlistForm />
      </header>
    </div>
  );
}

export default App;

