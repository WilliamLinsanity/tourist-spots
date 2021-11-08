import './App.scss';

function App() {
  fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot').then(res=>res.json()).then(res=>{
    console.log(res);
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src='../images/hamburger.png' className="hamburger" alt="hamburger" onClick={this.handleVisible} />
        <img src='../images/logo.png' alt="logo"/>
      </header>
    </div>
  );
}

export default App;
