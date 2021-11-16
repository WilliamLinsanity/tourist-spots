import './App.scss';
import Header from './Header'
import MainFrame from './MainFrame';
// import Detail from './Detail';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reduce from "./components/redux/reduce";
import { HashRouter } from "react-router-dom";

const store = createStore(reduce);

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
        {/* <Route path="/detail" component={Detail}/> */}
          <Header />
          <MainFrame/>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;