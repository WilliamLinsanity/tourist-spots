import './App.scss';
import Header from './Header'
function App() {
  // fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot').then(res=>res.json()).then(res=>{
  //   console.log(res);
  // })
  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;