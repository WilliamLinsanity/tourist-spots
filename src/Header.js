import React, { useState,useEffect } from "react";
import { useDispatch  } from 'react-redux';

import SearchBlock from './SearchBlock'
const Header = () =>{
    const dispatch = useDispatch();

    const [isVisible,setVisible] = useState(false)
    const [spotsList,getSpotsList] = useState(null)
    const changeVisible = (value) =>{
        setVisible(value)
    }
    useEffect(() => {
        if(spotsList){
            dispatch({
                type: 'ADD_SPOTSLIST',
                payload: { spotsList },
              });
            // localStorage.setItem('spots',JSON.stringify(spotsList))
        }       
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