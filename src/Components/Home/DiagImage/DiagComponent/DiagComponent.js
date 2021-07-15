import './DiagComponent.scss';
import lung_image from './../../../../assets/lung_image.png';

const DiagComponent = () => {
  return (
    <div className="diagcomponent">
      <div className="diagcomponent container">
        <div className="container image">
          <img id="image" src={lung_image} alt="lung" />
        </div>
        <div className="explanation">
          <h2>AI for Pneumonia</h2>
          <p>
            It is able to detect pneumonia on CT scans in seconds
           and has a triage function for early intervention.
          </p>
          <p>
            It can also differentiate pneumonia from virus, facilitating
            automated disease progression evaluation for fast and easy
            management.
          </p>
        </div>
      </div>
    </div>
  )
}


export default DiagComponent;