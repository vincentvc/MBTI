(function() {
  window.MBTI = window.MBTI || {};

  // Application state
  var state = {
    currentView: 'landing',
    currentQuestion: 0,
    answers: {},
    results: null,
    direction: 'right'
  };

  /**
   * Initialize the application
   */
  window.MBTI.init = function() {
    // Set language from storage or default
    var savedLang = window.MBTI.getLanguage();
    updateLanguageButtons(savedLang);
    applyTranslations();

    // Initialize payment
    if (typeof window.MBTI.initPayment === 'function') {
      window.MBTI.initPayment();
    }

    // Bind events
    bindEvents();

    // Show landing page
    navigateTo('landing');
  };

  /**
   * Navigate between views
   */
  function navigateTo(view) {
    var views = ['landing', 'quiz', 'results', 'report'];
    views.forEach(function(v) {
      var el = document.getElementById('view-' + v);
      if (el) {
        if (v === view) {
          el.classList.remove('hidden');
          el.classList.add('fade-in');
        } else {
          el.classList.add('hidden');
          el.classList.remove('fade-in');
        }
      }
    });
    state.currentView = view;
    window.scrollTo(0, 0);
  }

  window.MBTI.navigateTo = navigateTo;

  /**
   * Bind all event handlers
   */
  function bindEvents() {
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var lang = this.getAttribute('data-lang');
        window.MBTI.setLanguage(lang);
        updateLanguageButtons(lang);
        applyTranslations();
        // Re-render current view if needed
        if (state.currentView === 'quiz') {
          renderQuestion();
        } else if (state.currentView === 'results' && state.results) {
          window.MBTI.renderFreeResults(state.results);
        }
      });
    });

    // Start quiz button
    var startBtn = document.getElementById('btn-start');
    if (startBtn) {
      startBtn.addEventListener('click', function() {
        startQuiz();
      });
    }

    // Quiz navigation
    var nextBtn = document.getElementById('btn-next');
    var backBtn = document.getElementById('btn-back');

    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        nextQuestion();
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', function() {
        prevQuestion();
      });
    }

    // Unlock report button
    var unlockBtn = document.getElementById('btn-unlock');
    if (unlockBtn) {
      unlockBtn.addEventListener('click', function() {
        if (window.MBTI.isReportUnlocked()) {
          window.MBTI.showFullReport();
        } else {
          window.MBTI.showPaymentModal();
        }
      });
    }

    // Payment modal close
    var modalClose = document.getElementById('modal-close');
    if (modalClose) {
      modalClose.addEventListener('click', function() {
        window.MBTI.hidePaymentModal();
      });
    }

    // Modal overlay click to close
    var overlay = document.getElementById('payment-modal');
    if (overlay) {
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
          window.MBTI.hidePaymentModal();
        }
      });
    }

    // Apple Pay button
    var applePayBtn = document.getElementById('btn-apple-pay');
    if (applePayBtn) {
      applePayBtn.addEventListener('click', function() {
        window.MBTI.triggerNativePay();
      });
    }

    // Google Pay button
    var googlePayBtn = document.getElementById('btn-google-pay');
    if (googlePayBtn) {
      googlePayBtn.addEventListener('click', function() {
        window.MBTI.triggerNativePay();
      });
    }

    // Card payment form
    var cardForm = document.getElementById('card-form');
    if (cardForm) {
      cardForm.addEventListener('submit', function(e) {
        e.preventDefault();
        window.MBTI.processCardPayment({
          number: document.getElementById('card-number').value,
          expiry: document.getElementById('card-expiry').value,
          cvc: document.getElementById('card-cvc').value
        });
      });
    }
  }

  /**
   * Start the quiz
   */
  function startQuiz() {
    state.currentQuestion = 0;
    state.answers = {};
    state.results = null;
    navigateTo('quiz');
    renderQuestion();
  }

  /**
   * Render current question
   */
  function renderQuestion() {
    var questions = window.MBTI.questions;
    var lang = window.MBTI.getLanguage();
    var q = questions[state.currentQuestion];
    var total = questions.length;

    // Progress
    var progress = ((state.currentQuestion) / total) * 100;
    var progressFill = document.getElementById('progress-fill');
    var progressText = document.getElementById('progress-text');
    var questionCounter = document.getElementById('question-counter');

    if (progressFill) progressFill.style.width = progress + '%';
    if (progressText) progressText.textContent = Math.round(progress) + '%';
    if (questionCounter) {
      questionCounter.textContent = (state.currentQuestion + 1) + ' / ' + total;
    }

    // Question number and text
    var qNumber = document.getElementById('q-number');
    var qText = document.getElementById('q-text');

    if (qNumber) {
      qNumber.textContent = window.MBTI.t('question') + ' ' + (state.currentQuestion + 1);
    }
    if (qText) qText.textContent = q.text[lang];

    // Likert options
    var likertContainer = document.getElementById('likert-scale');
    if (likertContainer) {
      var likertLabels = [
        { value: 1, key: 'stronglyDisagree' },
        { value: 2, key: 'disagree' },
        { value: 3, key: 'neutral' },
        { value: 4, key: 'agree' },
        { value: 5, key: 'stronglyAgree' }
      ];

      likertContainer.innerHTML = '';
      var selectedValue = state.answers[q.id] || null;

      likertLabels.forEach(function(opt) {
        var btn = document.createElement('button');
        btn.className = 'likert-option' + (selectedValue === opt.value ? ' selected' : '');
        btn.innerHTML =
          '<span class="likert-radio"></span>' +
          '<span>' + window.MBTI.t(opt.key) + '</span>';

        btn.addEventListener('click', function() {
          state.answers[q.id] = opt.value;
          // Update selected state
          likertContainer.querySelectorAll('.likert-option').forEach(function(o) {
            o.classList.remove('selected');
          });
          btn.classList.add('selected');
          // Auto-advance after short delay
          setTimeout(function() {
            if (state.currentQuestion < questions.length - 1) {
              nextQuestion();
            }
          }, 300);
        });

        likertContainer.appendChild(btn);
      });
    }

    // Navigation buttons
    var backBtn = document.getElementById('btn-back');
    var nextBtn = document.getElementById('btn-next');

    if (backBtn) {
      backBtn.classList.toggle('hidden', state.currentQuestion === 0);
    }

    if (nextBtn) {
      var isLast = state.currentQuestion === questions.length - 1;
      nextBtn.textContent = isLast ? window.MBTI.t('submit') : window.MBTI.t('next');
    }

    // Apply animation
    var questionCard = document.querySelector('.question-card');
    if (questionCard) {
      questionCard.classList.remove('slide-in-right', 'slide-in-left');
      void questionCard.offsetWidth; // force reflow
      questionCard.classList.add(state.direction === 'right' ? 'slide-in-right' : 'slide-in-left');
    }
  }

  /**
   * Go to next question
   */
  function nextQuestion() {
    var questions = window.MBTI.questions;
    var q = questions[state.currentQuestion];

    // Require answer
    if (!state.answers[q.id]) {
      // Visual feedback - shake
      var card = document.querySelector('.question-card .card');
      if (card) {
        card.style.animation = 'none';
        void card.offsetWidth;
        card.style.animation = 'shake 0.4s ease';
      }
      return;
    }

    if (state.currentQuestion < questions.length - 1) {
      state.direction = 'right';
      state.currentQuestion++;
      renderQuestion();
    } else {
      submitQuiz();
    }
  }

  /**
   * Go to previous question
   */
  function prevQuestion() {
    if (state.currentQuestion > 0) {
      state.direction = 'left';
      state.currentQuestion--;
      renderQuestion();
    }
  }

  /**
   * Submit quiz and calculate results
   */
  function submitQuiz() {
    var answersArray = [];
    Object.keys(state.answers).forEach(function(qId) {
      answersArray.push({
        questionId: parseInt(qId),
        value: state.answers[qId]
      });
    });

    state.results = window.MBTI.calculateResults(answersArray);

    // Render and show results
    navigateTo('results');
    window.MBTI.renderFreeResults(state.results);

    // Check if report already unlocked
    if (window.MBTI.isReportUnlocked()) {
      var unlockBtn = document.getElementById('btn-unlock');
      if (unlockBtn) {
        unlockBtn.textContent = window.MBTI.t('viewFullReport');
      }
    }
  }

  /**
   * Show full report (after payment)
   */
  window.MBTI.showFullReport = function() {
    if (!state.results) return;
    navigateTo('report');
    window.MBTI.renderFullReport(state.results);
  };

  /**
   * Update language button active states
   */
  function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  /**
   * Apply translations to all elements with data-i18n attribute
   */
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var translated = window.MBTI.t(key);
      if (translated) {
        if (el.tagName === 'INPUT' && el.type !== 'submit') {
          el.placeholder = translated;
        } else {
          el.textContent = translated;
        }
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.MBTI.init);
  } else {
    window.MBTI.init();
  }
})();
