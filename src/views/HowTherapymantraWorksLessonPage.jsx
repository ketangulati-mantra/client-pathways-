import React from 'react';
import {
  Header,
  VideoSection,
  Button,
  CompletionScreen,
  useToast
} from '../components';
import { useLessonCompletion } from '../hooks/useLessonCompletion';
import { CheckCircle2 } from 'lucide-react';

// Lesson constants
const LESSON_ID = 'how-therapymantra-works';
const LESSON_TITLE = 'How TherapyMantra Works?';
const REWARD_POINTS = 50;

const VIDEO = {
  title: 'How TherapyMantra Works',
  duration: '4 min',
  posterUrl: 'https://img.youtube.com/vi/oEI40KlZtIw/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/embed/oEI40KlZtIw?si=I2eSRruxoplWrn5y'
};

export default function HowTherapymantraWorksLessonPage({ onBack }) {
  const {
    videoWatched,
    actionDone,
    lessonProgress,
    showCelebrate,
    handleVideoComplete,
    handleActionComplete,
    handleCloseCelebration
  } = useLessonCompletion(LESSON_ID, onBack, { hasVideo: true, hasAction: true, hasQuiz: false });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-app)' }} className="animate-fade-in">
      <Header title={LESSON_TITLE} onBack={onBack} progress={lessonProgress} points={REWARD_POINTS} />

      <main className="academy-main-container" style={{
        flex: 1, padding: '40px 24px 80px', maxWidth: '800px', margin: '0 auto', width: '100%',
        display: 'flex', flexDirection: 'column', gap: '32px'
      }}>

        {/* Lesson Information */}
        <section>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, margin: '0 0 16px', color: '#0f172a' }}>
            {LESSON_TITLE}
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
            Learn the essentials of how the TherapyMantra platform operates, from your initial sign-up and matching process to conducting sessions and utilizing built-in tools for your mental health journey.
          </p>
        </section>

        {/* Key Takeaways */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', margin: 0 }}>
            Key Takeaways
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ fontSize: '1.2rem' }}>🎯</span>
              <div>
                <strong style={{ display: 'block', color: '#0f172a', marginBottom: '4px' }}>Personalized Matching</strong>
                <span style={{ fontSize: '0.9rem', color: '#475569' }}>Fill out a quick questionnaire to be paired with a licensed professional suited to your needs.</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ fontSize: '1.2rem' }}>💻</span>
              <div>
                <strong style={{ display: 'block', color: '#0f172a', marginBottom: '4px' }}>Flexible Sessions</strong>
                <span style={{ fontSize: '0.9rem', color: '#475569' }}>Communicate via video, audio, or text from the comfort of your own home securely.</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ fontSize: '1.2rem' }}>🛠️</span>
              <div>
                <strong style={{ display: 'block', color: '#0f172a', marginBottom: '4px' }}>Journey Tools</strong>
                <span style={{ fontSize: '0.9rem', color: '#475569' }}>Utilize in-app features like journaling, goal setting, and worksheets to stay on track.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section>
          <VideoSection
            title={VIDEO.title}
            duration={VIDEO.duration}
            posterUrl={VIDEO.posterUrl}
            videoUrl={VIDEO.videoUrl}
            onCompleted={handleVideoComplete}
            isCompleted={videoWatched}
          />
        </section>

        {/* Completion Section */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="primary" disabled={!videoWatched} onClick={handleActionComplete} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '1rem', cursor: 'pointer', borderRadius: '8px', border: 'none', background: videoWatched ? 'var(--color-primary)' : '#cbd5e1', color: 'white' }}>
              <CheckCircle2 size={18} />
              <span>Mark as Completed</span>
            </Button>
          </div>
        </section>

      </main>

      {showCelebrate && (
        <CompletionScreen points={REWARD_POINTS} onClose={handleCloseCelebration} />
      )}
    </div>
  );
}
