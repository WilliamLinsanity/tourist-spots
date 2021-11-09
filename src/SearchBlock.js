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
const SearchBlock = ()=>{
    const cityList =[
        {id:1,name:'新北市'},
        {id:2,name:'台北市'}
    ]
    const topicImgName = 'topic'
    const topicContentList =[
        {id:0,name:'歷史文化'},
        {id:1,name:'戶外踏青'},
        {id:2,name:'宗教巡禮'},
        {id:3,name:'親子活動'},
        {id:4,name:'風景區'},
        {id:5,name:'美食品嘗'},
        {id:6,name:'住宿推薦'},
        {id:7,name:'觀光活動'},
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
            <div>
                精選主題
                <TopicBlock>
                   { 
                   Array.from(Array(8),(event,index) =>{
                     return (<img src={`../images/${topicImgName}${index}.png`} alt={`${topicImgName}${index}`}/>)
                   })                
                   }
                </TopicBlock>
            </div>
        </>
    )

}
export default SearchBlock;