import React, { useEffect, useState } from 'react';
import Card from './components/Card';

import './App.css';
import { AppProvider } from './context/AppContext';
import Weather from './components/Weather';

function App() {
  

  return (
    <div className="App">
      <AppProvider>
        <Weather />
        <Card />
      </AppProvider>
    </div>
  );
}

export default App;
