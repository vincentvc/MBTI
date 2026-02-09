(function() {
  window.MBTI = window.MBTI || {};

  var STRIPE_PUBLISHABLE_KEY = 'pk_test_PLACEHOLDER'; // Replace with real key
  var PRICE_HKD = 6600; // 66 HKD in cents
  var CURRENCY = 'hkd';

  var stripe = null;
  var paymentRequest = null;
  var reportUnlocked = false;

  /**
   * Initialize Stripe and Payment Request API
   */
  window.MBTI.initPayment = function() {
    if (typeof Stripe === 'undefined') {
      console.warn('Stripe.js not loaded - payment will use demo mode');
      return;
    }

    try {
      stripe = Stripe(STRIPE_PUBLISHABLE_KEY);

      paymentRequest = stripe.paymentRequest({
        country: 'HK',
        currency: CURRENCY,
        total: {
          label: 'MBTI Professional Report',
          amount: PRICE_HKD
        },
        requestPayerName: true,
        requestPayerEmail: true
      });

      // Check if Apple Pay / Google Pay is available
      paymentRequest.canMakePayment().then(function(result) {
        if (result) {
          window.MBTI._nativePayAvailable = true;
          window.MBTI._canApplePay = result.applePay || false;
          window.MBTI._canGooglePay = result.googlePay || false;
        }
      });

      paymentRequest.on('paymentmethod', function(ev) {
        // In production: send paymentMethod.id to your server for confirmation
        // Demo: simulate success
        simulatePaymentSuccess();
        ev.complete('success');
      });
    } catch (e) {
      console.warn('Stripe initialization failed:', e);
    }
  };

  /**
   * Show the payment modal
   */
  window.MBTI.showPaymentModal = function() {
    var overlay = document.getElementById('payment-modal');
    if (overlay) {
      overlay.classList.add('active');
      updatePaymentButtons();
    }
  };

  /**
   * Hide the payment modal
   */
  window.MBTI.hidePaymentModal = function() {
    var overlay = document.getElementById('payment-modal');
    if (overlay) {
      overlay.classList.remove('active');
      // Reset to payment options view
      showPaymentForm();
    }
  };

  /**
   * Update Apple Pay / Google Pay button visibility
   */
  function updatePaymentButtons() {
    var appleBtn = document.getElementById('btn-apple-pay');
    var googleBtn = document.getElementById('btn-google-pay');

    if (appleBtn) {
      appleBtn.classList.toggle('hidden', !window.MBTI._canApplePay);
    }
    if (googleBtn) {
      googleBtn.classList.toggle('hidden', !window.MBTI._canGooglePay);
    }
  }

  /**
   * Trigger Apple Pay / Google Pay
   */
  window.MBTI.triggerNativePay = function() {
    if (paymentRequest) {
      paymentRequest.show();
    }
  };

  /**
   * Process card payment (demo mode)
   */
  window.MBTI.processCardPayment = function(cardData) {
    showPaymentProcessing();

    // In production: create payment intent with Stripe
    // Demo: simulate processing
    setTimeout(function() {
      simulatePaymentSuccess();
    }, 2000);
  };

  /**
   * Show processing state
   */
  function showPaymentProcessing() {
    var form = document.getElementById('payment-form-area');
    if (form) {
      form.innerHTML = '<div class="payment-status"><div class="spinner"></div><p style="margin-top:16px">' +
        window.MBTI.t('loading') + '</p></div>';
    }
  }

  /**
   * Show payment form (reset)
   */
  function showPaymentForm() {
    var statusEl = document.querySelector('.payment-status');
    if (statusEl) {
      // Will be rebuilt by app.js on next modal open
    }
  }

  /**
   * Simulate successful payment
   */
  function simulatePaymentSuccess() {
    reportUnlocked = true;
    localStorage.setItem('mbti_report_unlocked', 'true');

    var formArea = document.getElementById('payment-form-area');
    if (formArea) {
      formArea.innerHTML =
        '<div class="payment-status success">' +
          '<div class="status-icon">&#10003;</div>' +
          '<h3>' + window.MBTI.t('paymentSuccess') + '</h3>' +
        '</div>';
    }

    setTimeout(function() {
      window.MBTI.hidePaymentModal();
      if (typeof window.MBTI.showFullReport === 'function') {
        window.MBTI.showFullReport();
      }
    }, 1500);
  }

  /**
   * Check if report is unlocked
   */
  window.MBTI.isReportUnlocked = function() {
    return reportUnlocked || localStorage.getItem('mbti_report_unlocked') === 'true';
  };

  /**
   * Reset unlock status (for testing)
   */
  window.MBTI.resetPayment = function() {
    reportUnlocked = false;
    localStorage.removeItem('mbti_report_unlocked');
  };
})();
