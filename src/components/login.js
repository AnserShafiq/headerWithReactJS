import React,{useState} from 'react';
import "./styling.css";
import Pre from './preLoginMenu';
import Post from './postLogin';
const Log=()=>{
    const [isLogged,setLogIn]=useState(false);
    return(
        <>
            <div className="Right_Side">
                <input type="submit" 
                value={!isLogged ? "LogIn":"SignOut"}
                onClick={()=>setLogIn(!isLogged)}
                />
            </div>
            {
                !isLogged ? <>
                    <Pre/>
                </>:<>
                    <Post />
                </>
            }
        </>
    )
};
export default Log;