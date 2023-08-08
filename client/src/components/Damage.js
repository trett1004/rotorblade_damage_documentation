import React, { useState } from 'react';
import axios from 'axios';


function DamageData() {
  const [damage, setDamage] = useState({ damageNr: 0, windfarm: "d", });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setDamage({ ...damage, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api', { damage })
      .then(console.log("test", typeof (damage)))
      .then((res) => console.log('res', res.data))
      .catch(error => console.error('Error sending data', error));
  }

  return (
    <div className="damageForm">
      <label>Damage Number</label>
      <br></br>
      <input
        type='number'
        name='damageNr'
        value={damage.damageNr}
        onChange={handleChange}
        required
      />
      <br></br> <br></br>
      <label>Windfarm</label>
      <br></br>
      <input
        type='text'
        name='windfarm'
        value={damage.windfarm}
        onChange={handleChange}
        required
      />
      <br></br><br></br>
      <button onClick={handleSubmit}>Save</button>
    </div>

  );
}

export default DamageData;