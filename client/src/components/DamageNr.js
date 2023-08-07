import React, { useState } from'react';


function DamageNr() {
    const [damageNr, setDamageNr] = useState(0);
  
    return (
        <div className="damageNr">
          <label>Damage Number</label>
          <br></br>
          <input
            type='text'
            value={damageNr}
            onChange={(e) => setDamageNr(e.target.value)}
            required
          /><br></br>
          <h1>DamageNr: {damageNr}</h1>
          <button onClick={() => setDamageNr(damageNr + 1)}>Save</button>
        </div>
  
    );
  }

  export default DamageNr;