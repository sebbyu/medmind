import './App.scss';
import Navbar from './Components/Navbar/Navbar.js'
import Home from './Components/Home/Home.js'

function App() {
  return (
    <div className="app">
      <div className="frame">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Home />
        </div>
        <div>

        </div>
      </div>

    </div>
  );
}

export default App;
