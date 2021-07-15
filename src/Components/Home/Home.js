import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home top">
        <h1 id="title">OUR APPLICATIONS</h1>
        <div className="home list">
          <ul id="list">
            <li id="element">DIAGNOSTIC IMAGING</li>
            <li id="element">CDSS SYSTEM</li>
            <li id="element">DEEP GENOMICS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;