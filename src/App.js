import React from 'react';

import ConnectionAwareMedia from './components/ConnectionAwareMedia';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ConnectionAwareMedia />
      </header>
    </div>
  );
};

export default App;
