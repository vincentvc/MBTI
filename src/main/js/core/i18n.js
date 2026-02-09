/**
 * MBTI Personality Quiz - Internationalization (i18n) Module
 * Supports: English, Traditional Chinese, Simplified Chinese
 */
(function () {
  'use strict';

  window.MBTI = window.MBTI || {};

  var STORAGE_KEY = 'mbti_language';
  var DEFAULT_LANG = 'en';

  var translations = {
    // ----------------------------------------------------------------
    // English
    // ----------------------------------------------------------------
    en: {
      // Navigation
      start: 'Start',
      next: 'Next',
      back: 'Back',
      submit: 'Submit',
      home: 'Home',

      // Landing page
      title: 'MBTI Personality Quiz',
      subtitle: 'Discover Your Personality Type',
      description: 'Answer a series of questions to uncover your MBTI personality type and gain insight into how you think, feel, and interact with the world.',
      startButton: 'Start the Quiz',

      // Quiz
      progress: 'Progress',
      questionCounter: 'Question {{current}} of {{total}}',

      // Results
      yourType: 'Your Type',
      typeDescription: 'Type Description',
      unlockReport: 'Unlock Full Report',
      reportTeaser: 'Get a comprehensive analysis of your cognitive functions, career paths, relationships, and personal growth strategies.',

      // Payment
      paymentTitle: 'Unlock Your Full Report',
      price: 'HK$66',
      paymentDescription: 'One-time payment for your complete MBTI personality report with in-depth analysis.',
      applePay: 'Apple Pay',
      googlePay: 'Google Pay',
      cardPayment: 'Credit / Debit Card',
      payNow: 'Pay Now',
      cancel: 'Cancel',
      paymentSuccess: 'Payment successful! Your full report is now available.',
      paymentError: 'Payment failed. Please try again or choose a different payment method.',

      // Report sections
      cognitiveFunction: 'Cognitive Functions',
      dimensionAnalysis: 'Dimension Analysis',
      careerRecommendations: 'Career Recommendations',
      relationshipInsights: 'Relationship Insights',
      personalGrowth: 'Personal Growth',
      strengths: 'Strengths',
      weaknesses: 'Weaknesses',
      famousPeople: 'Famous People With Your Type',
      printReport: 'Print Report',
      downloadPDF: 'Download PDF',

      // Likert scale
      stronglyDisagree: 'Strongly Disagree',
      disagree: 'Disagree',
      neutral: 'Neutral',
      agree: 'Agree',
      stronglyAgree: 'Strongly Agree',

      // General
      loading: 'Loading...',
      error: 'An error occurred.',
      tryAgain: 'Try Again',
      language: 'Language',
      freeResult: 'Free Result',
      fullReport: 'Full Report',
      basicAnalysis: 'Basic Analysis',
      detailedAnalysis: 'Detailed Analysis',
      question: 'Question',
      viewFullReport: 'View Full Report',
      compatibleTypes: 'Most compatible personality types:',
      cognitiveStack: 'Cognitive Function Stack',
      features72: '72 Scientifically-Designed Questions',
      features16: '16 Personality Types',
      featuresReport: 'Professional Report with Charts',
      featuresLang: 'Trilingual Support',

      // Footer / misc
      disclaimer: 'This quiz is for entertainment and self-discovery purposes only. It is not a clinical assessment.',
      copyright: '\u00A9 2026 MBTI Personality Quiz. All rights reserved.',
      privacyPolicy: 'Privacy Policy'
    },

    // ----------------------------------------------------------------
    // Traditional Chinese (zh-TW)
    // ----------------------------------------------------------------
    'zh-TW': {
      // Navigation
      start: '\u958B\u59CB',
      next: '\u4E0B\u4E00\u984C',
      back: '\u4E0A\u4E00\u984C',
      submit: '\u63D0\u4EA4',
      home: '\u9996\u9801',

      // Landing page
      title: 'MBTI \u4EBA\u683C\u6E2C\u9A57',
      subtitle: '\u63A2\u7D22\u4F60\u7684\u4EBA\u683C\u985E\u578B',
      description: '\u56DE\u7B54\u4E00\u7CFB\u5217\u554F\u984C\uFF0C\u63ED\u958B\u4F60\u7684 MBTI \u4EBA\u683C\u985E\u578B\uFF0C\u6DF1\u5165\u4E86\u89E3\u4F60\u7684\u601D\u8003\u3001\u611F\u53D7\u548C\u8207\u4E16\u754C\u4E92\u52D5\u7684\u65B9\u5F0F\u3002',
      startButton: '\u958B\u59CB\u6E2C\u9A57',

      // Quiz
      progress: '\u9032\u5EA6',
      questionCounter: '\u7B2C {{current}} \u984C\uFF0C\u5171 {{total}} \u984C',

      // Results
      yourType: '\u4F60\u7684\u985E\u578B',
      typeDescription: '\u985E\u578B\u63CF\u8FF0',
      unlockReport: '\u89E3\u9396\u5B8C\u6574\u5831\u544A',
      reportTeaser: '\u7372\u53D6\u8A8D\u77E5\u529F\u80FD\u3001\u8077\u696D\u8DEF\u5F91\u3001\u4EBA\u969B\u95DC\u4FC2\u548C\u500B\u4EBA\u6210\u9577\u7B56\u7565\u7684\u5168\u9762\u5206\u6790\u3002',

      // Payment
      paymentTitle: '\u89E3\u9396\u5B8C\u6574\u5831\u544A',
      price: 'HK$66',
      paymentDescription: '\u4E00\u6B21\u6027\u4ED8\u6B3E\uFF0C\u7372\u53D6\u5B8C\u6574\u7684 MBTI \u4EBA\u683C\u5831\u544A\u53CA\u6DF1\u5EA6\u5206\u6790\u3002',
      applePay: 'Apple Pay',
      googlePay: 'Google Pay',
      cardPayment: '\u4FE1\u7528\u5361 / \u7C3D\u5E33\u5361',
      payNow: '\u7ACB\u5373\u4ED8\u6B3E',
      cancel: '\u53D6\u6D88',
      paymentSuccess: '\u4ED8\u6B3E\u6210\u529F\uFF01\u60A8\u7684\u5B8C\u6574\u5831\u544A\u5DF2\u53EF\u67E5\u770B\u3002',
      paymentError: '\u4ED8\u6B3E\u5931\u6557\uFF0C\u8ACB\u91CD\u8A66\u6216\u9078\u64C7\u5176\u4ED6\u4ED8\u6B3E\u65B9\u5F0F\u3002',

      // Report sections
      cognitiveFunction: '\u8A8D\u77E5\u529F\u80FD',
      dimensionAnalysis: '\u7DAD\u5EA6\u5206\u6790',
      careerRecommendations: '\u8077\u696D\u63A8\u85A6',
      relationshipInsights: '\u4EBA\u969B\u95DC\u4FC2\u6D1E\u5BDF',
      personalGrowth: '\u500B\u4EBA\u6210\u9577',
      strengths: '\u512A\u52E2',
      weaknesses: '\u52A3\u52E2',
      famousPeople: '\u8207\u4F60\u540C\u985E\u578B\u7684\u540D\u4EBA',
      printReport: '\u5217\u5370\u5831\u544A',
      downloadPDF: '\u4E0B\u8F09 PDF',

      // Likert scale
      stronglyDisagree: '\u975E\u5E38\u4E0D\u540C\u610F',
      disagree: '\u4E0D\u540C\u610F',
      neutral: '\u4E2D\u7ACB',
      agree: '\u540C\u610F',
      stronglyAgree: '\u975E\u5E38\u540C\u610F',

      // General
      loading: '\u8F09\u5165\u4E2D...',
      error: '\u767C\u751F\u932F\u8AA4\u3002',
      tryAgain: '\u91CD\u8A66',
      language: '\u8A9E\u8A00',
      freeResult: '\u514D\u8CBB\u7D50\u679C',
      fullReport: '\u5B8C\u6574\u5831\u544A',
      basicAnalysis: '\u57FA\u672C\u5206\u6790',
      detailedAnalysis: '詳細分析',
      question: '問題',
      viewFullReport: '查看完整報告',
      compatibleTypes: '最相容的人格類型：',
      cognitiveStack: '認知功能堆疊',
      features72: '72 道科學設計問題',
      features16: '16 種人格類型',
      featuresReport: '專業圖表報告',
      featuresLang: '三語支援',

      // Footer / misc
      disclaimer: '此測驗僅供娛樂和自我探索之用，並非臨床評估。',
      copyright: '© 2026 MBTI 人格測驗。保留所有權利。',
      privacyPolicy: '隱私政策'
    },

    // ----------------------------------------------------------------
    // Simplified Chinese (zh-CN)
    // ----------------------------------------------------------------
    'zh-CN': {
      // Navigation
      start: '\u5F00\u59CB',
      next: '\u4E0B\u4E00\u9898',
      back: '\u4E0A\u4E00\u9898',
      submit: '\u63D0\u4EA4',
      home: '\u9996\u9875',

      // Landing page
      title: 'MBTI \u4EBA\u683C\u6D4B\u9A8C',
      subtitle: '\u63A2\u7D22\u4F60\u7684\u4EBA\u683C\u7C7B\u578B',
      description: '\u56DE\u7B54\u4E00\u7CFB\u5217\u95EE\u9898\uFF0C\u63ED\u5F00\u4F60\u7684 MBTI \u4EBA\u683C\u7C7B\u578B\uFF0C\u6DF1\u5165\u4E86\u89E3\u4F60\u7684\u601D\u8003\u3001\u611F\u53D7\u548C\u4E0E\u4E16\u754C\u4E92\u52A8\u7684\u65B9\u5F0F\u3002',
      startButton: '\u5F00\u59CB\u6D4B\u9A8C',

      // Quiz
      progress: '\u8FDB\u5EA6',
      questionCounter: '\u7B2C {{current}} \u9898\uFF0C\u5171 {{total}} \u9898',

      // Results
      yourType: '\u4F60\u7684\u7C7B\u578B',
      typeDescription: '\u7C7B\u578B\u63CF\u8FF0',
      unlockReport: '\u89E3\u9501\u5B8C\u6574\u62A5\u544A',
      reportTeaser: '\u83B7\u53D6\u8BA4\u77E5\u529F\u80FD\u3001\u804C\u4E1A\u8DEF\u5F84\u3001\u4EBA\u9645\u5173\u7CFB\u548C\u4E2A\u4EBA\u6210\u957F\u7B56\u7565\u7684\u5168\u9762\u5206\u6790\u3002',

      // Payment
      paymentTitle: '\u89E3\u9501\u5B8C\u6574\u62A5\u544A',
      price: 'HK$66',
      paymentDescription: '\u4E00\u6B21\u6027\u4ED8\u6B3E\uFF0C\u83B7\u53D6\u5B8C\u6574\u7684 MBTI \u4EBA\u683C\u62A5\u544A\u53CA\u6DF1\u5EA6\u5206\u6790\u3002',
      applePay: 'Apple Pay',
      googlePay: 'Google Pay',
      cardPayment: '\u4FE1\u7528\u5361 / \u501F\u8BB0\u5361',
      payNow: '\u7ACB\u5373\u4ED8\u6B3E',
      cancel: '\u53D6\u6D88',
      paymentSuccess: '\u4ED8\u6B3E\u6210\u529F\uFF01\u60A8\u7684\u5B8C\u6574\u62A5\u544A\u5DF2\u53EF\u67E5\u770B\u3002',
      paymentError: '\u4ED8\u6B3E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u6216\u9009\u62E9\u5176\u4ED6\u4ED8\u6B3E\u65B9\u5F0F\u3002',

      // Report sections
      cognitiveFunction: '\u8BA4\u77E5\u529F\u80FD',
      dimensionAnalysis: '\u7EF4\u5EA6\u5206\u6790',
      careerRecommendations: '\u804C\u4E1A\u63A8\u8350',
      relationshipInsights: '\u4EBA\u9645\u5173\u7CFB\u6D1E\u5BDF',
      personalGrowth: '\u4E2A\u4EBA\u6210\u957F',
      strengths: '\u4F18\u52BF',
      weaknesses: '\u52A3\u52BF',
      famousPeople: '\u4E0E\u4F60\u540C\u7C7B\u578B\u7684\u540D\u4EBA',
      printReport: '\u6253\u5370\u62A5\u544A',
      downloadPDF: '\u4E0B\u8F7D PDF',

      // Likert scale
      stronglyDisagree: '\u975E\u5E38\u4E0D\u540C\u610F',
      disagree: '\u4E0D\u540C\u610F',
      neutral: '\u4E2D\u7ACB',
      agree: '\u540C\u610F',
      stronglyAgree: '\u975E\u5E38\u540C\u610F',

      // General
      loading: '\u52A0\u8F7D\u4E2D...',
      error: '\u53D1\u751F\u9519\u8BEF\u3002',
      tryAgain: '\u91CD\u8BD5',
      language: '\u8BED\u8A00',
      freeResult: '\u514D\u8D39\u7ED3\u679C',
      fullReport: '\u5B8C\u6574\u62A5\u544A',
      basicAnalysis: '\u57FA\u672C\u5206\u6790',
      detailedAnalysis: '详细分析',
      question: '问题',
      viewFullReport: '查看完整报告',
      compatibleTypes: '最相容的人格类型：',
      cognitiveStack: '认知功能堆叠',
      features72: '72 道科学设计问题',
      features16: '16 种人格类型',
      featuresReport: '专业图表报告',
      featuresLang: '三语支持',

      // Footer / misc
      disclaimer: '此测验仅供娱乐和自我探索之用，并非临床评估。',
      copyright: '© 2026 MBTI 人格测验。保留所有权利。',
      privacyPolicy: '隐私政策'
    }
  };

  /**
   * Language display names for the language selector UI.
   */
  var languageNames = {
    en: 'English',
    'zh-TW': '\u7E41\u9AD4\u4E2D\u6587',
    'zh-CN': '\u7B80\u4F53\u4E2D\u6587'
  };

  /**
   * Set the active language and persist to localStorage.
   * @param {string} lang - Language code ('en', 'zh-TW', or 'zh-CN')
   */
  function setLanguage(lang) {
    if (!translations[lang]) {
      console.warn('[i18n] Unknown language "' + lang + '". Falling back to "' + DEFAULT_LANG + '".');
      lang = DEFAULT_LANG;
    }
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn('[i18n] Could not persist language to localStorage:', e);
    }
  }

  /**
   * Get the current language code.
   * Falls back to DEFAULT_LANG if nothing is stored or stored value is invalid.
   * @returns {string} Language code
   */
  function getLanguage() {
    var lang;
    try {
      lang = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      // localStorage may be unavailable (e.g. private browsing)
    }
    if (lang && translations[lang]) {
      return lang;
    }
    return DEFAULT_LANG;
  }

  /**
   * Translate a key using the current language.
   * Supports simple interpolation with {{placeholder}} syntax.
   *
   * @param {string} key - Translation key
   * @param {Object} [params] - Optional interpolation parameters
   * @returns {string} Translated string, or the key itself if not found
   */
  function t(key, params) {
    var lang = getLanguage();
    var str = translations[lang] && translations[lang][key];

    if (str === undefined) {
      // Fallback to English, then to the raw key
      str = translations[DEFAULT_LANG] && translations[DEFAULT_LANG][key];
      if (str === undefined) {
        console.warn('[i18n] Missing translation for key "' + key + '".');
        return key;
      }
    }

    // Interpolation: replace {{placeholder}} with params values
    if (params) {
      Object.keys(params).forEach(function (param) {
        str = str.replace(new RegExp('\\{\\{' + param + '\\}\\}', 'g'), params[param]);
      });
    }

    return str;
  }

  // ----------------------------------------------------------------
  // Public API
  // ----------------------------------------------------------------
  window.MBTI.i18n = {
    translations: translations,
    languageNames: languageNames,
    setLanguage: setLanguage,
    getLanguage: getLanguage,
    t: t
  };

  // Convenience aliases on MBTI namespace for direct access
  window.MBTI.t = t;
  window.MBTI.getLanguage = getLanguage;
  window.MBTI.setLanguage = setLanguage;
})();
