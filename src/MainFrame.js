import styled from "@emotion/styled";
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
`

const Card = styled.div`
width:254px;
height:235px;
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

const CarouselArrowRight = styled.div`
width:10px;
height:10px;
background-color: #ffffff;
border-radius: 50%;
    &:before{
        content:'>';
    }
`

const CarouselArrowLeft = styled.div`
width:10px;
height:10px;
background-color: #ffffff;
border-radius: 50%;
    &:before{
        content:'<';
    }
`


const Attractions = styled.div`

`
const Spots = styled.div`

`

const MainFrame = () =>{
    const list = [
        {
            "ID": "C1_379000000A_000001",
            "Name": "大稻埕碼頭_大稻埕碼頭貨櫃市集",
            "DescriptionDetail": "大稻埕原是平埔族的居住地，因萬華（艋舺）同安人發生激烈的械鬥，造成族人移至大稻埕定居，開始大稻埕淡水河旁商店和房屋的興建，淡水港開放後，大稻埕在劉銘傳的治理下成為臺北城最繁華的物資集散中心，當中以茶葉、布料為主要貿易交易，當時的延平北路及貴德街一帶便是商業活動的重心，也讓大稻埕早年的歷史多采多姿、令人回味。",
            "Phone": "886-2-27208889",
            "ZipCode": "103",
            "OpenTime": "平常日以團體預約包船為主，例假日行駛固定航次，請洽詢各船公司。強烈季風、漲退潮水位差影響航行及靠泊安全，當日實際航班得由現場公告或網站預告調整。",
            "Picture": {
              "PictureUrl1": "https://www.travel.taipei/image/182690",
              "PictureDescription1": "大稻埕碼頭_大稻埕碼頭貨櫃市集"
            },
            "Class1": "遊憩類",
            "Level": "非古蹟",
            "WebsiteUrl": "https://www.riverfun.net/wharf",
            "ParkingPosition": {},
            "City": "臺北市",
            "SrcUpdateTime": "2021-11-11T01:11:52+08:00",
            "UpdateTime": "2021-11-11T02:10:14+08:00"
          },
          {
            "ID": "C1_379000000A_000002",
            "Name": "關渡碼頭",
            "DescriptionDetail": "關渡原名甘豆門，因背倚觀音山和大屯山，面向淡水河，成為一處地勢險要的港口，早年先民由關渡碼頭進入移居臺灣北部開墾，因此關渡的開發甚早，後因兩河(基隆河、淡水河)河口泥沙淤積，水運才逐漸沒落。關渡碼頭位於關渡自然公園及關渡宮旁，每當假日或夜晚均可見遊客駐足關渡碼頭週邊散步休息，亦有許多單車族由八里經關渡大橋前來，或由淡水前來，沿途風光明媚，是一處極佳的賞景地點。",
            "Phone": "886-2-27208889",
            "ZipCode": "112",
            "OpenTime": "開放空間",
            "Picture": {
              "PictureUrl1": "https://www.travel.taipei/image/63313",
              "PictureDescription1": "關渡碼頭"
            },
            "Class1": "遊憩類",
            "Level": "非古蹟",
            "WebsiteUrl": "https://www.riverfun.net/wharf",
            "ParkingPosition": {},
            "City": "臺北市",
            "SrcUpdateTime": "2021-11-11T01:11:52+08:00",
            "UpdateTime": "2021-11-11T02:10:14+08:00"
          },
          {
            "ID": "C1_379000000A_000002",
            "Name": "關渡碼頭",
            "DescriptionDetail": "關渡原名甘豆門，因背倚觀音山和大屯山，面向淡水河，成為一處地勢險要的港口，早年先民由關渡碼頭進入移居臺灣北部開墾，因此關渡的開發甚早，後因兩河(基隆河、淡水河)河口泥沙淤積，水運才逐漸沒落。關渡碼頭位於關渡自然公園及關渡宮旁，每當假日或夜晚均可見遊客駐足關渡碼頭週邊散步休息，亦有許多單車族由八里經關渡大橋前來，或由淡水前來，沿途風光明媚，是一處極佳的賞景地點。",
            "Phone": "886-2-27208889",
            "ZipCode": "112",
            "OpenTime": "開放空間",
            "Picture": {
              "PictureUrl1": "https://www.travel.taipei/image/63313",
              "PictureDescription1": "關渡碼頭"
            },
            "Class1": "遊憩類",
            "Level": "非古蹟",
            "WebsiteUrl": "https://www.riverfun.net/wharf",
            "ParkingPosition": {},
            "City": "臺北市",
            "SrcUpdateTime": "2021-11-11T01:11:52+08:00",
            "UpdateTime": "2021-11-11T02:10:14+08:00"
          },
          {
            "ID": "C1_379000000A_000002",
            "Name": "關渡碼頭",
            "DescriptionDetail": "關渡原名甘豆門，因背倚觀音山和大屯山，面向淡水河，成為一處地勢險要的港口，早年先民由關渡碼頭進入移居臺灣北部開墾，因此關渡的開發甚早，後因兩河(基隆河、淡水河)河口泥沙淤積，水運才逐漸沒落。關渡碼頭位於關渡自然公園及關渡宮旁，每當假日或夜晚均可見遊客駐足關渡碼頭週邊散步休息，亦有許多單車族由八里經關渡大橋前來，或由淡水前來，沿途風光明媚，是一處極佳的賞景地點。",
            "Phone": "886-2-27208889",
            "ZipCode": "112",
            "OpenTime": "開放空間",
            "Picture": {
              "PictureUrl1": "https://www.travel.taipei/image/63313",
              "PictureDescription1": "關渡碼頭"
            },
            "Class1": "遊憩類",
            "Level": "非古蹟",
            "WebsiteUrl": "https://www.riverfun.net/wharf",
            "ParkingPosition": {},
            "City": "臺北市",
            "SrcUpdateTime": "2021-11-11T01:11:52+08:00",
            "UpdateTime": "2021-11-11T02:10:14+08:00"
          },
    ]
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
                <Attractions>
                    <div>熱門景點</div>
                    <CardList>
                    <CarouselArrowLeft></CarouselArrowLeft>
                        {list.map((item, i) => (
                            <Card key={item.ID}>
                                <CardPhoto src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1}/>
                                <CardTitle>{item.Name}</CardTitle>
                                <CardContent>
                                    <CardPosition src={`../images/cardLocation.png`} alt="location"/>
                                    {item.City}
                                </CardContent>
                            </Card>
                        ))}      
                        <CarouselArrowRight></CarouselArrowRight>                               
                    </CardList>
                </Attractions>
            </FrameContainer>
        </Container>
    )
}
export default MainFrame;