import React from 'react';
import call from '../../assets/call.png';
import facebook from '../../assets/facebook.png';
import internet from '../../assets/internet.png';
import './footer.css';
const Footer = () => {
  return (
    <div className='footer flex justify-around'>
       <div className='flex items-start gap-10 my'>
        <div style={{width:'35px',height:'35px',overflow:'hidden',borderRadius:'50%'}} className='flex justify-center items-center'> 
            <img className='sub-logo' src={call} alt='Phone'/>
        </div>
        <span style={{color:'white'}}>Toll free <strong>1800 200 1234</strong> </span>
       </div> 
       <div className='flex items-start gap-10 my'>
        <div style={{width:'35px',height:'35px',overflow:'hidden',borderRadius:'50%'}} className='flex justify-center items-center'> 
            <img className='sub-logo' src={facebook} alt='Phone'/>
        </div>
        <a href='https://www.facebook.com/cribumps'  style={{color:'white'}}><span><strong>https://www.facebook.com/cribumps</strong></span></a>
       </div> 
       <div className='flex items-start gap-10 my'>
        <div style={{width:'35px',height:'35px',overflow:'hidden',borderRadius:'50%'}} className='flex justify-center items-center'> 
            <img style={{width:'40px'}} className='sub-logo' src={internet} alt='Internet'/>
        </div>
        <a href='https://www.crigroups.com/' style={{color:'white'}}><span><strong>https://www.crigroups.com/</strong></span></a>
       </div> 
       
    </div>
  );
}

export default Footer;
