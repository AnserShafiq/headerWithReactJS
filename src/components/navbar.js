import React from 'react';
import Log from './login';
import "./styling.css";
const Nav=()=>{
    return(
        <>
          <div className='mainBody'>
            <Log />
          </div>
          <div>
            <h1 className="Center">Created Header With React.js</h1>
          </div>
        </>
    )

};


export default Nav;