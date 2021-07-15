import './DiagImage.scss';
import DiagComponent from './DiagComponent/DiagComponent';

const DiagImage = () => {
  return (
    <div className="DiagImage">
      <div className="DiagImage container">
        <div className="container pneumonia">
          <DiagComponent />
        </div>
        <div className="container dementia">
        
        </div>
        <div className="container component">
        
        </div>
      </div>
    </div>
  )
}

export default DiagImage;