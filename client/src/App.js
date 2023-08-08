
// import internals
import React from'react';
import './App.css';

// import components
import DamageData from './components/Damage';



function App() {
  return(
    <div className='App'>
      <h1>Damage Card</h1>
      <div className='damageNr'>
        <DamageData />
      </div>
    </div>
  );
}

export default App;
