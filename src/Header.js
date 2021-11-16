import React, { useState,useEffect } from "react";
import { useDispatch  } from 'react-redux';
import hamburger from './images/hamburger.png'
import logo from './images/logo.png'
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
        }       
    }, [dispatch,spotsList]);
    return(
        <>
            <header className="App-header">
                <img src={hamburger} className="hamburger" alt="hamburger" onClick={()=>setVisible(!isVisible)} />
                <img src={logo} alt="logo"/>
            </header>
            {
                isVisible && <SearchBlock changeVisible={changeVisible} isVisible={isVisible} getSpotsList={getSpotsList}/> 
            }            
        </>
    )
}
export default Header;