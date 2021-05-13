import './App.css';
import Links from "./components/Links/Links";
import Routers from "./components/Routers/Routers";

const App = () => {
  return (
    <div className="App">
        <div className="menu">
            <Links/>
        </div>
        <div className="content">
            <Routers/>
        </div>
    </div>
  );
}

export default App;
