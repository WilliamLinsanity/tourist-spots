import styled from "@emotion/styled";
import React, { useState,useEffect } from "react";


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
height: 100vh;
`

const CardList = styled.div`
display: flex;
width:80%;
overflow:hidden;
`

const Card = styled.div`
width:40%;
border-radius: 16px;
background-color: #ccc;
margin-right:24px;
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
`

const CardPosition = styled.img`
width:14px;
height:17px;
`

const CarouselArrow = styled.div`
display:flex;
align-items: center;
`

const CarouselArrowRight = styled.div`
width: 3em;
height: 3em;
border-radius: 50%;
margin-right: 1.5em;
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
margin-right: 1.5em;
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
display:flex;
`
// const Spots = styled.div`

// `

const MainFrame = () =>{
    const [spots,getSpots] = useState([])
    const [arrowNumber,handleArrow] = useState(0)
    const [isLeftArrowVisible,handleLeftArrowVisible] = useState(true)
    const [isRightArrowVisible,handleRightArrowVisible] = useState(true)
    useEffect(() => {
        const splitArray =[]
        if(JSON.parse(localStorage.getItem('spots')).length){
            for(let i=0,len=JSON.parse(localStorage.getItem('spots')).length;i<len;i+=4){
                splitArray.push(JSON.parse(localStorage.getItem('spots')).slice(i,i+4));
             }
        }
        getSpots(splitArray)

    }, [localStorage.getItem('spots')]);
    useEffect(() => {
        handleRightArrowVisible(true)
        handleLeftArrowVisible(true)
        handleArrow(1)
    }, [spots]);

    useEffect(() => {
        if(arrowNumber < 0){
            handleLeftArrowVisible(true)
            handleRightArrowVisible(true)
        }else{
            handleLeftArrowVisible(false)
            handleRightArrowVisible(false)
        }
    }, [arrowNumber]);

    const handleNumberChange = (value) =>{
        console.log(value + arrowNumber , spots.length);
        if(value + arrowNumber < spots.length){
            handleArrow(value+arrowNumber)
        }else if(value + arrowNumber < 0){
            handleLeftArrowVisible(false)
            handleRightArrowVisible(true)
        }
        else{
            handleLeftArrowVisible(true)
            handleRightArrowVisible(false)
        }
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
                    spots && <Attractions>
                    <div>熱門景點</div>
                    <CarouselArrow>
                        <CarouselArrowLeft isArrowVisible={true} onClick={()=> handleNumberChange(-1)} 
                        style={{display: ({isLeftArrowVisible})=>(isLeftArrowVisible ? 'inline-block':'none')}}/>
                    </CarouselArrow>
                        <CardList>
                            {arrowNumber > 0 && spots[arrowNumber].map((item, i) => (
                                <Card key={item.ID}>
                                    <CardPhoto src={item.Picture? item.Picture.PictureUrl1:''} alt={item.Picture? item.Picture.PictureDescription1:'spot'}/>
                                    <CardTitle>{item.Name}</CardTitle>
                                    <CardContent>
                                        <CardPosition src={`../images/cardLocation.png`} alt="location"/>
                                        {item.City}
                                    </CardContent>
                                </Card>
                            ))}
                            {
                                !arrowNumber && '目前並未有資料'
                            }
                        </CardList>
                    <CarouselArrow>
                        <CarouselArrowRight onClick={()=> handleNumberChange(1)}
                        style={{display: ({isRightArrowVisible})=>isRightArrowVisible ? 'inline-block':'none'}}/>
                        {isRightArrowVisible ? '123':'456'}
                    </CarouselArrow>
                </Attractions>
                }
               
            </FrameContainer>
        </Container>
    )
}
export default MainFrame;