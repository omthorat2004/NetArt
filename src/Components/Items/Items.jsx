import React from 'react';
import parts from '../../assets/3.png';
import './items.css';
const Items = () => {
  return (
    <div className='flex flex-col '>
        <p className='sub-heading'>	
INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        <div className='flex justify-center items-center my-20'>
            <img className='items' src={parts}/>
        </div>
        <div className='text-center'>
            <p className='sub-2 my-20'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        </div>
        <hr/>
    </div>
  );
}

export default Items;
