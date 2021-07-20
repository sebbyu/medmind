import './DiagImage.scss';
import DiagComponent from './DiagComponent/DiagComponent';
import lung_image from './../../../assets/lung_image.png';
import brain_image from './../../../assets/brain_image.png';

const DiagImage = () => {
  const paras = {
    "lung": [
      "It is able to detect pneumonia on CT scans in seconds " +
      "and has a triage function for early intervention.",
      "It can also differentiate pneumonia from virus, facilitating " +
      "automated disease progression evaluation for fast and easy " +
      "management."
    ],
    "brain": [
      "Our AI application for the brain integrates deep learning technology " +
      "with vast clinical knowledge to assist in the diagnosis of dementia " +
      "on MRI and CT scans.",
      "A wide range of conditions that can be detected and analyzed incude" +
      "concussion, stroke, and dementia."
    ]
  }
  return (
    <div className="diagimage-main">
      <div className="diagimage-main-container">
        <div className="diagimage-main-container--pneumonia">
          <DiagComponent 
            side_image={lung_image}
            title="AI for Pneumonia"
            explanation={paras.lung}
            position="left"
          />
        </div>
        <div className="diagimage-main-container--dementia">
          <DiagComponent
            side_image={brain_image}
            title="AI for Dementia"
            explanation={paras.brain}
            position="right"
          />
        </div>
      </div>
    </div>
  )
}

export default DiagImage;