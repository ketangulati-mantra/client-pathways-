import React, { useState } from 'react';
import { AssessmentQuestionCard } from './AssessmentQuestionCard';
import { AssessmentReport } from './AssessmentReport';
import { calculateScores } from '../../utils/assessmentEngine';

export function AssessmentWizard({ schema, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [report, setReport] = useState(null);

  const totalQuestions = schema.questions.length;
  const isReportStep = currentStep === totalQuestions;

  const handleSelect = (value) => {
    const currentQ = schema.questions[currentStep];
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(prev => prev + 1);
    } else if (currentStep === totalQuestions - 1) {
      const results = calculateScores(schema, answers);
      setReport(results);
      setCurrentStep(totalQuestions); 
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleFinish = () => {
    window.open('https://web.mantracare.com/plans/therapy', '_blank');
    if (onComplete) {
      onComplete();
    }
  };

  if (isReportStep && report) {
    // Report allows normal scrolling
    return (
      <div style={{ overflowY: 'auto', flex: 1, padding: '24px 16px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', background: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
          <AssessmentReport report={report} onComplete={handleFinish} />
        </div>
      </div>
    );
  }

  const currentQ = schema.questions[currentStep];
  const progressPercentage = ((currentStep + 1) / totalQuestions) * 100;

  return (
    <AssessmentQuestionCard
      key={currentQ.id} // forces animation on step change
      question={currentQ}
      currentValue={answers[currentQ.id]}
      onSelect={handleSelect}
      onNext={handleNext}
      onPrev={handlePrev}
      isFirst={currentStep === 0}
      isLast={currentStep === totalQuestions - 1}
      progressPercentage={progressPercentage}
    />
  );
}
