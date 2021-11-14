import styled from "@emotion/styled";
import React, { useState, useRef, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import jsSHA from 'jssha'

const Container = styled.div`
padding: 20px 16px 0 16px;
position:relative;
background-color:#FAFAFA;
`
const Banner = styled.div`
background-color: #FFFFFF;
margin-bottom: 40px;
border-radius: 16px;
display: flex;
align-content:center;
justify-content: space-between;
box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.04);
`
const BannerTitle = styled.div`
font-weight: bold;
font-size: 33px;
margin-right: 15px;
padding:40px 0 40px 24px;
`

const FrameContainer = styled.div`
display:flex;
justify-content: space-between;
`

const CardList = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 20px;
overflow:hidden;
`

const Card = styled.div`
width:250px;
border-radius: 16px;
background-color: #ccc;
height: auto;
`

const CardPhoto = styled.img`
border-radius: 16px 16px 0 0;
width:100%;
height:163px;
`

const CardTitle = styled.div`
font-weight: bold;
font-size: 18px;
`

const CardContent = styled.div`
padding:8px 16px 13px 16px;
display: flex;
align-items: center;
font-size: 14px;
`

const CardPosition = styled.img`
width:14px;
height:17px;
`

const CarouselArrow = styled.div`
display:flex;
align-items: center;
padding: 0 1em;
`

const CarouselArrowRight = styled.div`
width: 3em;
height: 3em;
border-radius: 50%;
margin: 0 1.5em;
position: fixed;
right: 0;
top: 50%;
bottom: 50%;

    &:after{
        content: '';
        display: inline-block;
        margin-top: 0.8em;
        margin-left: 0.6em;
        width: 1em;
        height: 1em;
        border-top: 0.5em solid #cccccc;
        border-right: 0.5em solid #cccccc;
        transform: rotate(45deg);
        color:#cccccc;
    }
`

const CarouselArrowLeft = styled.div`
width: 3em;
height: 3em;
border-radius: 50%;
margin: 0 1.5em;
position: fixed;
left: 0;
top: 50%;
bottom: 50%;

    &:after{
        content: '';
        display: inline-block;
        margin-top: 0.8em;
        margin-left: 0.6em;
        width: 1em;
        height: 1em;
        border-top: 0.5em solid #cccccc;
        border-right: 0.5em solid #cccccc;
        transform: rotate(-135deg);
        color:#cccccc;
    }
`


const Attractions = styled.div`
display: flex;
align-items: center;
width: 100%;
flex-direction: column;
`
const AttractionsTitle = styled.div`
display:flex;
justify-content:center;
`
const CardContainer = styled.div`
display: flex;
`
// const Spots = styled.div`

// `

const MainFrame = () =>{
    const dispatch = useDispatch();
    const cityName = JSON.parse(localStorage.getItem('cityName'))
    const spotsList =  useSelector(state => state.spotsList)
    const blockSelected = useRef('')
    const [spots,getSpots] = useState([])
    // const [classes,getClasses] = useState([])
    const [arrowNumber,handleArrow] = useState(0)
    const [isLeftArrowVisible,handleLeftArrowVisible] = useState(false)
    const [isRightArrowVisible,handleRightArrowVisible] = useState(true)
         
    useEffect(() => {
        handleSearch(cityName)    

    }, [cityName]);
    useEffect(() => {
        
        const splitArray =[]
        // let classesList = []     
        if(spotsList && spotsList.length){
            console.log();
            for(let i= 0, len= spotsList.length; i< len; i+=6){
                splitArray.push(spotsList.slice(i,i+6));
             }
            //  spotsList.forEach(item=>{
            //      classesList.push(item.Class1)
            //  })
            //  getClasses([...new Set(classesList)].filter(item=>item))
             getSpots(splitArray)  
        }
    }, [spotsList]);
    useEffect(() => {
        handleArrow(1)
    }, [spots]);
    useEffect(() => {
        if(arrowNumber <= 1){
            handleLeftArrowVisible(false)
            handleRightArrowVisible(true)
        }else if(arrowNumber === spots.length - 1){
            handleRightArrowVisible(false)
        }else{
            handleLeftArrowVisible(true)
            handleRightArrowVisible(true)
        }
    }, [arrowNumber,spots]);

    const handleNumberChange = (value) =>{
        console.log(blockSelected.current);
        if(value + arrowNumber < spots.length){
            handleArrow(value + arrowNumber)
        } 
    }
    const handleSearch = (cityName) =>{
        return fetch(
            `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${cityName}?$top=20&$format=JSON&$filter=Picture/PictureUrl1 ne null`,
            {
               headers: getAuthorizationHeader()
            }
         )
         .then(res=>res.json())
         .then(function (response) {
            dispatch({
                type: 'ADD_SPOTSLIST',
                payload: { spotsList: response },
              });
         })
         .catch(function (error) {
           console.log(error);
         }); 
    }
    const getAuthorizationHeader = () =>{
        let AppID = '675dad84079841b3a881006714b3d91e';
        let AppKey = 'D0MV31l-dasLMnv5qe9Ly56Rm6Y';
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
    }
    const handleDetail = () =>{
        
    }
    return(
        <Container>
            <Banner>
                <BannerTitle>
                    <div>探索。</div>
                    <div>福爾摩沙</div>
                </BannerTitle> 
                <img src={`../images/people.png`} alt="banner"/>          
            </Banner>
            <FrameContainer>
                {
                     spots.length > 0&&
                    <Attractions>
                        <CardContainer>
                            {/* <AttractionsTitle key={item}>
                                {item}
                            </AttractionsTitle>                                */}
                            <CarouselArrow>
                                <CarouselArrowLeft isArrowVisible={true} ref={blockSelected} onClick={(event)=> handleNumberChange(-1,)} 
                                style= {{display: isLeftArrowVisible ? 'inline-block':'none'}}/>
                            </CarouselArrow>
                                <CardList>
                                    {arrowNumber > 0 && spots[arrowNumber].map((spot, i) => (
                                        <Card key={spot.ID}>
                                            <CardPhoto src={spot.Picture? spot.Picture.PictureUrl1:''} alt={spot.Picture? spot.Picture.PictureDescription1:'spot'} onClick={handleDetail}/>
                                            <CardTitle>{spot.Name}</CardTitle>
                                            <CardContent>
                                                <CardPosition src={`../images/cardLocation.png`} alt="location"/>
                                                {spot.City}
                                            </CardContent>
                                        </Card>
                                    ))}
                                    {/* {
                                        !arrowNumber && '目前並未有資料'
                                    } */}
                                </CardList>
                            <CarouselArrow>
                                <CarouselArrowRight ref={blockSelected}  onClick={()=> handleNumberChange(1)}
                                style={{display: isRightArrowVisible ? 'inline-block':'none'}}/>
                            </CarouselArrow>
                        </CardContainer>
                     {/* ))} */}
                </Attractions>
                }
               
            </FrameContainer>
        </Container>
    )
}
export default MainFrame;