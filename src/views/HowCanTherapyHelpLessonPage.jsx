import React from 'react';
import {
  Header,
  Button,
  CompletionScreen,
} from '../components';
import { useLessonCompletion } from '../hooks/useLessonCompletion';
import { CheckCircle2 } from 'lucide-react';

// Lesson constants
const LESSON_ID = 'how-can-therapy-help';
const LESSON_TITLE = 'How Can Therapy Help?';
const REWARD_POINTS = 50;

export default function HowCanTherapyHelpLessonPage({ onBack }) {
  const {
    actionDone,
    lessonProgress,
    showCelebrate,
    handleActionComplete,
    handleCloseCelebration
  } = useLessonCompletion(LESSON_ID, onBack, {
    hasVideo: false,
    hasAction: true,
    hasQuiz: false,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-app)' }} className="animate-fade-in">
      <Header title={LESSON_TITLE} onBack={onBack} progress={lessonProgress} points={REWARD_POINTS} />

      <main className="academy-main-container" style={{
        flex: 1, padding: '40px 24px 80px', maxWidth: '800px', margin: '0 auto', width: '100%',
        display: 'flex', flexDirection: 'column', gap: '40px'
      }}>

        {/* Hero Section */}
        <section style={{ textAlign: 'center', background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)', padding: '40px 24px', borderRadius: '16px', border: '1px solid #dbeafe' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, margin: '0 0 16px', color: '#1e40af' }}>
            Transform Your Life with Therapy
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#334155', lineHeight: '1.6', margin: '0 auto', maxWidth: '600px' }}>
            Therapy is not just talking—it is a structured, evidence-based process designed to help you understand your emotions, overcome challenges, and create lasting positive change.
          </p>
        </section>

        {/* What Therapy Can Help With (Icon Grid) */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, margin: '0 0 20px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🌱</span> What Therapy Can Help With
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            
            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span style={{ fontSize: '2rem', marginBottom: '12px' }}>🧠</span>
              <strong style={{ color: '#0f172a', fontSize: '1.1rem' }}>Understand Emotions</strong>
              <p style={{ margin: '8px 0 0', color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>Gain clarity on why you feel the way you do.</p>
            </div>

            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span style={{ fontSize: '2rem', marginBottom: '12px' }}>🧘</span>
              <strong style={{ color: '#0f172a', fontSize: '1.1rem' }}>Manage Stress</strong>
              <p style={{ margin: '8px 0 0', color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>Develop healthier coping strategies for daily life.</p>
            </div>

            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span style={{ fontSize: '2rem', marginBottom: '12px' }}>🛑</span>
              <strong style={{ color: '#0f172a', fontSize: '1.1rem' }}>Break Negative Patterns</strong>
              <p style={{ margin: '8px 0 0', color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>Identify and disrupt unhelpful thinking cycles.</p>
            </div>

            <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span style={{ fontSize: '2rem', marginBottom: '12px' }}>💪</span>
              <strong style={{ color: '#0f172a', fontSize: '1.1rem' }}>Build Confidence</strong>
              <p style={{ margin: '8px 0 0', color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>Feel more resilient and in control of your life.</p>
            </div>

          </div>
        </section>

        {/* Evidence-Based Approaches */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, margin: '0 0 16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🔬</span> Evidence-Based Approaches
          </h2>
          <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', margin: '0 0 16px' }}>
              Therapy is rooted in science. Our therapists utilize proven methodologies to support your journey, ensuring you receive the highest quality of care:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                <strong style={{ color: '#0f172a', fontSize: '1.1rem', display: 'block', marginBottom: '4px' }}>CBT (Cognitive Behavioural Therapy)</strong>
                <span style={{ color: '#475569', fontSize: '0.95rem' }}>Helps you identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions.</span>
              </div>
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
                <strong style={{ color: '#0f172a', fontSize: '1.1rem', display: 'block', marginBottom: '4px' }}>DBT (Dialectical Behaviour Therapy)</strong>
                <span style={{ color: '#475569', fontSize: '0.95rem' }}>Focuses on teaching you how to live in the moment, develop healthy ways to cope with stress, regulate your emotions, and improve your relationships with others.</span>
              </div>
            </div>
          </div>
        </section>

        {/* How TherapyMantra Supports You */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, margin: '0 0 20px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🤝</span> How TherapyMantra Supports You
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📅</div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: '#0f172a', marginBottom: '4px' }}>Regular Check-ins</strong>
                <span style={{ color: '#64748b', fontSize: '0.95rem' }}>Consistent sessions to track your progress and adjust your roadmap as needed.</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📝</div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: '#0f172a', marginBottom: '4px' }}>Practical Exercises</strong>
                <span style={{ color: '#64748b', fontSize: '0.95rem' }}>Tools and worksheets provided to help you practice coping strategies between sessions.</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🗺️</div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: '#0f172a', marginBottom: '4px' }}>Personalized Action Plans</strong>
                <span style={{ color: '#64748b', fontSize: '0.95rem' }}>A unique approach tailored specifically to your goals, history, and current needs.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Affordability & Accessibility */}
        <section style={{ background: '#f0fdf4', padding: '32px 24px', borderRadius: '16px', border: '1px solid #bbf7d0', textAlign: 'center' }}>
          <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '16px' }}>🌍</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, margin: '0 0 12px', color: '#166534' }}>
            Accessible to Everyone
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#15803d', lineHeight: '1.6', margin: '0 auto', maxWidth: '600px' }}>
            TherapyMantra is on a mission to make mental healthcare affordable. We offer various accessible tiers, including options to work with psychology trainees at significantly lower costs, ensuring everyone can get the help they need. Starting early is the best way to proactively build your emotional resilience!
          </p>
        </section>

        {/* Key Takeaways */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, margin: '0', color: '#0f172a' }}>
            Key Takeaways
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.2rem' }}>✔️</span>
              <span style={{ fontSize: '1.05rem', color: '#334155' }}><strong>Proactive:</strong> Starting early equips you with essential coping tools before crises occur.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.2rem' }}>✔️</span>
              <span style={{ fontSize: '1.05rem', color: '#334155' }}><strong>Structured:</strong> It's more than talking—it's a guided process using CBT and DBT.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.2rem' }}>✔️</span>
              <span style={{ fontSize: '1.05rem', color: '#334155' }}><strong>Empowering:</strong> Learn to regulate emotions and feel in control of your life.</span>
            </div>
          </div>
        </section>

        {/* Completion Section */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="primary" onClick={handleActionComplete} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '1rem', cursor: 'pointer', borderRadius: '8px', border: 'none', background: 'var(--color-primary)', color: 'white' }}>
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
