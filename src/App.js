import { useState } from 'react';
import ResultPage from './components/ResultPage/ResultPage';
import StepTwo from './components/StepTwo/StepTwo';
import StepOne from './components/StepOne/StepOne';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    client: '',
    contractor: '',
    maxX: '',
    minX: '',
    maxY: '',
    minY: '',
    maxZ: '',
    minZ: '',
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const submitForm = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="app">
      {currentStep === 1 && (
        <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )}
      {currentStep === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      )}
      {currentStep === 3 && <ResultPage formData={formData} />}
    </div>
  );
};

export default App;