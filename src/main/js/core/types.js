/**
 * MBTI Type Data Module
 * Contains detailed information for all 16 MBTI personality types
 * with translations in English, Traditional Chinese, and Simplified Chinese.
 *
 * @namespace window.MBTI.types
 */
(function () {
  'use strict';

  window.MBTI = window.MBTI || {};

  window.MBTI.types = {

    // ============================================================
    // ANALYSTS (NT)
    // ============================================================

    'INTJ': {
      name: {
        en: 'The Architect',
        'zh-TW': '建築師',
        'zh-CN': '建筑师'
      },
      description: {
        en: 'INTJs are strategic and independent thinkers who thrive on turning complex ideas into actionable plans. They are driven by an inner vision and pursue their goals with relentless determination and originality.',
        'zh-TW': 'INTJ 是具有戰略眼光和獨立思維的人，擅長將複雜的想法轉化為可執行的計劃。他們受內在願景驅動，以堅定的決心和獨創性追求目標。',
        'zh-CN': 'INTJ 是具有战略眼光和独立思维的人，擅长将复杂的想法转化为可执行的计划。他们受内在愿景驱动，以坚定的决心和独创性追求目标。'
      },
      strengths: {
        en: ['Strategic', 'Independent', 'Determined', 'Innovative', 'Analytical'],
        'zh-TW': ['具戰略眼光', '獨立自主', '意志堅定', '富有創新', '善於分析'],
        'zh-CN': ['具战略眼光', '独立自主', '意志坚定', '富有创新', '善于分析']
      },
      weaknesses: {
        en: ['Overly critical', 'Dismissive of emotions', 'Perfectionistic', 'Socially reserved'],
        'zh-TW': ['過度批判', '忽視情感', '完美主義', '社交保守'],
        'zh-CN': ['过度批判', '忽视情感', '完美主义', '社交保守']
      },
      careers: {
        en: ['Scientist', 'Engineer', 'Strategic Planner', 'Software Architect', 'Investment Analyst', 'Professor'],
        'zh-TW': ['科學家', '工程師', '策略規劃師', '軟體架構師', '投資分析師', '教授'],
        'zh-CN': ['科学家', '工程师', '策略规划师', '软件架构师', '投资分析师', '教授']
      },
      compatibility: ['ENFP', 'ENTP'],
      cognitiveStack: ['Ni', 'Te', 'Fi', 'Se'],
      famousPeople: ['Elon Musk', 'Isaac Newton', 'Friedrich Nietzsche'],
      growth: {
        en: 'Practice patience with others and learn to value emotional connections. Opening up to vulnerability can deepen your relationships and broaden your perspective.',
        'zh-TW': '練習對他人保持耐心，學會重視情感連結。對脆弱的開放態度能深化你的人際關係並拓寬視野。',
        'zh-CN': '练习对他人保持耐心，学会重视情感连结。对脆弱的开放态度能深化你的人际关系并拓宽视野。'
      }
    },

    'INTP': {
      name: {
        en: 'The Logician',
        'zh-TW': '邏輯學家',
        'zh-CN': '逻辑学家'
      },
      description: {
        en: 'INTPs are inventive and curious thinkers who love exploring abstract theories and ideas. They seek to understand the fundamental principles behind everything and value logical consistency above all.',
        'zh-TW': 'INTP 是富有創造力和好奇心的思考者，熱愛探索抽象理論和想法。他們追求理解事物背後的基本原理，最重視邏輯一致性。',
        'zh-CN': 'INTP 是富有创造力和好奇心的思考者，热爱探索抽象理论和想法。他们追求理解事物背后的基本原理，最重视逻辑一致性。'
      },
      strengths: {
        en: ['Analytical', 'Objective', 'Imaginative', 'Original', 'Open-minded'],
        'zh-TW': ['善於分析', '客觀理性', '富有想像力', '獨具原創', '思想開放'],
        'zh-CN': ['善于分析', '客观理性', '富有想象力', '独具原创', '思想开放']
      },
      weaknesses: {
        en: ['Absent-minded', 'Insensitive', 'Prone to procrastination', 'Difficulty with practical matters'],
        'zh-TW': ['心不在焉', '不夠敏感', '容易拖延', '不擅處理實務'],
        'zh-CN': ['心不在焉', '不够敏感', '容易拖延', '不擅处理实务']
      },
      careers: {
        en: ['Philosopher', 'Software Developer', 'Mathematician', 'Research Scientist', 'Data Analyst', 'Technical Writer'],
        'zh-TW': ['哲學家', '軟體開發者', '數學家', '研究科學家', '數據分析師', '技術作家'],
        'zh-CN': ['哲学家', '软件开发者', '数学家', '研究科学家', '数据分析师', '技术作家']
      },
      compatibility: ['ENTJ', 'ENFJ'],
      cognitiveStack: ['Ti', 'Ne', 'Si', 'Fe'],
      famousPeople: ['Albert Einstein', 'Charles Darwin', 'Marie Curie'],
      growth: {
        en: 'Work on following through with your ideas and translating them into action. Building consistent habits and engaging with your emotions will help you grow.',
        'zh-TW': '努力將想法付諸實踐並轉化為行動。建立一致的習慣並面對自己的情感將幫助你成長。',
        'zh-CN': '努力将想法付诸实践并转化为行动。建立一致的习惯并面对自己的情感将帮助你成长。'
      }
    },

    'ENTJ': {
      name: {
        en: 'The Commander',
        'zh-TW': '指揮官',
        'zh-CN': '指挥官'
      },
      description: {
        en: 'ENTJs are bold and decisive leaders who excel at organizing people and resources to achieve ambitious goals. They are natural strategists who see inefficiency as a challenge to overcome.',
        'zh-TW': 'ENTJ 是大膽果斷的領導者，擅長組織人力和資源來實現宏大目標。他們是天生的策略家，將低效視為需要克服的挑戰。',
        'zh-CN': 'ENTJ 是大胆果断的领导者，擅长组织人力和资源来实现宏大目标。他们是天生的策略家，将低效视为需要克服的挑战。'
      },
      strengths: {
        en: ['Efficient', 'Confident', 'Strong-willed', 'Strategic', 'Charismatic'],
        'zh-TW': ['高效率', '自信果斷', '意志堅強', '具戰略思維', '富有魅力'],
        'zh-CN': ['高效率', '自信果断', '意志坚强', '具战略思维', '富有魅力']
      },
      weaknesses: {
        en: ['Stubborn', 'Intolerant', 'Impatient', 'Emotionally distant'],
        'zh-TW': ['固執己見', '缺乏包容', '缺乏耐心', '情感疏離'],
        'zh-CN': ['固执己见', '缺乏包容', '缺乏耐心', '情感疏离']
      },
      careers: {
        en: ['CEO', 'Management Consultant', 'Lawyer', 'Entrepreneur', 'University Administrator', 'Financial Manager'],
        'zh-TW': ['執行長', '管理顧問', '律師', '企業家', '大學行政主管', '財務經理'],
        'zh-CN': ['执行长', '管理顾问', '律师', '企业家', '大学行政主管', '财务经理']
      },
      compatibility: ['INTP', 'INFP'],
      cognitiveStack: ['Te', 'Ni', 'Se', 'Fi'],
      famousPeople: ['Steve Jobs', 'Margaret Thatcher', 'Napoleon Bonaparte'],
      growth: {
        en: 'Learn to slow down and listen to others\' perspectives. Developing empathy and patience will make you a more effective and inspiring leader.',
        'zh-TW': '學會放慢腳步，傾聽他人的觀點。培養同理心和耐心將使你成為更有效和更具啟發性的領導者。',
        'zh-CN': '学会放慢脚步，倾听他人的观点。培养同理心和耐心将使你成为更有效和更具启发性的领导者。'
      }
    },

    'ENTP': {
      name: {
        en: 'The Debater',
        'zh-TW': '辯論家',
        'zh-CN': '辩论家'
      },
      description: {
        en: 'ENTPs are quick-witted and inventive thinkers who love intellectual challenges and spirited debate. They excel at seeing possibilities and are driven by a desire to understand and innovate.',
        'zh-TW': 'ENTP 是機智敏捷的創新思考者，熱愛智識挑戰和激烈辯論。他們擅長發現可能性，受理解和創新的渴望所驅動。',
        'zh-CN': 'ENTP 是机智敏捷的创新思考者，热爱智识挑战和激烈辩论。他们擅长发现可能性，受理解和创新的渴望所驱动。'
      },
      strengths: {
        en: ['Quick-witted', 'Knowledgeable', 'Charismatic', 'Energetic', 'Resourceful'],
        'zh-TW': ['機智敏捷', '學識淵博', '富有魅力', '精力充沛', '足智多謀'],
        'zh-CN': ['机智敏捷', '学识渊博', '富有魅力', '精力充沛', '足智多谋']
      },
      weaknesses: {
        en: ['Argumentative', 'Easily bored', 'Insensitive', 'Difficulty with follow-through'],
        'zh-TW': ['好辯好爭', '容易厭倦', '不夠敏感', '難以堅持到底'],
        'zh-CN': ['好辩好争', '容易厌倦', '不够敏感', '难以坚持到底']
      },
      careers: {
        en: ['Entrepreneur', 'Lawyer', 'Creative Director', 'Political Strategist', 'Venture Capitalist', 'Journalist'],
        'zh-TW': ['企業家', '律師', '創意總監', '政治策略師', '風險投資家', '記者'],
        'zh-CN': ['企业家', '律师', '创意总监', '政治策略师', '风险投资家', '记者']
      },
      compatibility: ['INTJ', 'INFJ'],
      cognitiveStack: ['Ne', 'Ti', 'Fe', 'Si'],
      famousPeople: ['Thomas Edison', 'Benjamin Franklin', 'Mark Twain'],
      growth: {
        en: 'Practice following through on your commitments and be mindful of others\' feelings during debates. Developing focus and emotional awareness will help you achieve your potential.',
        'zh-TW': '練習兌現承諾，在辯論中注意他人的感受。培養專注力和情感意識將幫助你發揮潛能。',
        'zh-CN': '练习兑现承诺，在辩论中注意他人的感受。培养专注力和情感意识将帮助你发挥潜能。'
      }
    },

    // ============================================================
    // DIPLOMATS (NF)
    // ============================================================

    'INFJ': {
      name: {
        en: 'The Advocate',
        'zh-TW': '提倡者',
        'zh-CN': '提倡者'
      },
      description: {
        en: 'INFJs are insightful and idealistic individuals who are driven by a deep sense of purpose. They combine empathy with vision to inspire change and help others reach their potential.',
        'zh-TW': 'INFJ 是富有洞察力和理想主義的人，受深層使命感驅動。他們結合同理心與遠見來激發變革，幫助他人發揮潛能。',
        'zh-CN': 'INFJ 是富有洞察力和理想主义的人，受深层使命感驱动。他们结合同理心与远见来激发变革，帮助他人发挥潜能。'
      },
      strengths: {
        en: ['Insightful', 'Principled', 'Compassionate', 'Creative', 'Decisive'],
        'zh-TW': ['富有洞察力', '堅守原則', '富有同情心', '富有創造力', '果斷堅決'],
        'zh-CN': ['富有洞察力', '坚守原则', '富有同情心', '富有创造力', '果断坚决']
      },
      weaknesses: {
        en: ['Perfectionistic', 'Overly private', 'Prone to burnout', 'Overly sensitive'],
        'zh-TW': ['完美主義', '過度封閉', '容易倦怠', '過度敏感'],
        'zh-CN': ['完美主义', '过度封闭', '容易倦怠', '过度敏感']
      },
      careers: {
        en: ['Counselor', 'Psychologist', 'Writer', 'Humanitarian Worker', 'Teacher', 'Social Worker'],
        'zh-TW': ['諮詢師', '心理學家', '作家', '人道主義工作者', '教師', '社工'],
        'zh-CN': ['咨询师', '心理学家', '作家', '人道主义工作者', '教师', '社工']
      },
      compatibility: ['ENTP', 'ENFP'],
      cognitiveStack: ['Ni', 'Fe', 'Ti', 'Se'],
      famousPeople: ['Martin Luther King Jr.', 'Nelson Mandela', 'Mother Teresa'],
      growth: {
        en: 'Set healthy boundaries and remember to take care of your own needs. Learning to accept imperfection in yourself and others will bring greater inner peace.',
        'zh-TW': '設定健康的界限，記得照顧自己的需求。學會接受自己和他人的不完美將帶來更大的內心平靜。',
        'zh-CN': '设定健康的界限，记得照顾自己的需求。学会接受自己和他人的不完美将带来更大的内心平静。'
      }
    },

    'INFP': {
      name: {
        en: 'The Mediator',
        'zh-TW': '調停者',
        'zh-CN': '调停者'
      },
      description: {
        en: 'INFPs are imaginative and empathetic idealists guided by their own core values and beliefs. They seek meaning and authenticity in all they do and are passionate about making the world a better place.',
        'zh-TW': 'INFP 是富有想像力和同理心的理想主義者，以自身核心價值觀和信念為指引。他們在所做的一切中尋求意義和真實性，熱衷於讓世界變得更好。',
        'zh-CN': 'INFP 是富有想象力和同理心的理想主义者，以自身核心价值观和信念为指引。他们在所做的一切中寻求意义和真实性，热衷于让世界变得更好。'
      },
      strengths: {
        en: ['Empathetic', 'Creative', 'Idealistic', 'Open-minded', 'Passionate'],
        'zh-TW': ['富有同理心', '富有創造力', '理想主義', '思想開放', '充滿熱情'],
        'zh-CN': ['富有同理心', '富有创造力', '理想主义', '思想开放', '充满热情']
      },
      weaknesses: {
        en: ['Overly idealistic', 'Self-isolating', 'Emotionally vulnerable', 'Difficulty with practical tasks'],
        'zh-TW': ['過度理想化', '自我封閉', '情感脆弱', '不擅處理實務'],
        'zh-CN': ['过度理想化', '自我封闭', '情感脆弱', '不擅处理实务']
      },
      careers: {
        en: ['Writer', 'Artist', 'Counselor', 'Librarian', 'Graphic Designer', 'Musician'],
        'zh-TW': ['作家', '藝術家', '諮詢師', '圖書館員', '平面設計師', '音樂家'],
        'zh-CN': ['作家', '艺术家', '咨询师', '图书馆员', '平面设计师', '音乐家']
      },
      compatibility: ['ENTJ', 'ENFJ'],
      cognitiveStack: ['Fi', 'Ne', 'Si', 'Te'],
      famousPeople: ['William Shakespeare', 'J.R.R. Tolkien', 'Princess Diana'],
      growth: {
        en: 'Work on grounding your ideals in practical action. Building structure and routine will help you turn your beautiful visions into tangible realities.',
        'zh-TW': '努力將理想落實於實際行動中。建立結構和日常規律將幫助你把美好的願景轉化為具體現實。',
        'zh-CN': '努力将理想落实于实际行动中。建立结构和日常规律将帮助你把美好的愿景转化为具体现实。'
      }
    },

    'ENFJ': {
      name: {
        en: 'The Protagonist',
        'zh-TW': '主人公',
        'zh-CN': '主人公'
      },
      description: {
        en: 'ENFJs are warm and charismatic leaders who naturally inspire and uplift those around them. They are deeply attuned to the needs of others and are driven to help people grow and succeed.',
        'zh-TW': 'ENFJ 是溫暖且富有魅力的領導者，天生能激勵和鼓舞周圍的人。他們深刻理解他人的需求，致力於幫助人們成長和成功。',
        'zh-CN': 'ENFJ 是温暖且富有魅力的领导者，天生能激励和鼓舞周围的人。他们深刻理解他人的需求，致力于帮助人们成长和成功。'
      },
      strengths: {
        en: ['Charismatic', 'Empathetic', 'Organized', 'Inspiring', 'Altruistic'],
        'zh-TW': ['富有魅力', '富有同理心', '有條理', '鼓舞人心', '利他主義'],
        'zh-CN': ['富有魅力', '富有同理心', '有条理', '鼓舞人心', '利他主义']
      },
      weaknesses: {
        en: ['Overly selfless', 'Too idealistic', 'Overly sensitive to criticism', 'Difficulty making tough decisions'],
        'zh-TW': ['過度無私', '過於理想化', '對批評過度敏感', '難以做出艱難決定'],
        'zh-CN': ['过度无私', '过于理想化', '对批评过度敏感', '难以做出艰难决定']
      },
      careers: {
        en: ['Teacher', 'HR Manager', 'Life Coach', 'Public Relations Specialist', 'Non-profit Director', 'Diplomat'],
        'zh-TW': ['教師', '人力資源經理', '生涯教練', '公關專員', '非營利組織總監', '外交官'],
        'zh-CN': ['教师', '人力资源经理', '生涯教练', '公关专员', '非营利组织总监', '外交官']
      },
      compatibility: ['INTP', 'INFP'],
      cognitiveStack: ['Fe', 'Ni', 'Se', 'Ti'],
      famousPeople: ['Barack Obama', 'Oprah Winfrey', 'Martin Luther King Jr.'],
      growth: {
        en: 'Remember to prioritize your own well-being alongside helping others. Learning to say no and setting boundaries will prevent burnout and sustain your positive impact.',
        'zh-TW': '記得在幫助他人的同時優先照顧自己的身心健康。學會說不和設定界限將防止倦怠，維持你的正面影響力。',
        'zh-CN': '记得在帮助他人的同时优先照顾自己的身心健康。学会说不和设定界限将防止倦怠，维持你的正面影响力。'
      }
    },

    'ENFP': {
      name: {
        en: 'The Campaigner',
        'zh-TW': '競選者',
        'zh-CN': '竞选者'
      },
      description: {
        en: 'ENFPs are enthusiastic and creative free spirits who see life as full of possibilities. They are warm, imaginative, and deeply caring, always looking for deeper meaning and authentic connections.',
        'zh-TW': 'ENFP 是充滿熱情和創造力的自由靈魂，視生活為充滿可能性。他們溫暖、富有想像力且深切關懷他人，總是尋找更深的意義和真誠的連結。',
        'zh-CN': 'ENFP 是充满热情和创造力的自由灵魂，视生活为充满可能性。他们温暖、富有想象力且深切关怀他人，总是寻找更深的意义和真诚的连结。'
      },
      strengths: {
        en: ['Enthusiastic', 'Creative', 'Sociable', 'Perceptive', 'Optimistic'],
        'zh-TW': ['充滿熱情', '富有創造力', '善於社交', '敏銳洞察', '樂觀積極'],
        'zh-CN': ['充满热情', '富有创造力', '善于社交', '敏锐洞察', '乐观积极']
      },
      weaknesses: {
        en: ['Easily distracted', 'Disorganized', 'Overly accommodating', 'Difficulty with routine'],
        'zh-TW': ['容易分心', '缺乏條理', '過度遷就', '難以遵循常規'],
        'zh-CN': ['容易分心', '缺乏条理', '过度迁就', '难以遵循常规']
      },
      careers: {
        en: ['Journalist', 'Actor', 'Marketing Specialist', 'Counselor', 'Event Planner', 'Creative Writer'],
        'zh-TW': ['記者', '演員', '行銷專員', '諮詢師', '活動策劃', '創意作家'],
        'zh-CN': ['记者', '演员', '营销专员', '咨询师', '活动策划', '创意作家']
      },
      compatibility: ['INTJ', 'INFJ'],
      cognitiveStack: ['Ne', 'Fi', 'Te', 'Si'],
      famousPeople: ['Robin Williams', 'Walt Disney', 'Robert Downey Jr.'],
      growth: {
        en: 'Develop discipline to follow through on your many ideas and commitments. Grounding yourself with routines and prioritization will help you channel your creativity effectively.',
        'zh-TW': '培養紀律以堅持完成你眾多的想法和承諾。用常規和優先排序來穩定自己，將幫助你有效地發揮創造力。',
        'zh-CN': '培养纪律以坚持完成你众多的想法和承诺。用常规和优先排序来稳定自己，将帮助你有效地发挥创造力。'
      }
    },

    // ============================================================
    // SENTINELS (SJ)
    // ============================================================

    'ISTJ': {
      name: {
        en: 'The Logistician',
        'zh-TW': '物流師',
        'zh-CN': '物流师'
      },
      description: {
        en: 'ISTJs are reliable and methodical individuals who value tradition, order, and responsibility. They are thorough in everything they do and take pride in their strong work ethic and integrity.',
        'zh-TW': 'ISTJ 是可靠且有條理的人，重視傳統、秩序和責任。他們做事徹底，以強烈的職業道德和正直品格為傲。',
        'zh-CN': 'ISTJ 是可靠且有条理的人，重视传统、秩序和责任。他们做事彻底，以强烈的职业道德和正直品格为傲。'
      },
      strengths: {
        en: ['Responsible', 'Thorough', 'Dependable', 'Honest', 'Patient'],
        'zh-TW': ['負責任', '做事徹底', '值得信賴', '誠實正直', '有耐心'],
        'zh-CN': ['负责任', '做事彻底', '值得信赖', '诚实正直', '有耐心']
      },
      weaknesses: {
        en: ['Stubborn', 'Inflexible', 'Judgmental', 'Resistant to change'],
        'zh-TW': ['固執己見', '缺乏彈性', '愛批判', '抗拒改變'],
        'zh-CN': ['固执己见', '缺乏弹性', '爱批判', '抗拒改变']
      },
      careers: {
        en: ['Accountant', 'Auditor', 'Military Officer', 'Judge', 'Systems Administrator', 'Financial Analyst'],
        'zh-TW': ['會計師', '審計師', '軍官', '法官', '系統管理員', '財務分析師'],
        'zh-CN': ['会计师', '审计师', '军官', '法官', '系统管理员', '财务分析师']
      },
      compatibility: ['ESFP', 'ESTP'],
      cognitiveStack: ['Si', 'Te', 'Fi', 'Ne'],
      famousPeople: ['George Washington', 'Queen Elizabeth II', 'Warren Buffett'],
      growth: {
        en: 'Practice being more open to new experiences and different perspectives. Embracing flexibility and spontaneity can enrich your life in unexpected ways.',
        'zh-TW': '練習更開放地接受新體驗和不同觀點。擁抱彈性和自發性能以意想不到的方式豐富你的生活。',
        'zh-CN': '练习更开放地接受新体验和不同观点。拥抱弹性和自发性能以意想不到的方式丰富你的生活。'
      }
    },

    'ISFJ': {
      name: {
        en: 'The Defender',
        'zh-TW': '守衛者',
        'zh-CN': '守卫者'
      },
      description: {
        en: 'ISFJs are warm and dedicated protectors who quietly care for the people and traditions they cherish. They are observant, loyal, and always ready to support those in need with practical help.',
        'zh-TW': 'ISFJ 是溫暖且盡心盡力的守護者，默默關懷他們珍視的人和傳統。他們觀察力強、忠誠可靠，總是準備好以實際行動支持有需要的人。',
        'zh-CN': 'ISFJ 是温暖且尽心尽力的守护者，默默关怀他们珍视的人和传统。他们观察力强、忠诚可靠，总是准备好以实际行动支持有需要的人。'
      },
      strengths: {
        en: ['Supportive', 'Reliable', 'Observant', 'Loyal', 'Hardworking'],
        'zh-TW': ['樂於助人', '可靠踏實', '善於觀察', '忠誠可靠', '勤勉努力'],
        'zh-CN': ['乐于助人', '可靠踏实', '善于观察', '忠诚可靠', '勤勉努力']
      },
      weaknesses: {
        en: ['Overly humble', 'Resistant to change', 'Difficulty saying no', 'Represses feelings'],
        'zh-TW': ['過度謙遜', '抗拒改變', '難以拒絕', '壓抑情感'],
        'zh-CN': ['过度谦逊', '抗拒改变', '难以拒绝', '压抑情感']
      },
      careers: {
        en: ['Nurse', 'Elementary Teacher', 'Social Worker', 'Office Manager', 'Librarian', 'Veterinarian'],
        'zh-TW': ['護理師', '小學教師', '社工', '辦公室經理', '圖書館員', '獸醫'],
        'zh-CN': ['护理师', '小学教师', '社工', '办公室经理', '图书馆员', '兽医']
      },
      compatibility: ['ESFP', 'ESTP'],
      cognitiveStack: ['Si', 'Fe', 'Ti', 'Ne'],
      famousPeople: ['Queen Victoria', 'Rosa Parks', 'Aretha Franklin'],
      growth: {
        en: 'Learn to express your own needs and stand up for yourself. Recognizing that taking care of yourself is not selfish will allow you to give even more to others.',
        'zh-TW': '學會表達自己的需求並為自己挺身而出。認識到照顧自己並非自私，將讓你能為他人付出更多。',
        'zh-CN': '学会表达自己的需求并为自己挺身而出。认识到照顾自己并非自私，将让你能为他人付出更多。'
      }
    },

    'ESTJ': {
      name: {
        en: 'The Executive',
        'zh-TW': '總經理',
        'zh-CN': '总经理'
      },
      description: {
        en: 'ESTJs are organized and principled leaders who excel at managing people and projects with clarity and fairness. They value order, tradition, and getting things done the right way.',
        'zh-TW': 'ESTJ 是有條理且有原則的領導者，擅長以清晰和公正的方式管理人員和項目。他們重視秩序、傳統和正確地完成任務。',
        'zh-CN': 'ESTJ 是有条理且有原则的领导者，擅长以清晰和公正的方式管理人员和项目。他们重视秩序、传统和正确地完成任务。'
      },
      strengths: {
        en: ['Organized', 'Dedicated', 'Strong-willed', 'Direct', 'Loyal'],
        'zh-TW': ['有條理', '盡職盡責', '意志堅強', '直接坦率', '忠誠可靠'],
        'zh-CN': ['有条理', '尽职尽责', '意志坚强', '直接坦率', '忠诚可靠']
      },
      weaknesses: {
        en: ['Inflexible', 'Uncomfortable with emotions', 'Judgmental', 'Too focused on social status'],
        'zh-TW': ['缺乏彈性', '不擅處理情感', '愛批判', '過度在意社會地位'],
        'zh-CN': ['缺乏弹性', '不擅处理情感', '爱批判', '过度在意社会地位']
      },
      careers: {
        en: ['Business Manager', 'Judge', 'Police Officer', 'School Principal', 'Financial Officer', 'Military Leader'],
        'zh-TW': ['企業經理', '法官', '警察', '校長', '財務長', '軍事領導'],
        'zh-CN': ['企业经理', '法官', '警察', '校长', '财务长', '军事领导']
      },
      compatibility: ['ISFP', 'ISTP'],
      cognitiveStack: ['Te', 'Si', 'Ne', 'Fi'],
      famousPeople: ['Henry Ford', 'Sonia Sotomayor', 'John D. Rockefeller'],
      growth: {
        en: 'Practice listening to and valuing the emotional perspectives of others. Being more open to unconventional approaches will expand your effectiveness as a leader.',
        'zh-TW': '練習傾聽和重視他人的情感觀點。對非傳統方法更加開放將擴展你作為領導者的效力。',
        'zh-CN': '练习倾听和重视他人的情感观点。对非传统方法更加开放将扩展你作为领导者的效力。'
      }
    },

    'ESFJ': {
      name: {
        en: 'The Consul',
        'zh-TW': '執政官',
        'zh-CN': '执政官'
      },
      description: {
        en: 'ESFJs are caring and sociable individuals who thrive on creating harmony and helping others. They are attentive to people\'s needs and work hard to ensure everyone around them feels valued and included.',
        'zh-TW': 'ESFJ 是關懷他人且善於社交的人，在創造和諧和幫助他人中茁壯。他們關注他人的需求，努力確保周圍的每個人都感到被重視和被包容。',
        'zh-CN': 'ESFJ 是关怀他人且善于社交的人，在创造和谐和帮助他人中茁壮。他们关注他人的需求，努力确保周围的每个人都感到被重视和被包容。'
      },
      strengths: {
        en: ['Caring', 'Sociable', 'Loyal', 'Responsible', 'Warm'],
        'zh-TW': ['關懷他人', '善於社交', '忠誠可靠', '負責任', '溫暖親切'],
        'zh-CN': ['关怀他人', '善于社交', '忠诚可靠', '负责任', '温暖亲切']
      },
      weaknesses: {
        en: ['Needy for approval', 'Sensitive to criticism', 'Reluctant to change', 'Controlling'],
        'zh-TW': ['渴望認同', '對批評敏感', '不願改變', '控制欲強'],
        'zh-CN': ['渴望认同', '对批评敏感', '不愿改变', '控制欲强']
      },
      careers: {
        en: ['Healthcare Worker', 'Event Coordinator', 'Receptionist', 'Counselor', 'Teacher', 'Human Resources'],
        'zh-TW': ['醫療工作者', '活動協調員', '接待員', '諮詢師', '教師', '人力資源'],
        'zh-CN': ['医疗工作者', '活动协调员', '接待员', '咨询师', '教师', '人力资源']
      },
      compatibility: ['ISFP', 'ISTP'],
      cognitiveStack: ['Fe', 'Si', 'Ne', 'Ti'],
      famousPeople: ['Taylor Swift', 'Bill Clinton', 'Jennifer Garner'],
      growth: {
        en: 'Learn to value your own opinions even when they differ from the group. Building independence and resilience to criticism will strengthen your confidence.',
        'zh-TW': '學會重視自己的意見，即使與群體不同。培養獨立性和對批評的韌性將增強你的自信。',
        'zh-CN': '学会重视自己的意见，即使与群体不同。培养独立性和对批评的韧性将增强你的自信。'
      }
    },

    // ============================================================
    // EXPLORERS (SP)
    // ============================================================

    'ISTP': {
      name: {
        en: 'The Virtuoso',
        'zh-TW': '鑑賞家',
        'zh-CN': '鉴赏家'
      },
      description: {
        en: 'ISTPs are practical and observant problem-solvers who love understanding how things work. They are hands-on individuals who approach life with quiet curiosity and a talent for troubleshooting.',
        'zh-TW': 'ISTP 是務實且善於觀察的問題解決者，熱愛理解事物的運作原理。他們是動手能力強的人，以安靜的好奇心和排除故障的天賦來面對生活。',
        'zh-CN': 'ISTP 是务实且善于观察的问题解决者，热爱理解事物的运作原理。他们是动手能力强的人，以安静的好奇心和排除故障的天赋来面对生活。'
      },
      strengths: {
        en: ['Practical', 'Observant', 'Resourceful', 'Calm under pressure', 'Adaptable'],
        'zh-TW': ['務實', '善於觀察', '足智多謀', '臨危不亂', '適應力強'],
        'zh-CN': ['务实', '善于观察', '足智多谋', '临危不乱', '适应力强']
      },
      weaknesses: {
        en: ['Emotionally reserved', 'Risk-prone', 'Difficulty with commitment', 'Insensitive'],
        'zh-TW': ['情感內斂', '愛冒險', '難以承諾', '不夠敏感'],
        'zh-CN': ['情感内敛', '爱冒险', '难以承诺', '不够敏感']
      },
      careers: {
        en: ['Mechanic', 'Engineer', 'Pilot', 'Forensic Scientist', 'Carpenter', 'Emergency Medical Technician'],
        'zh-TW': ['技工', '工程師', '飛行員', '法醫科學家', '木匠', '急救技術員'],
        'zh-CN': ['技工', '工程师', '飞行员', '法医科学家', '木匠', '急救技术员']
      },
      compatibility: ['ESTJ', 'ESFJ'],
      cognitiveStack: ['Ti', 'Se', 'Ni', 'Fe'],
      famousPeople: ['Bruce Lee', 'Clint Eastwood', 'Amelia Earhart'],
      growth: {
        en: 'Practice opening up emotionally and expressing your feelings to those you trust. Developing long-term commitments will bring stability and deeper fulfillment to your life.',
        'zh-TW': '練習在情感上敞開心扉，向信任的人表達感受。建立長期承諾將為你的生活帶來穩定和更深層的滿足。',
        'zh-CN': '练习在情感上敞开心扉，向信任的人表达感受。建立长期承诺将为你的生活带来稳定和更深层的满足。'
      }
    },

    'ISFP': {
      name: {
        en: 'The Adventurer',
        'zh-TW': '探險家',
        'zh-CN': '探险家'
      },
      description: {
        en: 'ISFPs are gentle and artistic souls who experience life through their senses and emotions. They value personal freedom, authenticity, and beauty, and express themselves through creative actions rather than words.',
        'zh-TW': 'ISFP 是溫和且富有藝術氣質的靈魂，透過感官和情感體驗生活。他們重視個人自由、真實性和美感，透過創造性行動而非言語表達自己。',
        'zh-CN': 'ISFP 是温和且富有艺术气质的灵魂，透过感官和情感体验生活。他们重视个人自由、真实性和美感，透过创造性行动而非言语表达自己。'
      },
      strengths: {
        en: ['Artistic', 'Sensitive', 'Charming', 'Passionate', 'Curious'],
        'zh-TW': ['富有藝術感', '敏感細膩', '迷人親和', '充滿熱情', '充滿好奇'],
        'zh-CN': ['富有艺术感', '敏感细腻', '迷人亲和', '充满热情', '充满好奇']
      },
      weaknesses: {
        en: ['Overly competitive', 'Unpredictable', 'Easily stressed', 'Avoids conflict'],
        'zh-TW': ['過度好勝', '難以預測', '容易緊張', '逃避衝突'],
        'zh-CN': ['过度好胜', '难以预测', '容易紧张', '逃避冲突']
      },
      careers: {
        en: ['Artist', 'Fashion Designer', 'Chef', 'Veterinarian', 'Photographer', 'Landscape Architect'],
        'zh-TW': ['藝術家', '時裝設計師', '廚師', '獸醫', '攝影師', '景觀設計師'],
        'zh-CN': ['艺术家', '时装设计师', '厨师', '兽医', '摄影师', '景观设计师']
      },
      compatibility: ['ESTJ', 'ESFJ'],
      cognitiveStack: ['Fi', 'Se', 'Ni', 'Te'],
      famousPeople: ['Bob Dylan', 'Frida Kahlo', 'David Bowie'],
      growth: {
        en: 'Challenge yourself to plan for the future and address conflicts directly. Building assertiveness and long-term thinking will complement your natural creativity.',
        'zh-TW': '挑戰自己為未來做規劃並直接面對衝突。培養自信和長遠思維將補充你天生的創造力。',
        'zh-CN': '挑战自己为未来做规划并直接面对冲突。培养自信和长远思维将补充你天生的创造力。'
      }
    },

    'ESTP': {
      name: {
        en: 'The Entrepreneur',
        'zh-TW': '企業家',
        'zh-CN': '企业家'
      },
      description: {
        en: 'ESTPs are energetic and action-oriented individuals who thrive in the moment. They are perceptive, pragmatic, and bold, with a natural talent for reading people and seizing opportunities.',
        'zh-TW': 'ESTP 是精力充沛且注重行動的人，在當下的體驗中茁壯。他們敏銳、務實且大膽，天生擅長洞察人心和把握機會。',
        'zh-CN': 'ESTP 是精力充沛且注重行动的人，在当下的体验中茁壮。他们敏锐、务实且大胆，天生擅长洞察人心和把握机会。'
      },
      strengths: {
        en: ['Bold', 'Perceptive', 'Direct', 'Sociable', 'Practical'],
        'zh-TW': ['大膽果敢', '敏銳洞察', '直接坦率', '善於社交', '務實'],
        'zh-CN': ['大胆果敢', '敏锐洞察', '直接坦率', '善于社交', '务实']
      },
      weaknesses: {
        en: ['Impatient', 'Risk-prone', 'Unstructured', 'Difficulty with long-term planning'],
        'zh-TW': ['缺乏耐心', '愛冒險', '缺乏組織', '不擅長期規劃'],
        'zh-CN': ['缺乏耐心', '爱冒险', '缺乏组织', '不擅长期规划']
      },
      careers: {
        en: ['Sales Manager', 'Paramedic', 'Entrepreneur', 'Detective', 'Sports Coach', 'Stockbroker'],
        'zh-TW': ['銷售經理', '急救員', '企業家', '偵探', '體育教練', '股票經紀人'],
        'zh-CN': ['销售经理', '急救员', '企业家', '侦探', '体育教练', '股票经纪人']
      },
      compatibility: ['ISTJ', 'ISFJ'],
      cognitiveStack: ['Se', 'Ti', 'Fe', 'Ni'],
      famousPeople: ['Ernest Hemingway', 'Madonna', 'Winston Churchill'],
      growth: {
        en: 'Develop patience and work on considering the long-term consequences of your actions. Slowing down to reflect before acting will lead to more sustainable success.',
        'zh-TW': '培養耐心，努力考慮行動的長期後果。在行動前放慢腳步進行反思將帶來更持久的成功。',
        'zh-CN': '培养耐心，努力考虑行动的长期后果。在行动前放慢脚步进行反思将带来更持久的成功。'
      }
    },

    'ESFP': {
      name: {
        en: 'The Entertainer',
        'zh-TW': '表演者',
        'zh-CN': '表演者'
      },
      description: {
        en: 'ESFPs are spontaneous and vivacious people who bring energy and fun wherever they go. They are generous, warm, and love being the center of attention, always looking to make life enjoyable for everyone.',
        'zh-TW': 'ESFP 是自發且活潑的人，無論走到哪裡都帶來活力和歡樂。他們慷慨、溫暖，喜歡成為關注的焦點，總是想讓每個人都享受生活。',
        'zh-CN': 'ESFP 是自发且活泼的人，无论走到哪里都带来活力和欢乐。他们慷慨、温暖，喜欢成为关注的焦点，总是想让每个人都享受生活。'
      },
      strengths: {
        en: ['Energetic', 'Generous', 'Observant', 'Practical', 'Spontaneous'],
        'zh-TW': ['精力充沛', '慷慨大方', '善於觀察', '務實', '自發隨性'],
        'zh-CN': ['精力充沛', '慷慨大方', '善于观察', '务实', '自发随性']
      },
      weaknesses: {
        en: ['Easily bored', 'Sensitive', 'Poor long-term planner', 'Avoids conflict'],
        'zh-TW': ['容易厭倦', '過度敏感', '不擅長期規劃', '逃避衝突'],
        'zh-CN': ['容易厌倦', '过度敏感', '不擅长期规划', '逃避冲突']
      },
      careers: {
        en: ['Actor', 'Event Planner', 'Tour Guide', 'Fitness Trainer', 'Flight Attendant', 'Interior Designer'],
        'zh-TW': ['演員', '活動策劃', '導遊', '健身教練', '空服員', '室內設計師'],
        'zh-CN': ['演员', '活动策划', '导游', '健身教练', '空服员', '室内设计师']
      },
      compatibility: ['ISTJ', 'ISFJ'],
      cognitiveStack: ['Se', 'Fi', 'Te', 'Ni'],
      famousPeople: ['Marilyn Monroe', 'Elton John', 'Jamie Oliver'],
      growth: {
        en: 'Practice delaying gratification and thinking about future consequences. Developing deeper focus and the ability to sit with uncomfortable emotions will help you grow tremendously.',
        'zh-TW': '練習延遲滿足並思考未來的後果。培養更深的專注力和面對不舒服情緒的能力將幫助你極大地成長。',
        'zh-CN': '练习延迟满足并思考未来的后果。培养更深的专注力和面对不舒服情绪的能力将帮助你极大地成长。'
      }
    }

  };

})();
