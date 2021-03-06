import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import jsSHA from 'jssha'
import search from './images/search.png'
import arrow from './images/arrow.png'
import env from 'react-dotenv'

const Search = styled.div`
background-color:#fafafa;
height: 100vh;
`

const CityContainer = styled.div`
padding: 0 16px;
margin:8px 0;
`

const MultiSelect = styled.div`
cursor: pointer;
height: 43px;
border-radius:8px;
background: #FAFAFA;
border: 1px solid rgba(0, 0, 0, 0.08);
position:relative;
&:before{
    content:attr(data-before);
    position:absolute;
    top:50%;
    left: 12px;
    transform: translate(0, -50%);
    color: rgba(0, 0, 0, 0.38);
}
`;

const CitySelect = styled.div`
position: absolute;
top:50%;
left: 12px;
transform: translate(0, -50%);
`

const Arrow =styled.img`
position:absolute;
top:50%;
right:12px;
transform: translate(0, -50%);
`
const CityBlock = styled.div`
position: absolute;
left: 0;
right: 0;
z-index: 10;
margin: 0 16px;
background-color:#ffffff;
height: calc(100vh/3);
display: flex;
justify-content:flex-start;
align-content: flex-start;
flex-wrap: wrap;
border-radius: 0 0 12px 12px;
box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.04);
`

const CityItem = styled.div`
box-sizing: border-box;
margin:12px;
border: 1px solid #3FB195;
border-radius: 8px;
padding: 6px 26px;
height: 40px;
white-space: nowrap;
`

const KeywordSelect = styled.div`
padding: 0 16px;
position: relative;
`
const KeywordInput =  styled('input')`
box-sizing: border-box;
width: 100%;
margin:4px 0;
padding:0;
padding-left: 12px;
height: 43px;
border-radius:8px;
background: #FAFAFA;
border: 1px solid rgba(0, 0, 0, 0.08);
position:relative;
    &:after{
        content:url(${search});
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translate(0, -50%);
    }
`

const SearchImg = styled.img`
position:absolute;
top:50%;
right: 28px;
transform: translate(0, -50%);
`
const TopicBlock = styled.div`
display:flex;
flex-wrap: wrap;
padding:12px 6px 0 6px;
justify-content: center;
img{
    padding:8px 46px 0 46px;
    width:70px;
    height:70px;
}
`
const TopicItem = styled.div`
padding:20px 6px 28px 6px;
    img{
        padding:8px 46px 0 46px;
        width:70px;
        height:70px;
    }
`
const SearchBtnBlock = styled.div`
position: fixed;
bottom: 0;
left: 0;
right: 0;
padding:8px 16px; 
background-color:#ffffff;
`

const SearchBtn = styled.button`
background-color: #3FB195;
color: #ffffff;
padding: 10px 140px;
border-radius: 8px;
border: 0;
white-space: nowrap;
`
const SearchBlock = (props)=>{
    const cityList =[
        {id:0,code:'NewTaipei',name:'?????????'},
        {id:1,code:'Taipei',name:'?????????'},
        {id:2,code:'Taoyuan',name:'?????????'},
        {id:3,code:'Hsinchu',name:'?????????'},
    ]
    const topicImgName = 'topic'
    const topicContentList =[
        {id:0,name:'????????????'},
        {id:1,name:'????????????'},
        {id:2,name:'????????????'},
        {id:3,name:'????????????'},
        {id:4,name:'?????????'},
        {id:5,name:'????????????'},
        {id:6,name:'????????????'},
        {id:7,name:'????????????'},
    ]
    const [cityVisible,handCityVisible] = useState(false)
    const [blockVisible,handleBlockVisible] = useState(props.isVisible)
    const [city,handleCitySelect] = useState('')
    const [transformName,handleCityTransform] = useState('')
    let [keyword,handleKeywordSelect] = useState('')
    const transForm = cityList.find(item=>item.code === city) || {}

    useEffect(() => {
        handCityVisible(false);
        return () => {
          setState(false);
        };
    }, []);


    useEffect(() => {
        if(!blockVisible){
            handCityVisible(false)            
            props.changeVisible(!props.isVisible)
            localStorage.setItem('cityName',JSON.stringify(city))
            return fetch(
            `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=100&$format=JSON&$filter=Picture/PictureUrl1 ne null`,
            {
               headers: getAuthorizationHeader()
            }
         )
         .then(res=>res.json())
         .then(function (response) {
            props.getSpotsList(response)
         })
         .catch(function (error) {
           console.log(error);
         }); 
        }
    }, [blockVisible,props,city]);

    useEffect(() => {
        handleCityTransform(transForm.name)
    }, [transForm.name]);

    const setState = (value) =>{
        handCityVisible(value)
    }

    const handleChange = (e) => {
        keyword = e.target.value
    };
    const getAuthorizationHeader = () =>{
        let AppID = env.APP_ID;
        let AppKey = env.APP_KEY;
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
    }

    return (
        <>
        {
            (props.isVisible || blockVisible) &&
        <Search>
            <CityContainer>
                <MultiSelect onClick={()=>handCityVisible(!cityVisible)} data-before={city?null:'???????????????'}>
                   <CitySelect>{transformName}</CitySelect> 
                    <Arrow src={arrow} onClick={()=>handCityVisible(!cityVisible)}/>
                </MultiSelect>
                {
                    cityVisible && 
                    <CityBlock>
                        {cityList.map((item, i) => (
                            <CityItem key={item.id} onClick={()=>handleCitySelect(item.code)}>{item.name}</CityItem>
                        ))}
                    </CityBlock>
                }            
            </CityContainer>
            <KeywordSelect>
                <KeywordInput onChange={handleChange}/>
                <SearchImg src={search} onClick={()=>handleKeywordSelect(keyword)}/>
            </KeywordSelect>            
            <div>
                ????????????
                <TopicBlock>
                   { 
                   Array.from(Array(8),(event,index) =>{
                     return (
                     <TopicItem  key={topicContentList[index].name}>
                        <img src={`${process.env.PUBLIC_URL}/images/${topicImgName}${index}.png`} alt={`${topicImgName}${index}`}/>
                        <div>{topicContentList[index].name}</div>
                     </TopicItem>
                     )})                
                   }                   
                </TopicBlock>
                <SearchBtnBlock>
                   <SearchBtn onClick={() =>handleBlockVisible(!props.isVisible)}>????????????</SearchBtn>
                </SearchBtnBlock>
            </div>
        </Search>
        }
        </>
    )

}
export default SearchBlock;