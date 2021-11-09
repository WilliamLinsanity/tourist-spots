import React, { useState } from "react";
import SearchBlock from './SearchBlock'
const Header = () =>{
    const [isVisible,setVisible] = useState(false)
    return(
        <>
            <header className="App-header">
            <img src='../images/hamburger.png' className="hamburger" alt="hamburger" onClick={()=>setVisible(!isVisible)} />
            <img src='../images/logo.png' alt="logo"/>
            </header>
            {
                isVisible && <SearchBlock/> 
            }            
        </>
    )
}
export default Header;