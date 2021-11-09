import styled from "@emotion/styled";
import React, { useState } from "react";
const CitySelect = styled.div`
padding: 0 16px;
margin:8px 0;
`
const MultiSelect = styled.div`
height: 43px;
border-radius:8px;
background: #FAFAFA;
border: 1px solid rgba(0, 0, 0, 0.08);
position:relative;
&:before{
    content:'選擇目的地';
    position:absolute;
    top:50%;
    left: 12px;
    transform: translate(0, -50%);
    color: rgba(0, 0, 0, 0.38);
}
`;
const Arrow =styled.img`
position:absolute;
top:50%;
right:12px;
transform: translate(0, -50%);
`
const CityBlock = styled.div`
background-color:#ffffff;
height: calc(100vh/3);
display: flex;
justify-content:center;
`

const CityItem = styled.div`
box-sizing: border-box;
margin:12px;
border: 1px solid #3FB195;
border-radius: 8px;
padding: 6px 26px;
height: 40px;
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
        content:url('../images/search.png');
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translate(0, -50%);
    }
`
const Search = styled.img`
position:absolute;
top:50%;
right: 28px;
transform: translate(0, -50%);
`
const SearchBlock = ()=>{
    const cityList =[
        {id:1,name:'新北市'},
        {id:2,name:'台北市'}
    ]
    const [cityVisible,handleCitySelect] = useState(false)
    let [keyword,handleKeywordSelect] = useState('')
    const handleChange = (e) => {
        keyword = e.target.value
      };
           
    return (
        <>
            <CitySelect>
                <MultiSelect>
                    <Arrow src='../images/arrow.png' onClick={()=>handleCitySelect(!cityVisible)}/>
                </MultiSelect>
                {
                    cityVisible && 
                    <CityBlock>
                        {cityList.map((item, i) => (
                            <CityItem key={item.id}>{item.name}</CityItem>
                        ))}
                    </CityBlock>
                }            
            </CitySelect>
            {
                !cityVisible && <KeywordSelect>
                <KeywordInput  onChange={handleChange}/>
                <Search src='../images/search.png' onClick={()=>handleKeywordSelect(keyword)}/>
            </KeywordSelect>
            }            
        </>
    )

}
export default SearchBlock;