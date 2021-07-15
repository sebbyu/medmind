import './DiagComponent.scss';

const DiagComponent = (props) => {
  return (
    <div className="diagcomponent">
      <div className="diagcomponent container">
        <div className="container image">
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
}


export default DiagComponent;