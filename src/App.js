// src/App.js
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn ? <LoginPage onLogin={() => setIsLoggedIn(true)} /> : <Dashboard />}
    </div>
  );
}

export default App;
