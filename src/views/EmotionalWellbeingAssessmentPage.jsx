import React from 'react';
import { Header, CompletionScreen } from '../components';
import { useLessonCompletion } from '../hooks/useLessonCompletion';
import { AssessmentWizard } from '../components/assessment/AssessmentWizard';
import { dass21Schema } from '../utils/dass21Schema';

const LESSON_ID = 'emotional-wellbeing-assessment';
const REWARD_POINTS = 100;

export default function EmotionalWellbeingAssessmentPage({ onBack }) {
  const {
    lessonProgress,
    showCelebrate,
    handleActionComplete,
    handleCloseCelebration
  } = useLessonCompletion(LESSON_ID, onBack, {
    hasVideo: false,
    hasAction: true,
    hasQuiz: false
  });

  // Notice the 100dvh and overflow: hidden on the parent to completely prevent page scrolling.
  // The header stays fixed at the top, and the wizard fills the remaining space.
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', overflow: 'hidden', background: 'var(--bg-app)' }}>
      <Header title={dass21Schema.title} onBack={onBack} progress={lessonProgress} points={REWARD_POINTS} />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        <AssessmentWizard 
          schema={dass21Schema} 
          onComplete={handleActionComplete} 
        />
      </main>

      {showCelebrate && (
        <CompletionScreen points={REWARD_POINTS} onClose={handleCloseCelebration} />
      )}
    </div>
  );
}
