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
        <span className="title">
          While the site is under construction, please visit my
          <a href="https://gitlab.com/sebbyu/Chest_X-ray_Pneumonia_Classification">&nbsp;gitlab&nbsp;</a> for pneumonia classification.
        </span>
      </div>
      <div className="main">
        <Home />
      </div>
    </div>
  );
}

export default App;
