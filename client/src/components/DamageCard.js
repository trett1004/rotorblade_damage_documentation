import React, { useState } from 'react';
import axios from 'axios';


function DamageCard() {
  const [damageCard, setDamageCard] = useState({
    damageNr: 0,
    date: new Date().toISOString().slice(0, 10),
    windfarm: "",
    blade: 0,
    z: 0,
    profile_depth: 0,
    edge: '',
    side: '',
  });

  console.log(damageCard);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setDamageCard({ ...damageCard, [e.target.name]: e.target.value });

  }

  const handleRadioButton = (e) => {
    console.log(e.target.name, e.target.value);
    setDamageCard({ ...damageCard, [e.target.name]: e.target.value });
  }

  // post request to server
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('damage', damageCard)
    axios.post('/api', { damageCard })
      .then(console.log("test", typeof (damageCard)))
      .then((res) => console.log('res', res.data))
      .catch(error => console.error('Error sending data', error));
  }

  return (
    <div className="damageCardForm">

      <label>Damage Number</label>
      <br></br>
      <input type='number' name='damageNr' value={damageCard.damageNr} onChange={handleChange} required />
      <br></br> <br></br>

      <label>Date</label>
      <br></br>
      <input type='date' name='date' value={damageCard.date} onChange={handleChange} required />
      <br></br> <br></br>

      <label>Windfarm</label>
      <br></br>
      <input type='text' name='windfarm' value={damageCard.windfarm} onChange={handleChange} required />
      <br></br><br></br>

      <label>Blade</label>
      <br></br>
      <input type='number' name='blade' value={damageCard.blade} onChange={handleChange} required />
      <br></br><br></br>

      <label>Z[mm]</label>
      <br></br>
      <input type='number' name='z' value={damageCard.z} onChange={handleChange} required />
      <br></br><br></br>

      <label>Profile depth [% from LE]</label>
      <br></br>
      <input type='number' name='profile_depth' value={damageCard.profile_depth} onChange={handleChange} required />
      <br></br><br></br>

      <div>
        <form>
          <input type='radio' name='edge' value='leading_edge' checked={damageCard.edge === 'leading_edge'} onChange={handleRadioButton} />
          <label>Leading Edge</label>

          <input type='radio' name='edge' value='trailing_edge' checked={damageCard.edge === 'trailing_edge'} onChange={handleRadioButton} />
          <label>Trailing Edge</label>
        </form>
      </div>
      <br></br> <br></br>


      <div>
        <form>
          <input type='radio' name='side' value='suction_side' checked={damageCard.side === 'suction_side'} onChange={handleRadioButton} />
          <label>Suction Side</label>

          <input type='radio' name='side' value='pressure_side' checked={damageCard.side === 'pressure_side'} onChange={handleRadioButton}
          />
          <label>Pressure Side</label>
        </form>
      </div>
      <br></br> <br></br>

      <br></br><br></br>
      <button onClick={handleSubmit}>Save Damage</button>
    </div>

  );
}

export default DamageCard;