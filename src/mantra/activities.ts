/**
 * Registered Lesson Activities Config
 * Single source of truth for all lesson pathways, point systems, routes, and identifiers.
 */
export interface Activity {
  lessonId: string;
  activityId: string;
  title: string;
  rewardPoints: number;
  estimatedDuration: string;
  route: string;
  completionEndpoint?: string;
  redirectAfterCompletion?: boolean;
  pathway?: string;
}

export const activities: Activity[] = [
  {
    lessonId: 'self-check-low-mood',
    activityId: '',
    pathway: 'Depression',
    title: 'A Self-Check for Low Mood',
    rewardPoints: 100,
    estimatedDuration: '5-7 min',
    route: '/self-check-low-mood'
  },
  {
    lessonId: 'understand-depression',
    activityId: '',
    pathway: 'Depression',
    title: 'Understand What is Depression?',
    rewardPoints: 50,
    estimatedDuration: '4 min',
    route: '/understand-depression'
  },
  {
    lessonId: 'book-join-session',
    activityId: '', // Filled in during backend integration
    pathway: 'Foundational Therapy',
    title: 'How to Book & Join a Session',
    rewardPoints: 10,
    estimatedDuration: '4 min',
    route: '/book-join-session'
  },
  {
    lessonId: 'how-therapymantra-works',
    activityId: '',
    pathway: 'Foundational Therapy',
    title: 'How TherapyMantra Works?',
    rewardPoints: 50,
    estimatedDuration: '4 min',
    route: '/how-therapymantra-works'
  },
  {
    lessonId: 'create-your-personalized-wellbeing-plan',
    activityId: '',
    pathway: 'Foundational Therapy',
    title: 'Create Your Personalized Wellbeing Plan',
    rewardPoints: 50,
    estimatedDuration: '3 min',
    route: '/create-your-personalized-wellbeing-plan'
  },
  {
    lessonId: 'how-can-therapy-help',
    activityId: '',
    pathway: 'Foundational Therapy',
    title: 'How Can Therapy Help?',
    rewardPoints: 10,
    estimatedDuration: '3 min',
    route: '/how-can-therapy-help'
  },
  {
    lessonId: 'emotional-wellbeing-assessment',
    activityId: '',
    pathway: 'Foundational Therapy',
    title: 'Emotional Well-Being Assessment',
    rewardPoints: 10,
    estimatedDuration: '5-7 min',
    route: '/emotional-wellbeing-assessment'
  },
  {
    lessonId: 'earn-while-you-improve-your-wellbeing',
    activityId: '',
    pathway: 'Foundational Therapy',
    title: 'Earn While You Improve Your Wellbeing',
    rewardPoints: 50,
    estimatedDuration: '2 min',
    route: '/earn-while-you-improve-your-wellbeing'
  }
];
