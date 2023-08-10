
// import internals
import React from'react';
import './App.css';

// import components
import DamageCard from './components/DamageCard';
import CreateReport from './components/BtnGenerateReport';
import Camera from './components/Camera';


function App() {
  return(
    <div className='App'>
      <h1>Damage Card</h1>
      <div className='damageCard'>
        <DamageCard />
        <br></br>
        <Camera />
        <br></br>
        <CreateReport />
      </div>
    </div>
  );
}

export default App;
