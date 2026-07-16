export interface AssessmentCategory {
  id: string;
  name: string;
  description: string;
}

export interface Threshold {
  label: string; // e.g., 'Minimal', 'Mild'
  maxScore: number; // upper bound of this threshold (inclusive)
  color: string; // hex or css variable
  message: string;
}

export interface AssessmentQuestion {
  id: string;
  text: string;
  categoryId: string;
  options: { label: string; value: number }[];
}

export interface AssessmentSchema {
  id: string;
  title: string;
  description: string;
  categories: AssessmentCategory[];
  thresholds: Record<string, Threshold[]>; // Maps categoryId -> array of thresholds (sorted by maxScore asc)
  questions: AssessmentQuestion[];
}

export interface CategoryResult {
  categoryId: string;
  categoryName: string;
  score: number;
  maxPossibleScore: number;
  severityLabel: string;
  color: string;
  message: string;
}

export interface AssessmentReport {
  results: CategoryResult[];
}

export function calculateScores(
  schema: AssessmentSchema,
  answers: Record<string, number> // questionId -> selected value
): AssessmentReport {
  
  const results: CategoryResult[] = [];

  for (const category of schema.categories) {
    // 1. Find all questions for this category
    const categoryQuestions = schema.questions.filter(q => q.categoryId === category.id);
    
    // 2. Sum the scores
    let score = 0;
    let maxPossibleScore = 0;

    for (const q of categoryQuestions) {
      if (answers[q.id] !== undefined) {
        score += answers[q.id];
      }
      
      // Calculate max possible for this question to calculate progress meters
      const maxVal = Math.max(...q.options.map(o => o.value));
      maxPossibleScore += maxVal;
    }

    // 3. Find the applicable threshold
    const catThresholds = schema.thresholds[category.id] || [];
    let appliedThreshold = catThresholds[catThresholds.length - 1]; // default to highest

    for (const t of catThresholds) {
      if (score <= t.maxScore) {
        appliedThreshold = t;
        break;
      }
    }

    results.push({
      categoryId: category.id,
      categoryName: category.name,
      score,
      maxPossibleScore,
      severityLabel: appliedThreshold ? appliedThreshold.label : 'Unknown',
      color: appliedThreshold ? appliedThreshold.color : '#cbd5e1',
      message: appliedThreshold ? appliedThreshold.message : ''
    });
  }

  return { results };
}
