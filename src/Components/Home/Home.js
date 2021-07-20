import './Home.scss';
import DiagImage from './DiagImage/DiagImage';

const Home = () => {
  return (
    <div className="home-main">
      <div className="home-main--top">
        <h1 id="title">OUR APPLICATIONS</h1>
        <div className="home-main--top-list">
          <ul id="list">
            <li id="element">DIAGNOSTIC IMAGING</li>
            <li id="element">CDSS SYSTEM</li>
            <li id="element">DEEP GENOMICS</li>
          </ul>
        </div>
      </div>
      <div className="home-main--bottom">
        <DiagImage />
      </div>
    </div>
  );
}

export default Home;