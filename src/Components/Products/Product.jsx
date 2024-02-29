import React from 'react';
import './product.css';
const array = ["CHEMICALS & PROCESS","POWER","WATER & WASTE WATER","OILS & GAS","PHARMA","SUGARS & DISTILLERIES","PAPER & PULP","MARINE & DEFENCE","METAL & MINING","FOOD & BEVERAGE","PETROCHEMICAL & REFINERIES","SOLAR","BUILDING","HVAC","FIRE FIGHTING","AGRICULTURE & RESIDENTIAL"]
const Product = () => {
  return (
    <div className='py-18 py-15 py-12 px-21 px-18 px-15 flex justify-center flex-col'>
        <h4 className='mb-15' style={{textAlign:'center'}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>

        <div className='flex justify-center flex-wrap items-center'>
            {
                array.map((name,index)=>{
                  
         
                    if(index<array.length-1){
                        
                        return <React.Fragment key={index}>
                        {<span className='name'>{name}</span>}
                        {index < array.length - 2 ? <span style={{ color: 'red' }} >|</span>:null}
                      </React.Fragment>
                    }else if(index==array.length-1){
                        return ;
                    }
                })
            }
        </div>
    </div>
  );
}

export default Product;
