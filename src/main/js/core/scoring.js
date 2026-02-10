(function() {
  window.MBTI = window.MBTI || {};

  // Cognitive function mappings for each MBTI type
  const COGNITIVE_FUNCTIONS = {
    INTJ: { Ni: 0.95, Te: 0.85, Fi: 0.55, Se: 0.30, Ne: 0.20, Ti: 0.40, Fe: 0.15, Si: 0.25 },
    INTP: { Ti: 0.95, Ne: 0.85, Si: 0.55, Fe: 0.30, Te: 0.20, Ni: 0.40, Se: 0.15, Fi: 0.25 },
    ENTJ: { Te: 0.95, Ni: 0.85, Se: 0.55, Fi: 0.30, Ti: 0.20, Ne: 0.40, Si: 0.15, Fe: 0.25 },
    ENTP: { Ne: 0.95, Ti: 0.85, Fe: 0.55, Si: 0.30, Ni: 0.20, Te: 0.40, Fi: 0.15, Se: 0.25 },
    INFJ: { Ni: 0.95, Fe: 0.85, Ti: 0.55, Se: 0.30, Ne: 0.20, Fi: 0.40, Te: 0.15, Si: 0.25 },
    INFP: { Fi: 0.95, Ne: 0.85, Si: 0.55, Te: 0.30, Fe: 0.20, Ni: 0.40, Se: 0.15, Ti: 0.25 },
    ENFJ: { Fe: 0.95, Ni: 0.85, Se: 0.55, Ti: 0.30, Fi: 0.20, Ne: 0.40, Si: 0.15, Te: 0.25 },
    ENFP: { Ne: 0.95, Fi: 0.85, Te: 0.55, Si: 0.30, Ni: 0.20, Fe: 0.40, Se: 0.15, Ti: 0.25 },
    ISTJ: { Si: 0.95, Te: 0.85, Fi: 0.55, Ne: 0.30, Se: 0.20, Ti: 0.40, Fe: 0.15, Ni: 0.25 },
    ISFJ: { Si: 0.95, Fe: 0.85, Ti: 0.55, Ne: 0.30, Se: 0.20, Fi: 0.40, Te: 0.15, Ni: 0.25 },
    ESTJ: { Te: 0.95, Si: 0.85, Ne: 0.55, Fi: 0.30, Ti: 0.20, Se: 0.40, Ni: 0.15, Fe: 0.25 },
    ESFJ: { Fe: 0.95, Si: 0.85, Ne: 0.55, Ti: 0.30, Fi: 0.20, Se: 0.40, Ni: 0.15, Te: 0.25 },
    ISTP: { Ti: 0.95, Se: 0.85, Ni: 0.55, Fe: 0.30, Te: 0.20, Si: 0.40, Ne: 0.15, Fi: 0.25 },
    ISFP: { Fi: 0.95, Se: 0.85, Ni: 0.55, Te: 0.30, Fe: 0.20, Si: 0.40, Ne: 0.15, Ti: 0.25 },
    ESTP: { Se: 0.95, Ti: 0.85, Fe: 0.55, Ni: 0.30, Si: 0.20, Te: 0.40, Fi: 0.15, Ne: 0.25 },
    ESFP: { Se: 0.95, Fi: 0.85, Te: 0.55, Ni: 0.30, Si: 0.20, Fe: 0.40, Ti: 0.15, Ne: 0.25 }
  };

  /**
   * Calculate dimension scores from quiz answers
   * @param {Array} answers - Array of {questionId, value} where value is 1-5 (Likert)
   * @returns {Object} results with dimension percentages, type, and cognitive functions
   */
  window.MBTI.calculateResults = function(answers) {
    const questions = window.MBTI.questions;

    // Initialize dimension tallies
    const dimensions = {
      EI: { first: 0, second: 0, count: 0 },  // E vs I
      SN: { first: 0, second: 0, count: 0 },  // S vs N
      TF: { first: 0, second: 0, count: 0 },  // T vs F
      JP: { first: 0, second: 0, count: 0 }   // J vs P
    };

    // Process each answer
    answers.forEach(function(answer) {
      var question = questions.find(function(q) { return q.id === answer.questionId; });
      if (!question) return;

      var dim = question.dimension;
      var value = answer.value; // 1-5 scale
      var firstLetter = dim[0]; // E, S, T, J
      var direction = question.direction;

      dimensions[dim].count++;

      if (direction === firstLetter) {
        // High agreement favors first letter (E, S, T, J)
        dimensions[dim].first += value;
        dimensions[dim].second += (6 - value);
      } else {
        // High agreement favors second letter (I, N, F, P)
        dimensions[dim].second += value;
        dimensions[dim].first += (6 - value);
      }
    });

    // Calculate percentages for each dimension
    var percentages = {};
    var type = '';

    ['EI', 'SN', 'TF', 'JP'].forEach(function(dim) {
      var total = dimensions[dim].first + dimensions[dim].second;
      if (total === 0) total = 1;

      var firstPct = Math.round((dimensions[dim].first / total) * 100);
      var secondPct = 100 - firstPct;

      percentages[dim] = {
        first: { letter: dim[0], percentage: firstPct },
        second: { letter: dim[1], percentage: secondPct }
      };

      type += firstPct >= secondPct ? dim[0] : dim[1];
    });

    // Calculate cognitive function scores based on type
    var cognitiveFunctions = calculateCognitiveFunctions(type, percentages);

    return {
      type: type,
      percentages: percentages,
      cognitiveFunctions: cognitiveFunctions
    };
  };

  /**
   * Calculate cognitive function scores
   * Blends the base pattern for the type with actual dimension scores
   */
  function calculateCognitiveFunctions(type, percentages) {
    var basePattern = COGNITIVE_FUNCTIONS[type];
    if (!basePattern) return null;

    // Get dimension strengths (how decisive each dimension is)
    var dimensionStrength = {};
    ['EI', 'SN', 'TF', 'JP'].forEach(function(dim) {
      var diff = Math.abs(percentages[dim].first.percentage - percentages[dim].second.percentage);
      dimensionStrength[dim] = diff / 100; // 0 to 1
    });

    // Adjust base scores by dimension clarity
    var functions = {};
    var functionDimensions = {
      Fe: 'TF', Fi: 'TF', Te: 'TF', Ti: 'TF',
      Se: 'SN', Si: 'SN', Ne: 'SN', Ni: 'SN'
    };

    Object.keys(basePattern).forEach(function(fn) {
      var base = basePattern[fn];
      var relatedDim = functionDimensions[fn];
      var strength = dimensionStrength[relatedDim] || 0;

      // Blend base pattern with dimension clarity
      var score = base * (0.7 + 0.3 * strength);
      functions[fn] = Math.round(score * 100);
    });

    return functions;
  }

  /**
   * Get a brief summary for free results
   */
  window.MBTI.getFreeSummary = function(results) {
    var typeData = window.MBTI.types[results.type];
    if (!typeData) return null;

    return {
      type: results.type,
      name: typeData.name,
      description: typeData.description,
      percentages: results.percentages
    };
  };

  /**
   * Get full report data for paid results
   */
  window.MBTI.getFullReport = function(results) {
    var typeData = window.MBTI.types[results.type];
    if (!typeData) return null;

    return {
      type: results.type,
      name: typeData.name,
      description: typeData.description,
      percentages: results.percentages,
      cognitiveFunctions: results.cognitiveFunctions,
      strengths: typeData.strengths,
      weaknesses: typeData.weaknesses,
      careers: typeData.careers,
      compatibility: typeData.compatibility,
      cognitiveStack: typeData.cognitiveStack,
      famousPeople: typeData.famousPeople,
      growth: typeData.growth,
      communicationStyle: typeData.communicationStyle,
      relationshipDeepDive: typeData.relationshipDeepDive,
      blindSpots: typeData.blindSpots
    };
  };
})();
