(function() {
  window.MBTI = window.MBTI || {};

  /**
   * Render free results page
   */
  window.MBTI.renderFreeResults = function(results) {
    var lang = window.MBTI.getLanguage();
    var summary = window.MBTI.getFreeSummary(results);
    if (!summary) return;

    // Type header
    var typeEl = document.getElementById('result-type');
    var nameEl = document.getElementById('result-name');
    var descEl = document.getElementById('result-description');

    if (typeEl) typeEl.textContent = summary.type;
    if (nameEl) nameEl.textContent = summary.name[lang];
    if (descEl) descEl.textContent = summary.description[lang];

    // Dimension bars
    renderDimensionBars(summary.percentages);
  };

  /**
   * Render dimension percentage bars
   */
  function renderDimensionBars(percentages) {
    var container = document.getElementById('dimension-bars');
    if (!container) return;

    container.innerHTML = '';

    var dims = ['EI', 'SN', 'TF', 'JP'];
    var dimNames = {
      E: 'E', I: 'I', S: 'S', N: 'N', T: 'T', F: 'F', J: 'J', P: 'P'
    };

    dims.forEach(function(dim) {
      var data = percentages[dim];
      var firstWins = data.first.percentage >= data.second.percentage;

      var row = document.createElement('div');
      row.className = 'dimension-row';

      row.innerHTML =
        '<span class="dimension-label ' + (firstWins ? 'active' : 'inactive') + '">' +
          dimNames[data.first.letter] + ' ' + data.first.percentage + '%</span>' +
        '<div class="dimension-track">' +
          '<div class="dimension-fill" style="width: ' + data.first.percentage + '%"></div>' +
        '</div>' +
        '<span class="dimension-label ' + (!firstWins ? 'active' : 'inactive') + '">' +
          dimNames[data.second.letter] + ' ' + data.second.percentage + '%</span>';

      container.appendChild(row);
    });
  }

  /**
   * Render full professional report with charts
   */
  window.MBTI.renderFullReport = function(results) {
    var lang = window.MBTI.getLanguage();
    var report = window.MBTI.getFullReport(results);
    if (!report) return;

    var container = document.getElementById('report-content');
    if (!container) return;

    container.innerHTML = '';

    // Type header
    var header = document.createElement('div');
    header.className = 'report-header';
    header.innerHTML =
      '<div class="results-type text-gradient">' + report.type + '</div>' +
      '<div class="results-name">' + report.name[lang] + '</div>' +
      '<p class="results-description">' + report.description[lang] + '</p>';
    container.appendChild(header);

    // Cognitive Functions Radar Chart
    renderCognitiveFunctionSection(container, report, lang);

    // Dimension Analysis with Bar Charts
    renderDimensionSection(container, report, lang);

    // Strengths & Weaknesses
    renderStrengthsWeaknesses(container, report, lang);

    // Blind Spots (NEW)
    renderBlindSpots(container, report, lang);

    // Communication Style (NEW)
    renderCommunicationStyle(container, report, lang);

    // Career Recommendations
    renderCareers(container, report, lang);

    // Relationship Deep Dive (NEW - replaces basic compatibility)
    renderRelationshipDeepDive(container, report, lang);

    // Famous People
    renderFamousPeople(container, report, lang);

    // Personal Growth
    renderGrowth(container, report, lang);

    // Report actions (print, retake)
    renderReportActions(container);

    // Render charts after DOM is ready
    setTimeout(function() {
      renderCharts(report);
    }, 100);
  };

  function renderCognitiveFunctionSection(container, report, lang) {
    var section = document.createElement('div');
    section.className = 'report-section';
    section.innerHTML =
      '<h2>' + window.MBTI.t('cognitiveFunction') + '</h2>' +
      '<div class="chart-container"><canvas id="radar-chart"></canvas></div>' +
      '<p style="color:var(--text-muted);font-size:14px;margin-top:8px">' +
        window.MBTI.t('cognitiveStack') + ': ' + report.cognitiveStack.join(' → ') +
      '</p>';
    container.appendChild(section);
  }

  function renderDimensionSection(container, report, lang) {
    var section = document.createElement('div');
    section.className = 'report-section';
    section.innerHTML =
      '<h2>' + window.MBTI.t('dimensionAnalysis') + '</h2>' +
      '<div class="chart-container"><canvas id="bar-chart"></canvas></div>' +
      '<div class="chart-row">' +
        '<div class="chart-container"><canvas id="doughnut-ei"></canvas></div>' +
        '<div class="chart-container"><canvas id="doughnut-sn"></canvas></div>' +
      '</div>' +
      '<div class="chart-row">' +
        '<div class="chart-container"><canvas id="doughnut-tf"></canvas></div>' +
        '<div class="chart-container"><canvas id="doughnut-jp"></canvas></div>' +
      '</div>';
    container.appendChild(section);
  }

  function renderStrengthsWeaknesses(container, report, lang) {
    var section = document.createElement('div');
    section.className = 'report-section';

    var strengthsHtml = report.strengths[lang].map(function(s) {
      return '<li>' + s + '</li>';
    }).join('');

    var weaknessesHtml = report.weaknesses[lang].map(function(w) {
      return '<li>' + w + '</li>';
    }).join('');

    section.innerHTML =
      '<h2>' + window.MBTI.t('strengths') + ' & ' + window.MBTI.t('weaknesses') + '</h2>' +
      '<div class="chart-row">' +
        '<div><h3>' + window.MBTI.t('strengths') + '</h3>' +
          '<ul class="report-list">' + strengthsHtml + '</ul></div>' +
        '<div><h3>' + window.MBTI.t('weaknesses') + '</h3>' +
          '<ul class="report-list weaknesses">' + weaknessesHtml + '</ul></div>' +
      '</div>';
    container.appendChild(section);
  }

  function renderBlindSpots(container, report, lang) {
    if (!report.blindSpots || !report.blindSpots[lang]) return;

    var section = document.createElement('div');
    section.className = 'report-section';

    var itemsHtml = report.blindSpots[lang].map(function(item) {
      return '<li>' + item + '</li>';
    }).join('');

    section.innerHTML =
      '<h2>' + window.MBTI.t('blindSpots') + '</h2>' +
      '<ul class="report-list blind-spots">' + itemsHtml + '</ul>';
    container.appendChild(section);
  }

  function renderCommunicationStyle(container, report, lang) {
    if (!report.communicationStyle || !report.communicationStyle[lang]) return;

    var section = document.createElement('div');
    section.className = 'report-section report-section-gradient';

    section.innerHTML =
      '<h2>' + window.MBTI.t('communicationStyle') + '</h2>' +
      '<div class="communication-card"><p>' + report.communicationStyle[lang] + '</p></div>';
    container.appendChild(section);
  }

  function renderRelationshipDeepDive(container, report, lang) {
    if (!report.relationshipDeepDive || !report.relationshipDeepDive[lang]) return;

    var section = document.createElement('div');
    section.className = 'report-section report-section-gradient';

    var badgesHtml = report.compatibility.map(function(type) {
      return '<span class="compat-badge">' + type + '</span>';
    }).join('');

    section.innerHTML =
      '<h2>' + window.MBTI.t('relationshipDeepDive') + '</h2>' +
      '<div class="relationship-content">' + report.relationshipDeepDive[lang] + '</div>' +
      '<h3>' + window.MBTI.t('compatibleTypes') + '</h3>' +
      '<div class="compatibility-grid" style="margin-bottom:24px">' + badgesHtml + '</div>' +
      '<div class="relationship-advice">' +
        '<h3>' + window.MBTI.t('relationshipAdvice') + '</h3>' +
        '<p>' + report.growth[lang] + '</p>' +
      '</div>';
    container.appendChild(section);
  }

  function renderCareers(container, report, lang) {
    var section = document.createElement('div');
    section.className = 'report-section';

    var careersHtml = report.careers[lang].map(function(c) {
      return '<li>' + c + '</li>';
    }).join('');

    section.innerHTML =
      '<h2>' + window.MBTI.t('careerRecommendations') + '</h2>' +
      '<ul class="report-list careers">' + careersHtml + '</ul>';
    container.appendChild(section);
  }

  function renderFamousPeople(container, report, lang) {
    var section = document.createElement('div');
    section.className = 'report-section';

    var badgesHtml = report.famousPeople.map(function(p) {
      return '<span class="famous-badge">' + p + '</span>';
    }).join('');

    section.innerHTML =
      '<h2>' + window.MBTI.t('famousPeople') + '</h2>' +
      '<div class="famous-grid">' + badgesHtml + '</div>';
    container.appendChild(section);
  }

  function renderGrowth(container, report, lang) {
    var section = document.createElement('div');
    section.className = 'report-section';
    section.innerHTML =
      '<h2>' + window.MBTI.t('personalGrowth') + '</h2>' +
      '<div class="growth-text">' + report.growth[lang] + '</div>';
    container.appendChild(section);
  }

  function renderReportActions(container) {
    var actions = document.createElement('div');
    actions.className = 'report-actions';
    actions.innerHTML =
      '<button class="btn btn-primary" onclick="window.print()">' +
        window.MBTI.t('printReport') + '</button>' +
      '<button class="btn btn-secondary" onclick="window.MBTI.navigateTo(\'landing\')">' +
        window.MBTI.t('home') + '</button>';
    container.appendChild(actions);
  }

  /**
   * Render all Chart.js charts
   */
  function renderCharts(report) {
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js not loaded');
      return;
    }

    Chart.defaults.color = '#CBD5E1';
    Chart.defaults.borderColor = 'rgba(255,255,255,0.1)';

    renderRadarChart(report);
    renderBarChart(report);
    renderDoughnutCharts(report);
  }

  function renderRadarChart(report) {
    var ctx = document.getElementById('radar-chart');
    if (!ctx) return;

    var cf = report.cognitiveFunctions;
    var labels = ['Ni', 'Ne', 'Si', 'Se', 'Ti', 'Te', 'Fi', 'Fe'];
    var data = labels.map(function(l) { return cf[l] || 0; });

    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: report.type,
          data: data,
          backgroundColor: 'rgba(79, 70, 229, 0.2)',
          borderColor: '#4F46E5',
          borderWidth: 2,
          pointBackgroundColor: '#818CF8',
          pointBorderColor: '#fff',
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: { stepSize: 20, display: false },
            grid: { color: 'rgba(255,255,255,0.08)' },
            angleLines: { color: 'rgba(255,255,255,0.08)' },
            pointLabels: { font: { size: 14, weight: '600' } }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  function renderBarChart(report) {
    var ctx = document.getElementById('bar-chart');
    if (!ctx) return;

    var p = report.percentages;
    var labels = [];
    var dataFirst = [];
    var dataSecond = [];

    ['EI', 'SN', 'TF', 'JP'].forEach(function(dim) {
      labels.push(p[dim].first.letter + ' vs ' + p[dim].second.letter);
      dataFirst.push(p[dim].first.percentage);
      dataSecond.push(p[dim].second.percentage);
    });

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: labels.map(function(l) { return l.split(' vs ')[0]; }),
            data: dataFirst,
            backgroundColor: 'rgba(79, 70, 229, 0.7)',
            borderColor: '#4F46E5',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: labels.map(function(l) { return l.split(' vs ')[1]; }),
            data: dataSecond,
            backgroundColor: 'rgba(244, 114, 182, 0.7)',
            borderColor: '#F472B6',
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true, max: 100 }
        },
        plugins: {
          legend: { display: true }
        }
      }
    });
  }

  function renderDoughnutCharts(report) {
    var dims = [
      { id: 'doughnut-ei', dim: 'EI' },
      { id: 'doughnut-sn', dim: 'SN' },
      { id: 'doughnut-tf', dim: 'TF' },
      { id: 'doughnut-jp', dim: 'JP' }
    ];

    dims.forEach(function(d) {
      var ctx = document.getElementById(d.id);
      if (!ctx) return;

      var p = report.percentages[d.dim];

      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [p.first.letter, p.second.letter],
          datasets: [{
            data: [p.first.percentage, p.second.percentage],
            backgroundColor: ['rgba(79, 70, 229, 0.8)', 'rgba(244, 114, 182, 0.8)'],
            borderColor: ['#4F46E5', '#F472B6'],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          cutout: '65%',
          plugins: {
            legend: { position: 'bottom' },
            title: {
              display: true,
              text: p.first.letter + ' vs ' + p.second.letter,
              font: { size: 16, weight: '600' }
            }
          }
        }
      });
    });
  }
})();
