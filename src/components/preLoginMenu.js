import React from 'react';

import "./styling.css";
const leftMenu=()=>{
    return (
       <>
       <div className='Menu'>
            <ul className="Left_Side">
                <li><a href="#" className='menuBtn'>Home</a></li>
                <li><a href="#" className='menuBtn'>About Us</a></li>
                <li><a href="#" className='menuBtn'>Contact Us</a></li>
            </ul>
        </div>
        
        </>
    )
};

export default leftMenu;