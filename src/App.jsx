import React, { useState, useEffect } from 'react';
import ClientDashboard from './views/ClientDashboard';
import LessonTemplate from './views/LessonTemplate';

import UnderstandDepressionLessonPage from './views/UnderstandDepressionLessonPage';
import SelfCheckLowMoodLessonPage from './views/SelfCheckLowMoodLessonPage';
import EmotionalWellbeingAssessmentPage from './views/EmotionalWellbeingAssessmentPage';
import HowCanTherapyHelpLessonPage from './views/HowCanTherapyHelpLessonPage';
import BookJoinSessionLessonPage from './views/BookJoinSessionLessonPage';
import HowTherapymantraWorksLessonPage from './views/HowTherapymantraWorksLessonPage';
import CreateWellbeingPlanLessonPage from './views/CreateWellbeingPlanLessonPage';
import EarnWhileYouImproveLessonPage from './views/EarnWhileYouImproveLessonPage';

import {
  BookOpen,
  Award,
  Smartphone,
  ShieldCheck,
  Trophy
} from 'lucide-react';
import './App.css';
import { activities } from './mantra/activities';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Custom router state listener
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate sorted dashboard tasks from the single source of truth
  const dashboardTasks = [...activities]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(activity => ({
      id: activity.lessonId,
      title: activity.title,
      path: activity.route,
      duration: activity.estimatedDuration,
      points: activity.rewardPoints,
      category: 'Lesson', // All client activities are lessons/assessments
      pathway: activity.pathway || 'General Health'
    }));

  // Render view based on route path
  const renderView = () => {
    if (currentPath === '/') {
      return (
        <ClientDashboard
          tasks={dashboardTasks}
          onNavigate={navigate}
        />
      );
    }

    if (currentPath === '/self-check-low-mood') {
      return <SelfCheckLowMoodLessonPage onBack={() => navigate('/')} />;
    }

    if (currentPath === '/understand-depression') {
      return <UnderstandDepressionLessonPage onBack={() => navigate('/')} />;
    }

    if (currentPath === '/book-join-session') {
      return <BookJoinSessionLessonPage onBack={() => navigate('/')} />;
    }

    if (currentPath === '/how-therapymantra-works') {
      return <HowTherapymantraWorksLessonPage onBack={() => navigate('/')} />;
    }

    if (currentPath === '/create-your-personalized-wellbeing-plan') {
      return <CreateWellbeingPlanLessonPage onBack={() => navigate('/')} />;
    }

    if (currentPath === '/emotional-wellbeing-assessment') {
      return <EmotionalWellbeingAssessmentPage onBack={() => navigate('/')} />;
    }

    if (currentPath === '/how-can-therapy-help') {
      return <HowCanTherapyHelpLessonPage onBack={() => navigate('/')} />;
    }

    if (currentPath === '/earn-while-you-improve-your-wellbeing') {
      return <EarnWhileYouImproveLessonPage onBack={() => navigate('/')} />;
    }

    if (currentPath !== '/') {
      const activeLesson = activities.find(t => t.route === currentPath);
      if (activeLesson) {
        return <LessonTemplate lesson={activeLesson} onBack={() => navigate('/')} />;
      }
    }

    // Default Fallback
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'var(--bg-app)' }}>
        <p>Page not found</p>
        <button onClick={() => navigate('/')} style={{ marginLeft: '10px', padding: '8px 16px', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Go Home</button>
      </div>
    );
  };

  return (
    <div className="academy-layout">
      <ErrorBoundary>
        {renderView()}
      </ErrorBoundary>
    </div>
  );
}

export default App;
