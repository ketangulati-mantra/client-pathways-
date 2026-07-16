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
    estimatedDuration: '5–7 min',
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
    estimatedDuration: '5–7 min',
    route: '/emotional-wellbeing-assessment'
  },
  {
    lessonId: 'premium-provider',
    activityId: '',
    pathway: 'Therapy',
    title: 'What is a Premium Provider?',
    rewardPoints: 15,
    estimatedDuration: '5 min',
    route: '/premium-provider'
  },
  {
    lessonId: 'market-yourself',
    activityId: '',
    pathway: 'Therapy',
    title: 'Market Yourself & Grow Faster',
    rewardPoints: 5,
    estimatedDuration: '5 min',
    route: '/market-yourself'
  },
  {
    lessonId: 'share-linkedin',
    activityId: '',
    pathway: 'Therapy',
    title: 'Share on LinkedIn & Earn Points',
    rewardPoints: 5,
    estimatedDuration: '5 min',
    route: '/share-linkedin'
  },
  {
    lessonId: 'show-achievements',
    activityId: '',
    pathway: 'Therapy',
    title: 'Show Your Achievements & Earn Rewards!',
    rewardPoints: 5,
    estimatedDuration: '5 min',
    route: '/show-achievements'
  },
  {
    lessonId: 'getting-paid',
    activityId: '',
    pathway: 'Therapy',
    title: 'Getting Paid on MantraCare',
    rewardPoints: 5,
    estimatedDuration: '4 min',
    route: '/getting-paid'
  },
  {
    lessonId: 'intern-program',
    activityId: '',
    pathway: 'Therapy',
    title: 'Mantra Foundation Therapy Intern Program',
    rewardPoints: 5,
    estimatedDuration: '3 min',
    route: '/intern-program'
  },
  {
    lessonId: 'therapy-notes',
    activityId: '',
    pathway: 'Therapy',
    title: 'Therapy Notes',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/therapy-notes'
  },
  {
    lessonId: 'couple-therapy',
    activityId: '',
    pathway: 'Therapy',
    title: 'Couple Therapy on the Mantra App',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/couple-therapy'
  },
  {
    lessonId: 'creating-pathway',
    activityId: '',
    pathway: 'Therapy',
    title: 'Creating a Pathway for Your Client',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/creating-pathway'
  },
  {
    lessonId: 'canned-responses',
    activityId: '',
    pathway: 'Therapy',
    title: 'Mantra Auto-Responses (Canned Responses)',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/canned-responses'
  },
  {
    lessonId: 'mantra-assessments',
    activityId: '',
    pathway: 'Therapy',
    title: 'Sharing Mantra Assessments',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/mantra-assessments'
  },
  {
    lessonId: 'support-hotline',
    activityId: '',
    pathway: 'Therapy',
    title: 'Support Our Mental Health Hotline',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/support-hotline'
  },
  {
    lessonId: 'corporate-eap',
    activityId: '',
    pathway: 'Therapy',
    title: 'Corporate EAP Program Support',
    rewardPoints: 5,
    estimatedDuration: '2 min',
    route: '/corporate-eap'
  },
  {
    lessonId: 'community-management',
    activityId: '',
    pathway: 'Therapy',
    title: 'Community Management - 10 Credits',
    rewardPoints: 10,
    estimatedDuration: '5 min',
    route: '/community-management'
  },
  {
    lessonId: 'content-creation',
    activityId: '',
    pathway: 'Therapy',
    title: 'Content Creation for Mental Health - 20 Credits',
    rewardPoints: 20,
    estimatedDuration: '8 min',
    route: '/content-creation'
  },
  {
    lessonId: 'campus-awareness',
    activityId: '',
    pathway: 'Therapy',
    title: 'Campus Mental Health Awareness',
    rewardPoints: 50,
    estimatedDuration: '10 min',
    route: '/campus-awareness'
  },
  {
    lessonId: 'fundraising',
    activityId: '',
    pathway: 'Therapy',
    title: 'Fund Raising for Mantra Foundation',
    rewardPoints: 50,
    estimatedDuration: '5 min',
    route: '/fundraising'
  },
  {
    lessonId: 'recruit-interns',
    activityId: '',
    pathway: 'Therapy',
    title: 'Help Recruit New Therapy Interns & Listeners',
    rewardPoints: 50,
    estimatedDuration: '5 min',
    route: '/recruit-interns'
  },
  {
    lessonId: 'refer-services',
    activityId: '',
    pathway: 'Therapy',
    title: 'Refer Other Services & Earn',
    rewardPoints: 10,
    estimatedDuration: '2 min',
    route: '/refer-services'
  },
  {
    lessonId: 'converting-clients',
    activityId: '',
    pathway: 'Therapy',
    title: 'Converting Trial Clients',
    rewardPoints: 10,
    estimatedDuration: '2 min',
    route: '/converting-clients'
  },
  {
    lessonId: 'insurance',
    activityId: '',
    pathway: 'Therapy',
    title: 'Insurance for Therapy (US, UK & Canada)',
    rewardPoints: 10,
    estimatedDuration: '3 min',
    route: '/insurance'
  },
  {
    lessonId: 'earn-points',
    activityId: '',
    pathway: 'Therapy',
    title: 'Earn Points for Every Session',
    rewardPoints: 5,
    estimatedDuration: '3 min',
    route: '/earn-points'
  },
  {
    lessonId: 'refer-provider',
    activityId: '',
    pathway: 'Therapy',
    title: 'Refer a Provider & Earn Rewards',
    rewardPoints: 20,
    estimatedDuration: '3 min',
    route: '/refer-provider'
  },
  {
    lessonId: 'sales-partner',
    activityId: '',
    pathway: 'Therapy',
    title: 'Becoming a Mantra Sales Partner',
    rewardPoints: 50,
    estimatedDuration: '5 min',
    route: '/sales-partner'
  },
  {
    lessonId: 'download-certificate',
    activityId: '',
    pathway: 'Therapy',
    title: 'Download your therapy intern provider pathway certificate',
    rewardPoints: 0,
    estimatedDuration: '1 min',
    route: '/download-certificate'
  },
  {
    lessonId: 'provider-certificate',
    activityId: '',
    pathway: 'Therapy',
    title: 'Download your Therapy Provider Pathway Certificate',
    rewardPoints: 0,
    estimatedDuration: '1 min',
    route: '/provider-certificate'
  },
  {
    lessonId: 'top-listener-recognition',
    activityId: '',
    pathway: 'Listener',
    title: 'Top Listener of the Month & Recognition',
    rewardPoints: 10,
    estimatedDuration: '5 min',
    route: '/top-listener-recognition'
  },
  {
    lessonId: 'listener-certificate',
    activityId: '',
    pathway: 'Listener',
    title: 'Download Your Listener Provider Pathway Certificate',
    rewardPoints: 0,
    estimatedDuration: '1 min',
    route: '/listener-certificate'
  },
  {
    lessonId: 'yoga-pathway',
    activityId: '',
    pathway: 'Yoga',
    title: 'Creating a Yoga Pathway for Your Client',
    rewardPoints: 5,
    estimatedDuration: '2-3 min',
    route: '/yoga-pathway'
  },
  {
    lessonId: 'yoga-routine',
    activityId: '',
    pathway: 'Yoga',
    title: 'Create a Personalized Yoga Routine for Different Client Needs',
    rewardPoints: 5,
    estimatedDuration: '3-5 min',
    route: '/yoga-routine'
  },
  {
    lessonId: 'yoga-mindfulness',
    activityId: '',
    pathway: 'Yoga',
    title: 'Sharing In-Session Mindfulness or Breathing Exercises to Boost Engagement',
    rewardPoints: 5,
    estimatedDuration: '2-3 min',
    route: '/yoga-mindfulness'
  },
  {
    lessonId: 'yoga-nudging',
    activityId: '',
    pathway: 'Yoga',
    title: 'Nudging Clients to Practice Daily',
    rewardPoints: 5,
    estimatedDuration: '2-3 min',
    route: '/yoga-nudging'
  },
  {
    lessonId: 'yoga-refer-services',
    activityId: '',
    pathway: 'Yoga',
    title: 'Refer Other Services like Fit, Diet, Physio etc.',
    rewardPoints: 5,
    estimatedDuration: '2-3 min',
    route: '/yoga-refer-services'
  },
  {
    lessonId: 'yoga-market-profile',
    activityId: '',
    pathway: 'Yoga',
    title: 'Market Your Profile – Yoga Experts',
    rewardPoints: 5,
    estimatedDuration: '5 min',
    route: '/yoga-market-profile'
  },
  {
    lessonId: 'yoga-certificate',
    activityId: '',
    pathway: 'Yoga',
    title: 'Download Your Yoga Provider Pathway Certificate',
    rewardPoints: 20,
    estimatedDuration: '2 min',
    route: '/yoga-certificate'
  },
  {
    lessonId: 'earn-while-you-improve-your-wellbeing',
    activityId: '',
    pathway: 'Foundational Therapy',
    title: 'Earn While You Improve Your Wellbeing',
    rewardPoints: 50,
    estimatedDuration: '2 min',
    route: '/earn-while-you-improve-your-wellbeing'
  },
];
