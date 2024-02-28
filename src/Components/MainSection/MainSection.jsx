import React from 'react';
import trophy from '../../assets/1.png';
import award from '../../assets/2.png';
import './mainsection.css';
const MainSection = () => {
  return (
    <div className='flex items-start gap-20 flex-wrap main-section gap-30'>
        <div className='flex-40 grow-0 first '>
          <img src={trophy} className='trophy' alt='Trophy' />
        </div>
        <div className='flex flex-col justify-start align-start second'>
          <h4>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
          <div className='ml-20 my-20'>
                <ul className='ml-20 fs-20'>
                  <li>C.R.I's energy efficient products are well recognized by various Government Institutions, as trustworthy products for
      various projects across the globe to save energy.</li>
                  <li>C.R.I. is the highest contributor in the country for the projects of EEL (Energy Efficiency Services Limited) to replace the
      old inefficient pumps with 5 Star rated energy efficient smart pumps with IT enabled control panel.</li>

                </ul>
                
          </div>
          <img src={award} alt='Award' className='award'/>
          <p className='info'>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>.Mr. G. Selvaraj, Joint Managing Director
of C..I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
Minister of State.</p>
        </div>
    </div>
  );
}

export default MainSection;
