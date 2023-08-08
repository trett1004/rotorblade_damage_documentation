import React, { useState } from'react';
import axios from 'axios';


function DamageNr() {
    const [damageNr, setDamageNr] = useState(0);

    const handleSubmit = () => {

        axios.post('/api', {damageNr: parseInt(damageNr)})
        .then(console.log("test", typeof(damageNr)))
        .then((res) => console.log('res', res.data))
        .catch(error => console.error('Error sending data', error));
    }
  
    return (
        <div className="damageNr">
          <label>Damage Number</label>
          <br></br>
          <input
            type='number'
            value={damageNr}
            onChange={(e) => setDamageNr(e.target.value)}
            required
          /><br></br>
          <h1>DamageNr: {damageNr}</h1>
          <button onClick={handleSubmit}>Save</button>
        </div>
  
    );
  }

  export default DamageNr;