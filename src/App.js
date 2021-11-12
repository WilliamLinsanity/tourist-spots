import './App.scss';
import Header from './Header'
import MainFrame from './MainFrame';
function App() {
  // fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot').then(res=>res.json()).then(res=>{
  //   console.log(res);
  // })
  return (
    <div className="App">
     <Header/>
     <MainFrame/>
    </div>
  );
}

export default App;