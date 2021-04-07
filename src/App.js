import React from 'react'
import Header from './Header'
import './App.css';

function App() {
  console.log("hello")
  return (
    <div className="App">
      <h1> Dinder!</h1>
      <h3>Swipe to find dinner!</h3>
      {/* Header */}
      <Header />
      {/* Dinder Cards */}
      {/* Buttons below Dinder Cards */}
    </div>
  );
}

export default App;
