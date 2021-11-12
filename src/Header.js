import React, { useState,useEffect } from "react";
import SearchBlock from './SearchBlock'
const Header = () =>{
    const [isVisible,setVisible] = useState(false)
    const [spotsList,getSpotsList] = useState(null)
    const changeVisible = (value) =>{
        setVisible(value)
    }
    useEffect(() => {
        if(spotsList){
            console.log(spotsList);
            localStorage.setItem('spots',JSON.stringify(spotsList))
        }
        return () => {
            getSpotsList(null)
        };
    }, [spotsList]);
    return(
        <>
            <header className="App-header">
                <img src='../images/hamburger.png' className="hamburger" alt="hamburger" onClick={()=>setVisible(!isVisible)} />
                <img src='../images/logo.png' alt="logo"/>
            </header>
            {
                isVisible && <SearchBlock changeVisible={changeVisible} isVisible={isVisible} getSpotsList={getSpotsList}/> 
            }            
        </>
    )
}
export default Header;