import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';

function App() {
  const [translated, setTranslated] = useState({});
  return (
    <div className="App">
		<Home 
    setTranslated={setTranslated}
    translated={translated}
    />
    </div>
  );
}

export default App;
