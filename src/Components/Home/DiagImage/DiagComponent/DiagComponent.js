import './DiagComponent.scss';

const DiagComponent = (props) => {

  if (props.position === 'left') {
    return (
      <div className="diagcomponent">
        <div className="container">
          <div className="image">
            <img id="image" src={props.side_image} alt="404" />
          </div>
          <div className="explanation">
            <h2>{props.title}</h2>
            <hr />
            <p>
              {props.explanation[0]}
            </p>
            <p>
              {props.explanation[1]}
            </p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="diagcomponent">
        <div className="container">
          <div className="explanation"
            style={{position: "relative", left: "30%"}}>
            <h2>{props.title}</h2>
            <hr style={{left: '15%'}}/>
            <p>
              {props.explanation[0]}
            </p>
            <p>
              {props.explanation[1]}
            </p>
          </div>
          <div className="image">
            <img id="image" src={props.side_image} alt="404" 
              style={{position: 'relative', left: '-15%'}}/>
          </div>
        </div>
      </div>
    )
  }
}


export default DiagComponent;