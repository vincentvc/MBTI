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
      },
      communicationStyle: {
        en: 'INTJs communicate with precision and directness, preferring well-structured arguments over small talk. They value efficiency in conversation and may come across as blunt, but their intent is clarity, not rudeness. In collaborative settings, they excel at synthesizing complex ideas into actionable strategies.',
        'zh-TW': 'INTJ 溝通時精確且直接，偏好結構嚴謹的論述而非閒聊。他們重視對話的效率，可能顯得直言不諱，但其目的是追求清晰而非無禮。在合作環境中，他們擅長將複雜想法整合為可執行的策略。',
        'zh-CN': 'INTJ 沟通时精确且直接，偏好结构严谨的论述而非闲聊。他们重视对话的效率，可能显得直言不讳，但其目的是追求清晰而非无礼。在合作环境中，他们擅长将复杂想法整合为可执行的策略。'
      },
      relationshipDeepDive: {
        en: 'INTJs approach relationships with the same strategic mindset they apply to everything else. They seek intellectually stimulating partners who respect their need for independence. Emotionally, they may struggle to express affection openly, but they show love through problem-solving and long-term commitment. In friendships, they prefer a small circle of deep, meaningful connections over a wide social network.',
        'zh-TW': 'INTJ 以對待一切事物的策略性思維來經營人際關係。他們尋求能提供智識刺激且尊重其獨立需求的伴侶。在情感上，他們可能難以公開表達愛意，但會透過解決問題和長期承諾來展現愛。在友誼中，他們偏好少數深度且有意義的連結，而非廣泛的社交網絡。',
        'zh-CN': 'INTJ 以对待一切事物的策略性思维来经营人际关系。他们寻求能提供智识刺激且尊重其独立需求的伴侣。在情感上，他们可能难以公开表达爱意，但会通过解决问题和长期承诺来展现爱。在友谊中，他们偏好少数深度且有意义的连结，而非广泛的社交网络。'
      },
      blindSpots: {
        en: ['May not realize how their directness intimidates or hurts others', 'Tend to undervalue emotional intelligence and soft skills', 'Can be blind to the importance of social rituals and relationship maintenance', 'Often unaware that their high standards make others feel inadequate'],
        'zh-TW': ['可能未意識到自己的直率會嚇到或傷害他人', '傾向低估情商和軟技能的價值', '可能忽視社交禮儀和關係維護的重要性', '常不自覺其高標準讓他人感到不足'],
        'zh-CN': ['可能未意识到自己的直率会吓到或伤害他人', '倾向低估情商和软技能的价值', '可能忽视社交礼仪和关系维护的重要性', '常不自觉其高标准让他人感到不足']
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
      },
      communicationStyle: {
        en: 'INTPs communicate in a thoughtful, analytical manner, often pausing to formulate precise responses. They prefer deep, intellectually stimulating conversations and may struggle with small talk or emotionally charged discussions. In group settings, they contribute most effectively when given time to process and present their well-reasoned conclusions.',
        'zh-TW': 'INTP 以深思熟慮、分析性的方式溝通，常會停頓以組織精確的回應。他們偏好深度且具智識刺激的對話，可能不擅長閒聊或情緒性的討論。在團體中，當有時間消化並呈現經過深思的結論時，他們的貢獻最為有效。',
        'zh-CN': 'INTP 以深思熟虑、分析性的方式沟通，常会停顿以组织精确的回应。他们偏好深度且具智识刺激的对话，可能不擅长闲聊或情绪性的讨论。在团体中，当有时间消化并呈现经过深思的结论时，他们的贡献最为有效。'
      },
      relationshipDeepDive: {
        en: 'INTPs approach relationships with genuine curiosity but may appear emotionally detached on the surface. They seek partners who stimulate their mind and respect their need for solitude and intellectual freedom. They express love through sharing their inner world of ideas and by helping partners solve problems. Their friendships tend to revolve around shared interests and intellectual exploration rather than emotional bonding.',
        'zh-TW': 'INTP 以真誠的好奇心對待人際關係，但表面上可能顯得情感疏離。他們尋求能激發思考且尊重其獨處和智識自由需求的伴侶。他們透過分享內心的想法世界和幫助伴侶解決問題來表達愛意。他們的友誼往往圍繞共同興趣和智識探索，而非情感連結。',
        'zh-CN': 'INTP 以真诚的好奇心对待人际关系，但表面上可能显得情感疏离。他们寻求能激发思考且尊重其独处和智识自由需求的伴侣。他们通过分享内心的想法世界和帮助伴侣解决问题来表达爱意。他们的友谊往往围绕共同兴趣和智识探索，而非情感连结。'
      },
      blindSpots: {
        en: ['Often unaware of how their detached demeanor makes others feel ignored or unimportant', 'May not recognize when their intellectual debates feel like personal attacks to others', 'Tend to overlook the emotional subtext in conversations and miss social cues', 'Can be oblivious to how their inconsistency and unreliability affects those who depend on them'],
        'zh-TW': ['常不自覺其疏離態度讓他人感到被忽視或不重要', '可能未察覺自己的智識辯論讓他人感到被針對', '傾向忽略對話中的情感潛台詞，錯失社交訊號', '可能未意識到自己的不一致和不可靠如何影響依賴他們的人'],
        'zh-CN': ['常不自觉其疏离态度让他人感到被忽视或不重要', '可能未察觉自己的智识辩论让他人感到被针对', '倾向忽略对话中的情感潜台词，错失社交信号', '可能未意识到自己的不一致和不可靠如何影响依赖他们的人']
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
      },
      communicationStyle: {
        en: 'ENTJs communicate with authority and decisiveness, naturally taking charge in conversations and meetings. They are articulate and persuasive, preferring direct exchanges that drive toward clear outcomes. In collaborative settings, they excel at delegating tasks, setting expectations, and keeping discussions focused on results.',
        'zh-TW': 'ENTJ 溝通時帶有權威感和決斷力，在對話和會議中自然地主導局面。他們口才流利且有說服力，偏好直接且以明確結果為導向的交流。在合作環境中，他們擅長分配任務、設定期望，並使討論聚焦於成果。',
        'zh-CN': 'ENTJ 沟通时带有权威感和决断力，在对话和会议中自然地主导局面。他们口才流利且有说服力，偏好直接且以明确结果为导向的交流。在合作环境中，他们擅长分配任务、设定期望，并使讨论聚焦于成果。'
      },
      relationshipDeepDive: {
        en: 'ENTJs approach relationships with intentionality, seeking partners who are equally ambitious and intellectually engaging. They demonstrate love through acts of service, planning for the future together, and pushing their partners to grow. While deeply loyal, they may struggle to slow down and attend to the emotional nuances of their relationships. They value friendships built on mutual respect and shared goals.',
        'zh-TW': 'ENTJ 以明確的目標感來經營人際關係，尋求同樣有抱負且具智識吸引力的伴侶。他們透過服務行動、共同規劃未來和推動伴侶成長來展現愛。雖然非常忠誠，但可能難以放慢腳步關注關係中的情感細節。他們重視建立在相互尊重和共同目標上的友誼。',
        'zh-CN': 'ENTJ 以明确的目标感来经营人际关系，寻求同样有抱负且具智识吸引力的伴侣。他们通过服务行动、共同规划未来和推动伴侣成长来展现爱。虽然非常忠诚，但可能难以放慢脚步关注关系中的情感细节。他们重视建立在相互尊重和共同目标上的友谊。'
      },
      blindSpots: {
        en: ['May not see how their take-charge attitude can feel controlling or dismissive to others', 'Often unaware that their drive for efficiency steamrolls over people\'s feelings and autonomy', 'Can be blind to the value of processes that don\'t have immediately measurable outcomes', 'Tend not to notice when they dominate conversations and shut down quieter voices'],
        'zh-TW': ['可能未察覺自己的主導態度讓他人感到被控制或不被重視', '常不自覺其追求效率的驅動力碾壓了他人的感受和自主性', '可能忽視沒有即時可衡量成果的過程之價值', '傾向未注意到自己主導對話並壓制了較安靜的聲音'],
        'zh-CN': ['可能未察觉自己的主导态度让他人感到被控制或不被重视', '常不自觉其追求效率的驱动力碾压了他人的感受和自主性', '可能忽视没有即时可衡量成果的过程之价值', '倾向未注意到自己主导对话并压制了较安静的声音']
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
      },
      communicationStyle: {
        en: 'ENTPs communicate with infectious energy and wit, often playing devil\'s advocate to explore all sides of an issue. They thrive in brainstorming sessions and love bouncing ideas off others in rapid-fire exchanges. In teams, they are the catalysts who challenge assumptions and spark creative solutions, though they may sometimes prioritize the thrill of debate over reaching consensus.',
        'zh-TW': 'ENTP 以富有感染力的活力和機智進行溝通，常扮演魔鬼代言人以探索議題的各個面向。他們在腦力激盪中如魚得水，喜歡快節奏地與他人交換想法。在團隊中，他們是挑戰既有假設、激發創意解決方案的催化劑，儘管有時可能會將辯論的快感置於達成共識之上。',
        'zh-CN': 'ENTP 以富有感染力的活力和机智进行沟通，常扮演魔鬼代言人以探索议题的各个面向。他们在脑力激荡中如鱼得水，喜欢快节奏地与他人交换想法。在团队中，他们是挑战既有假设、激发创意解决方案的催化剂，尽管有时可能会将辩论的快感置于达成共识之上。'
      },
      relationshipDeepDive: {
        en: 'ENTPs bring excitement and intellectual stimulation to their relationships, constantly seeking growth and novelty with their partners. They are drawn to people who can match their wit and keep them mentally engaged. They express love through playful banter, sharing new experiences, and championing their partner\'s ideas. However, they may shy away from deep emotional vulnerability and can struggle with the more mundane aspects of long-term commitment.',
        'zh-TW': 'ENTP 為人際關係帶來興奮感和智識刺激，不斷與伴侶一起追求成長和新鮮感。他們被能匹配其機智並保持思維活躍的人所吸引。他們透過俏皮的玩笑、分享新體驗和支持伴侶的想法來表達愛。然而，他們可能迴避深層的情感脆弱，並對長期承諾中較為平凡的部分感到掙扎。',
        'zh-CN': 'ENTP 为人际关系带来兴奋感和智识刺激，不断与伴侣一起追求成长和新鲜感。他们被能匹配其机智并保持思维活跃的人所吸引。他们通过俏皮的玩笑、分享新体验和支持伴侣的想法来表达爱。然而，他们可能回避深层的情感脆弱，并对长期承诺中较为平凡的部分感到挣扎。'
      },
      blindSpots: {
        en: ['May not realize that their love of debate can exhaust and alienate people who just want to be heard', 'Often unaware of how frequently they abandon projects and ideas, leaving others to pick up the pieces', 'Tend to overestimate their ability to improvise and underestimate the value of preparation', 'Can be oblivious to how their restless pursuit of novelty makes partners and friends feel insufficient'],
        'zh-TW': ['可能未意識到自己對辯論的熱愛會讓只想被傾聽的人感到疲憊和疏離', '常不自覺自己頻繁放棄計劃和想法，留下他人善後', '傾向高估自己的即興能力，低估準備工作的價值', '可能未察覺自己不安於現狀的追求讓伴侶和朋友感到不被珍惜'],
        'zh-CN': ['可能未意识到自己对辩论的热爱会让只想被倾听的人感到疲惫和疏离', '常不自觉自己频繁放弃计划和想法，留下他人善后', '倾向高估自己的即兴能力，低估准备工作的价值', '可能未察觉自己不安于现状的追求让伴侣和朋友感到不被珍惜']
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
      },
      communicationStyle: {
        en: 'INFJs communicate with warmth and depth, choosing their words carefully to convey meaning and inspire understanding. They are natural listeners who pick up on unspoken emotions and often speak in metaphors or abstract terms. In collaborative settings, they serve as the bridge between conflicting perspectives, facilitating harmony while subtly guiding the group toward their vision.',
        'zh-TW': 'INFJ 以溫暖和深度進行溝通，謹慎選擇用詞以傳達意義並啟發理解。他們是天生的傾聽者，能捕捉未言明的情感，常以隱喻或抽象的方式表達。在合作環境中，他們是衝突觀點之間的橋樑，在促進和諧的同時巧妙引導團隊朝向自己的願景。',
        'zh-CN': 'INFJ 以温暖和深度进行沟通，谨慎选择用词以传达意义并启发理解。他们是天生的倾听者，能捕捉未言明的情感，常以隐喻或抽象的方式表达。在合作环境中，他们是冲突观点之间的桥梁，在促进和谐的同时巧妙引导团队朝向自己的愿景。'
      },
      relationshipDeepDive: {
        en: 'INFJs seek profound, almost soulful connections in their relationships and are rarely satisfied with surface-level bonds. They are devoted partners who intuitively understand their loved ones\' needs, sometimes before those needs are expressed. They show love through emotional attunement, meaningful gestures, and unwavering support for their partner\'s growth. However, their idealism can lead to disillusionment when reality falls short of their expectations.',
        'zh-TW': 'INFJ 在關係中追求深刻、近乎靈魂層次的連結，鮮少滿足於表面的交往。他們是忠誠的伴侶，能直覺地理解所愛之人的需求，有時甚至在對方表達之前就已察覺。他們透過情感共鳴、有意義的舉動和對伴侶成長的堅定支持來展現愛。然而，他們的理想主義可能在現實不如預期時導致幻滅感。',
        'zh-CN': 'INFJ 在关系中追求深刻、近乎灵魂层次的连结，鲜少满足于表面的交往。他们是忠诚的伴侣，能直觉地理解所爱之人的需求，有时甚至在对方表达之前就已察觉。他们通过情感共鸣、有意义的举动和对伴侣成长的坚定支持来展现爱。然而，他们的理想主义可能在现实不如预期时导致幻灭感。'
      },
      blindSpots: {
        en: ['May not realize how their tendency to withdraw without explanation confuses and hurts those close to them', 'Often unaware that their certainty about reading people can lead to inaccurate assumptions', 'Can be blind to how their martyrdom complex prevents others from truly helping them', 'Tend not to see how their private judgments of others contradict their outward warmth'],
        'zh-TW': ['可能未意識到不加解釋地退縮會讓親近的人困惑和受傷', '常不自覺對自己解讀他人的能力過於自信，可能導致不準確的假設', '可能忽視自己的殉道者情結如何阻止他人真正幫助自己', '傾向未察覺內心對他人的批判與外在的溫暖形成矛盾'],
        'zh-CN': ['可能未意识到不加解释地退缩会让亲近的人困惑和受伤', '常不自觉对自己解读他人的能力过于自信，可能导致不准确的假设', '可能忽视自己的殉道者情结如何阻止他人真正帮助自己', '倾向未察觉内心对他人的批判与外在的温暖形成矛盾']
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
      },
      communicationStyle: {
        en: 'INFPs communicate with authenticity and emotional depth, expressing themselves most powerfully through writing or one-on-one conversations. They are empathetic listeners who create safe spaces for others to share, though they may hold back their own opinions to avoid conflict. In teams, they advocate for values-driven decisions and bring a humanistic perspective that keeps the group grounded in purpose.',
        'zh-TW': 'INFP 以真實和情感深度進行溝通，透過寫作或一對一對話最能有力地表達自己。他們是富有同理心的傾聽者，能為他人創造安全的分享空間，儘管可能為避免衝突而保留自己的意見。在團隊中，他們倡導以價值觀為導向的決策，並帶來人文主義視角，使團隊扎根於使命。',
        'zh-CN': 'INFP 以真实和情感深度进行沟通，通过写作或一对一对话最能有力地表达自己。他们是富有同理心的倾听者，能为他人创造安全的分享空间，尽管可能为避免冲突而保留自己的意见。在团队中，他们倡导以价值观为导向的决策，并带来人文主义视角，使团队扎根于使命。'
      },
      relationshipDeepDive: {
        en: 'INFPs are deeply romantic souls who seek a partner with whom they can share an authentic, all-encompassing emotional bond. They idealize love and are drawn to the idea of a soulmate who truly understands them. They express affection through heartfelt words, creative gifts, and acts of devotion that reflect deep personal meaning. In friendships, they are fiercely loyal to their inner circle but can become disillusioned if they feel their values are not reciprocated.',
        'zh-TW': 'INFP 是深具浪漫情懷的靈魂，尋求能與之分享真實、全方位情感連結的伴侶。他們將愛理想化，渴望找到真正理解自己的靈魂伴侶。他們透過真摯的話語、富有創意的禮物和充滿個人深意的奉獻行動來表達愛。在友誼中，他們對內心圈子極為忠誠，但若感到自己的價值觀未被回應，可能會產生幻滅感。',
        'zh-CN': 'INFP 是深具浪漫情怀的灵魂，寻求能与之分享真实、全方位情感连结的伴侣。他们将爱理想化，渴望找到真正理解自己的灵魂伴侣。他们通过真挚的话语、富有创意的礼物和充满个人深意的奉献行动来表达爱。在友谊中，他们对内心圈子极为忠诚，但若感到自己的价值观未被回应，可能会产生幻灭感。'
      },
      blindSpots: {
        en: ['May not realize how their internal emotional storms are invisible to others who then can\'t offer support', 'Often unaware that their avoidance of conflict creates bigger problems than addressing issues directly would', 'Can be blind to how their idealization of people sets everyone up for inevitable disappointment', 'Tend not to see how their preference for authenticity can come across as rigidity or moral superiority'],
        'zh-TW': ['可能未意識到內心的情緒風暴對他人是不可見的，因此他人無法提供支持', '常不自覺迴避衝突反而製造了比直接面對更大的問題', '可能忽視自己對他人的理想化如何讓所有人都注定面對失望', '傾向未察覺自己對真實性的堅持可能被視為固執或道德優越感'],
        'zh-CN': ['可能未意识到内心的情绪风暴对他人是不可见的，因此他人无法提供支持', '常不自觉回避冲突反而制造了比直接面对更大的问题', '可能忽视自己对他人的理想化如何让所有人都注定面对失望', '倾向未察觉自己对真实性的坚持可能被视为固执或道德优越感']
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
      },
      communicationStyle: {
        en: 'ENFJs communicate with eloquence and emotional intelligence, naturally adapting their message to resonate with their audience. They are encouraging speakers who uplift others and bring out the best in group discussions. In collaborative settings, they unify diverse perspectives and motivate teams with an infectious sense of shared purpose, though they may sometimes avoid delivering hard truths to preserve harmony.',
        'zh-TW': 'ENFJ 以雄辯和情商進行溝通，自然地調整訊息以引起聽眾的共鳴。他們是鼓舞人心的表達者，在團體討論中激發他人最好的一面。在合作環境中，他們統合多元觀點，以富有感染力的共同使命感激勵團隊，儘管有時可能為維護和諧而迴避傳達嚴峻的事實。',
        'zh-CN': 'ENFJ 以雄辩和情商进行沟通，自然地调整信息以引起听众的共鸣。他们是鼓舞人心的表达者，在团体讨论中激发他人最好的一面。在合作环境中，他们统合多元观点，以富有感染力的共同使命感激励团队，尽管有时可能为维护和谐而回避传达严峻的事实。'
      },
      relationshipDeepDive: {
        en: 'ENFJs are devoted and nurturing partners who pour tremendous energy into building meaningful relationships. They intuitively sense their partner\'s emotional needs and go to great lengths to meet them. They express love through words of affirmation, quality time, and acts of service that make their partners feel truly seen. However, they may lose themselves in the role of caretaker, neglecting their own emotional needs while focusing entirely on others.',
        'zh-TW': 'ENFJ 是忠誠且充滿關愛的伴侶，傾注大量心力建立有意義的關係。他們直覺地感知伴侶的情感需求並竭盡全力滿足。他們透過肯定的言語、高品質的陪伴和讓伴侶感到被真正看見的服務行動來表達愛。然而，他們可能在照顧者的角色中迷失自我，全心關注他人的同時忽略了自身的情感需求。',
        'zh-CN': 'ENFJ 是忠诚且充满关爱的伴侣，倾注大量心力建立有意义的关系。他们直觉地感知伴侣的情感需求并竭尽全力满足。他们通过肯定的言语、高品质的陪伴和让伴侣感到被真正看见的服务行动来表达爱。然而，他们可能在照顾者的角色中迷失自我，全心关注他人的同时忽略了自身的情感需求。'
      },
      blindSpots: {
        en: ['May not realize how their helpfulness can come across as meddling or not trusting others to handle things', 'Often unaware that their need for appreciation drives much of their giving behavior', 'Can be blind to how their conflict avoidance allows resentment to build silently', 'Tend not to see how their strong vision for others\' potential can feel like pressure rather than support'],
        'zh-TW': ['可能未意識到自己的熱心助人可能被視為多管閒事或不信任他人的能力', '常不自覺對讚賞的需求驅動了大部分的付出行為', '可能忽視迴避衝突如何讓怨氣無聲地累積', '傾向未察覺自己對他人潛能的強烈期望可能讓人感到壓力而非支持'],
        'zh-CN': ['可能未意识到自己的热心助人可能被视为多管闲事或不信任他人的能力', '常不自觉对赞赏的需求驱动了大部分的付出行为', '可能忽视回避冲突如何让怨气无声地累积', '倾向未察觉自己对他人潜能的强烈期望可能让人感到压力而非支持']
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
      },
      communicationStyle: {
        en: 'ENFPs communicate with enthusiasm and warmth, weaving stories and possibilities into every conversation. They are expressive and animated, easily drawing others into their infectious energy and big-picture thinking. In teams, they excel at generating creative ideas and connecting people, though they may jump between topics so quickly that others struggle to keep up.',
        'zh-TW': 'ENFP 以熱情和溫暖進行溝通，在每次對話中編織故事和可能性。他們表達豐富且充滿活力，輕易將他人帶入自己富有感染力的能量和宏觀思維中。在團隊中，他們擅長產生創意想法和連結人群，儘管可能在話題間跳轉太快，讓他人難以跟上。',
        'zh-CN': 'ENFP 以热情和温暖进行沟通，在每次对话中编织故事和可能性。他们表达丰富且充满活力，轻易将他人带入自己富有感染力的能量和宏观思维中。在团队中，他们擅长产生创意想法和连结人群，尽管可能在话题间跳转太快，让他人难以跟上。'
      },
      relationshipDeepDive: {
        en: 'ENFPs are passionate and affirming partners who bring creativity and emotional depth to their relationships. They fall in love with potential and are drawn to partners who share their passion for growth and exploration. They express love through enthusiastic encouragement, spontaneous adventures, and deeply personal conversations. However, they may idealize new relationships and struggle with the routine aspects of long-term partnership, sometimes confusing the fading of initial excitement with loss of love.',
        'zh-TW': 'ENFP 是熱情且給予肯定的伴侶，為關係帶來創造力和情感深度。他們愛上的是可能性，被同樣熱衷成長和探索的伴侶所吸引。他們透過熱切的鼓勵、即興的冒險和深入的私人對話來表達愛。然而，他們可能將新關係理想化，並對長期伴侶關係的日常面向感到掙扎，有時會將初始興奮感的消退誤認為愛的消失。',
        'zh-CN': 'ENFP 是热情且给予肯定的伴侣，为关系带来创造力和情感深度。他们爱上的是可能性，被同样热衷成长和探索的伴侣所吸引。他们通过热切的鼓励、即兴的冒险和深入的私人对话来表达爱。然而，他们可能将新关系理想化，并对长期伴侣关系的日常面向感到挣扎，有时会将初始兴奋感的消退误认为爱的消失。'
      },
      blindSpots: {
        en: ['May not realize how their constant need for novelty and stimulation makes others feel like they\'re never enough', 'Often unaware that their people-pleasing tendencies lead them to overcommit and then disappoint', 'Can be blind to how their scattered energy and unfinished projects affect those who rely on them', 'Tend not to see how their optimism sometimes dismisses others\' legitimate concerns and struggles'],
        'zh-TW': ['可能未意識到自己對新鮮感和刺激的持續需求讓他人覺得自己永遠不夠好', '常不自覺討好他人的傾向導致過度承諾繼而令人失望', '可能忽視自己分散的精力和未完成的計劃如何影響依賴他們的人', '傾向未察覺自己的樂觀有時會否定他人合理的擔憂和困境'],
        'zh-CN': ['可能未意识到自己对新鲜感和刺激的持续需求让他人觉得自己永远不够好', '常不自觉讨好他人的倾向导致过度承诺继而令人失望', '可能忽视自己分散的精力和未完成的计划如何影响依赖他们的人', '倾向未察觉自己的乐观有时会否定他人合理的担忧和困境']
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
      },
      communicationStyle: {
        en: 'ISTJs communicate in a straightforward, factual manner, backing up their points with concrete evidence and established procedures. They prefer structured conversations with clear agendas and dislike vague or speculative discussions. In collaborative settings, they ensure accuracy and thoroughness, serving as the reliable voice that keeps teams grounded in reality and focused on deliverables.',
        'zh-TW': 'ISTJ 以直截了當、注重事實的方式溝通，以具體證據和既定程序支持自己的觀點。他們偏好有明確議程的結構化對話，不喜歡模糊或空泛的討論。在合作環境中，他們確保準確性和徹底性，作為可靠的聲音使團隊立足現實並專注於交付成果。',
        'zh-CN': 'ISTJ 以直截了当、注重事实的方式沟通，以具体证据和既定程序支持自己的观点。他们偏好有明确议程的结构化对话，不喜欢模糊或空泛的讨论。在合作环境中，他们确保准确性和彻底性，作为可靠的声音使团队立足现实并专注于交付成果。'
      },
      relationshipDeepDive: {
        en: 'ISTJs are steadfast and committed partners who demonstrate love through reliability and consistent action rather than grand romantic gestures. They seek partners who share their values of loyalty, responsibility, and honesty. They build relationships slowly and deliberately, investing deeply once trust is established. In friendships, they are the dependable ones who show up without fail, though they may struggle to express emotional warmth verbally.',
        'zh-TW': 'ISTJ 是堅定且忠誠的伴侶，透過可靠性和一致的行動而非浪漫的大手筆來展現愛。他們尋求同樣重視忠誠、責任和誠實的伴侶。他們緩慢而慎重地建立關係，一旦信任建立便全心投入。在友誼中，他們是那個從不缺席的可靠之人，儘管可能難以用言語表達情感上的溫暖。',
        'zh-CN': 'ISTJ 是坚定且忠诚的伴侣，通过可靠性和一致的行动而非浪漫的大手笔来展现爱。他们寻求同样重视忠诚、责任和诚实的伴侣。他们缓慢而慎重地建立关系，一旦信任建立便全心投入。在友谊中，他们是那个从不缺席的可靠之人，尽管可能难以用言语表达情感上的温暖。'
      },
      blindSpots: {
        en: ['May not realize how their insistence on following rules and procedures frustrates more adaptable colleagues', 'Often unaware that their reliance on past experience causes them to dismiss innovative solutions prematurely', 'Can be blind to how their unexpressed emotions create distance in close relationships', 'Tend not to see how their black-and-white thinking overlooks valid nuances and context'],
        'zh-TW': ['可能未意識到自己堅持遵循規則和程序如何令更靈活的同事感到沮喪', '常不自覺依賴過往經驗導致過早否定創新方案', '可能忽視未表達的情感如何在親密關係中製造距離', '傾向未察覺非黑即白的思維忽略了合理的細微差異和脈絡'],
        'zh-CN': ['可能未意识到自己坚持遵循规则和程序如何令更灵活的同事感到沮丧', '常不自觉依赖过往经验导致过早否定创新方案', '可能忽视未表达的情感如何在亲密关系中制造距离', '倾向未察觉非黑即白的思维忽略了合理的细微差异和脉络']
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
      },
      communicationStyle: {
        en: 'ISFJs communicate with gentleness and consideration, carefully choosing words that will not cause offense or discomfort. They are attentive listeners who remember details about people and use this knowledge to make others feel valued. In teams, they contribute quietly but substantially, often handling behind-the-scenes work and ensuring that everyone\'s practical needs are met without seeking recognition.',
        'zh-TW': 'ISFJ 以溫和和體貼的方式溝通，謹慎選擇不會冒犯或造成不適的用詞。他們是細心的傾聽者，記住關於他人的細節並運用這些知識讓人感到被重視。在團隊中，他們默默但實質地貢獻，常處理幕後工作並確保每個人的實際需求被滿足，而不尋求認可。',
        'zh-CN': 'ISFJ 以温和和体贴的方式沟通，谨慎选择不会冒犯或造成不适的用词。他们是细心的倾听者，记住关于他人的细节并运用这些知识让人感到被重视。在团队中，他们默默但实质地贡献，常处理幕后工作并确保每个人的实际需求被满足，而不寻求认可。'
      },
      relationshipDeepDive: {
        en: 'ISFJs are devoted and nurturing partners who express love through thoughtful acts of care and unwavering loyalty. They seek stable, harmonious relationships built on mutual trust and shared traditions. They remember every important detail about their loved ones and create a warm, supportive home environment. However, they may silently accumulate grievances rather than voice them, leading to unexpected emotional outbursts after prolonged periods of self-sacrifice.',
        'zh-TW': 'ISFJ 是忠誠且充滿關愛的伴侶，透過體貼的照顧行動和堅定不移的忠誠來表達愛。他們尋求建立在互信和共同傳統上的穩定和諧關係。他們記住所愛之人的每個重要細節，營造溫暖、充滿支持的家庭環境。然而，他們可能默默累積不滿而非表達出來，導致在長期自我犧牲後出現意料之外的情感爆發。',
        'zh-CN': 'ISFJ 是忠诚且充满关爱的伴侣，通过体贴的照顾行动和坚定不移的忠诚来表达爱。他们寻求建立在互信和共同传统上的稳定和谐关系。他们记住所爱之人的每个重要细节，营造温暖、充满支持的家庭环境。然而，他们可能默默累积不满而非表达出来，导致在长期自我牺牲后出现意料之外的情感爆发。'
      },
      blindSpots: {
        en: ['May not realize how their reluctance to delegate stems from a belief that no one else will do it right', 'Often unaware that their selfless behavior creates an unspoken expectation of reciprocation', 'Can be blind to how their resistance to change holds back both themselves and those around them', 'Tend not to see how their indirect communication style leaves important needs unmet'],
        'zh-TW': ['可能未意識到不願委託他人源於認為沒有人能做得夠好', '常不自覺無私的行為背後暗藏對回報的期待', '可能忽視自己對改變的抗拒如何同時阻礙了自己和周圍的人', '傾向未察覺間接的溝通方式讓重要的需求無法被滿足'],
        'zh-CN': ['可能未意识到不愿委托他人源于认为没有人能做得够好', '常不自觉无私的行为背后暗藏对回报的期待', '可能忽视自己对改变的抗拒如何同时阻碍了自己和周围的人', '倾向未察觉间接的沟通方式让重要的需求无法被满足']
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
      },
      communicationStyle: {
        en: 'ESTJs communicate with clarity and authority, favoring direct, no-nonsense language that gets straight to the point. They are organized speakers who present information in a logical, step-by-step manner and expect the same from others. In teams, they naturally take on the role of coordinator, setting clear expectations and timelines while holding everyone accountable to results.',
        'zh-TW': 'ESTJ 以清晰和權威的方式溝通，偏好直接、務實的語言直切要點。他們是有條理的表達者，以邏輯化、循序漸進的方式呈現資訊，並期望他人也如此。在團隊中，他們自然承擔協調者的角色，設定明確的期望和時間表，同時要求每個人為成果負責。',
        'zh-CN': 'ESTJ 以清晰和权威的方式沟通，偏好直接、务实的语言直切要点。他们是有条理的表达者，以逻辑化、循序渐进的方式呈现信息，并期望他人也如此。在团队中，他们自然承担协调者的角色，设定明确的期望和时间表，同时要求每个人为成果负责。'
      },
      relationshipDeepDive: {
        en: 'ESTJs are dependable and traditional partners who build relationships on a foundation of shared values and mutual responsibility. They show love through providing stability, taking care of practical needs, and being consistently present for their families. They seek partners who appreciate structure and share their commitment to duty. In friendships, they are the organizers who keep social groups connected through regular gatherings and traditions.',
        'zh-TW': 'ESTJ 是可靠且重傳統的伴侶，在共同價值觀和相互責任的基礎上建立關係。他們透過提供穩定、照顧實際需求和持續陪伴家人來展現愛。他們尋求欣賞結構且同樣致力於責任的伴侶。在友誼中，他們是組織者，透過定期聚會和傳統活動維繫社交圈的連結。',
        'zh-CN': 'ESTJ 是可靠且重传统的伴侣，在共同价值观和相互责任的基础上建立关系。他们通过提供稳定、照顾实际需求和持续陪伴家人来展现爱。他们寻求欣赏结构且同样致力于责任的伴侣。在友谊中，他们是组织者，通过定期聚会和传统活动维系社交圈的连结。'
      },
      blindSpots: {
        en: ['May not realize that their way of doing things is not the only valid approach and that alternatives can be equally effective', 'Often unaware of how their blunt delivery wounds people who interpret directness as a lack of caring', 'Can be blind to the emotional undercurrents in their workplace and family that require attention beyond task management', 'Tend not to see how their respect for hierarchy and tradition can inadvertently suppress fresh ideas and diverse voices'],
        'zh-TW': ['可能未意識到自己的做事方式不是唯一正確的方法，替代方案同樣可能有效', '常不自覺直白的表達方式傷害了那些將直接視為缺乏關心的人', '可能忽視職場和家庭中需要超越任務管理來關注的情感暗流', '傾向未察覺自己對階層和傳統的尊重可能無意中壓制了新想法和多元聲音'],
        'zh-CN': ['可能未意识到自己的做事方式不是唯一正确的方法，替代方案同样可能有效', '常不自觉直白的表达方式伤害了那些将直接视为缺乏关心的人', '可能忽视职场和家庭中需要超越任务管理来关注的情感暗流', '倾向未察觉自己对阶层和传统的尊重可能无意中压制了新想法和多元声音']
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
      },
      communicationStyle: {
        en: 'ESFJs communicate with warmth and social grace, naturally making others feel comfortable and included in conversations. They are skilled at reading the room and adapting their tone to maintain harmony. In collaborative settings, they ensure everyone has a voice and build consensus through encouragement and active facilitation, though they may avoid bringing up topics that could create tension.',
        'zh-TW': 'ESFJ 以溫暖和社交禮儀進行溝通，自然地讓他人在對話中感到舒適和被包容。他們擅長察言觀色並調整語氣以維持和諧。在合作環境中，他們確保每個人都有發言機會，透過鼓勵和積極引導達成共識，儘管可能迴避提出可能造成緊張的話題。',
        'zh-CN': 'ESFJ 以温暖和社交礼仪进行沟通，自然地让他人在对话中感到舒适和被包容。他们擅长察言观色并调整语气以维持和谐。在合作环境中，他们确保每个人都有发言机会，通过鼓励和积极引导达成共识，尽管可能回避提出可能造成紧张的话题。'
      },
      relationshipDeepDive: {
        en: 'ESFJs are attentive and generous partners who create a warm, welcoming atmosphere in their relationships. They express love through thoughtful gestures, remembering special occasions, and ensuring their partner feels cared for in practical ways. They seek harmonious relationships built on shared social values and emotional reciprocity. In friendships, they are the connectors who maintain the social fabric of their community, always checking in and bringing people together.',
        'zh-TW': 'ESFJ 是體貼且慷慨的伴侶，在關係中營造溫暖、令人感到受歡迎的氛圍。他們透過貼心的舉動、記住特殊日子和確保伴侶在實際層面感受到關懷來表達愛。他們尋求建立在共同社會價值觀和情感互惠上的和諧關係。在友誼中，他們是維繫社群社交網絡的連結者，總是主動關心並將人們聚在一起。',
        'zh-CN': 'ESFJ 是体贴且慷慨的伴侣，在关系中营造温暖、令人感到受欢迎的氛围。他们通过贴心的举动、记住特殊日子和确保伴侣在实际层面感受到关怀来表达爱。他们寻求建立在共同社会价值观和情感互惠上的和谐关系。在友谊中，他们是维系社群社交网络的连结者，总是主动关心并将人们聚在一起。'
      },
      blindSpots: {
        en: ['May not realize how their desire for social approval influences their decisions more than they think', 'Often unaware that their helpfulness sometimes comes with strings attached, expecting others to conform to their values in return', 'Can be blind to how their gossip and social monitoring, intended as caring, can feel intrusive to others', 'Tend not to see how their discomfort with nonconformity leads them to subtly pressure others into fitting in'],
        'zh-TW': ['可能未意識到對社會認同的渴望比自認為的更大程度影響了決策', '常不自覺自己的熱心助人有時附帶條件，期望他人以符合自己的價值觀作為回報', '可能忽視出於關心的閒聊和社交關注可能讓他人感到被侵犯', '傾向未察覺對不合群的不適感導致自己微妙地施壓他人融入群體'],
        'zh-CN': ['可能未意识到对社会认同的渴望比自认为的更大程度影响了决策', '常不自觉自己的热心助人有时附带条件，期望他人以符合自己的价值观作为回报', '可能忽视出于关心的闲聊和社交关注可能让他人感到被侵犯', '倾向未察觉对不合群的不适感导致自己微妙地施压他人融入群体']
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
      },
      communicationStyle: {
        en: 'ISTPs communicate in a concise, matter-of-fact style, saying only what is necessary and avoiding unnecessary elaboration. They prefer hands-on demonstrations over verbal explanations and may seem quiet until a topic genuinely interests them. In teams, they contribute through practical problem-solving and troubleshooting, often stepping in during crises when others are still deliberating.',
        'zh-TW': 'ISTP 以簡潔、就事論事的風格溝通，只說必要的話並避免不必要的闡述。他們偏好動手示範而非口頭解釋，在話題真正引起興趣之前可能顯得沉默。在團隊中，他們透過實際的問題解決和故障排除來貢獻，常在他人還在討論時於危機中挺身而出。',
        'zh-CN': 'ISTP 以简洁、就事论事的风格沟通，只说必要的话并避免不必要的阐述。他们偏好动手示范而非口头解释，在话题真正引起兴趣之前可能显得沉默。在团队中，他们通过实际的问题解决和故障排除来贡献，常在他人还在讨论时于危机中挺身而出。'
      },
      relationshipDeepDive: {
        en: 'ISTPs approach relationships with a calm, easygoing attitude, valuing mutual independence and shared experiences over emotional intensity. They are attracted to partners who respect their space and enjoy spontaneous activities together. They show love through practical acts of help, fixing things, and sharing their skills, rather than verbal declarations. Their friendships tend to form around shared hobbies or activities, and they are at their most connected when doing something side by side.',
        'zh-TW': 'ISTP 以冷靜、隨和的態度對待人際關係，重視相互獨立和共同體驗而非情感的強烈度。他們被尊重其空間且樂於一起進行即興活動的伴侶所吸引。他們透過實際的幫助行動、修理東西和分享技能來展現愛，而非口頭表白。他們的友誼往往圍繞共同的嗜好或活動形成，並肩做事時感到最為親近。',
        'zh-CN': 'ISTP 以冷静、随和的态度对待人际关系，重视相互独立和共同体验而非情感的强烈度。他们被尊重其空间且乐于一起进行即兴活动的伴侣所吸引。他们通过实际的帮助行动、修理东西和分享技能来展现爱，而非口头表白。他们的友谊往往围绕共同的嗜好或活动形成，并肩做事时感到最为亲近。'
      },
      blindSpots: {
        en: ['May not realize how their emotional unavailability leaves partners feeling lonely even in the relationship', 'Often unaware that their preference for independence can read as indifference to people who care about them', 'Can be blind to how their in-the-moment decision-making affects others who need predictability and planning', 'Tend not to see how their discomfort with emotional conversations causes important relationship issues to go unresolved'],
        'zh-TW': ['可能未意識到自己的情感封閉讓伴侶即使在關係中也感到孤獨', '常不自覺對獨立的偏好在關心他們的人眼中可能被解讀為冷漠', '可能忽視自己當下即時決策如何影響需要可預測性和規劃的他人', '傾向未察覺自己對情感對話的不適導致重要的關係問題懸而未決'],
        'zh-CN': ['可能未意识到自己的情感封闭让伴侣即使在关系中也感到孤独', '常不自觉对独立的偏好在关心他们的人眼中可能被解读为冷漠', '可能忽视自己当下即时决策如何影响需要可预测性和规划的他人', '倾向未察觉自己对情感对话的不适导致重要的关系问题悬而未决']
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
      },
      communicationStyle: {
        en: 'ISFPs communicate through actions and presence rather than words, often expressing themselves more effectively through art, gestures, or shared experiences. They are quiet but deeply perceptive listeners who pick up on emotional subtleties others miss. In collaborative settings, they contribute a grounding, humanistic perspective and work best in environments that allow creative freedom rather than rigid structure.',
        'zh-TW': 'ISFP 透過行動和陪伴而非言語來溝通，常透過藝術、肢體語言或共同體驗更有效地表達自己。他們安靜但具有深刻的洞察力，能捕捉他人忽略的情感細微之處。在合作環境中，他們帶來落地且具人文關懷的視角，在允許創作自由而非僵硬結構的環境中表現最佳。',
        'zh-CN': 'ISFP 通过行动和陪伴而非言语来沟通，常通过艺术、肢体语言或共同体验更有效地表达自己。他们安静但具有深刻的洞察力，能捕捉他人忽略的情感细微之处。在合作环境中，他们带来落地且具人文关怀的视角，在允许创作自由而非僵硬结构的环境中表现最佳。'
      },
      relationshipDeepDive: {
        en: 'ISFPs are tender and devoted partners who love deeply but express it through actions rather than words. They seek relationships that feel authentic and free from pretense, gravitating toward partners who appreciate their gentle nature and creative spirit. They show love through being fully present, creating beautiful experiences, and quietly attending to their partner\'s comfort. In friendships, they are loyal and accepting, offering a non-judgmental presence that makes others feel safe to be themselves.',
        'zh-TW': 'ISFP 是溫柔且忠誠的伴侶，深深愛著卻更透過行動而非言語來表達。他們尋求真實且不做作的關係，被欣賞其溫和本性和創造精神的伴侶所吸引。他們透過全心陪伴、創造美好體驗和默默關注伴侶的舒適來展現愛。在友誼中，他們忠誠且包容，提供不帶批判的存在感，讓他人安心做自己。',
        'zh-CN': 'ISFP 是温柔且忠诚的伴侣，深深爱着却更通过行动而非言语来表达。他们寻求真实且不做作的关系，被欣赏其温和本性和创造精神的伴侣所吸引。他们通过全心陪伴、创造美好体验和默默关注伴侣的舒适来展现爱。在友谊中，他们忠诚且包容，提供不带批判的存在感，让他人安心做自己。'
      },
      blindSpots: {
        en: ['May not realize how their tendency to go with the flow leaves important decisions unmade until it\'s too late', 'Often unaware that their withdrawal during conflict is experienced as abandonment by those who need resolution', 'Can be blind to how their strong internal values, when unexpressed, lead others to misunderstand their priorities', 'Tend not to see how their reluctance to plan ahead creates unnecessary stress for partners and friends who need stability'],
        'zh-TW': ['可能未意識到隨遇而安的傾向讓重要決定一再拖延直到為時已晚', '常不自覺在衝突中退縮被需要解決問題的人體驗為一種遺棄', '可能忽視強烈的內在價值觀若未表達，會導致他人誤解其優先順序', '傾向未察覺不願提前規劃為需要穩定感的伴侶和朋友製造了不必要的壓力'],
        'zh-CN': ['可能未意识到随遇而安的倾向让重要决定一再拖延直到为时已晚', '常不自觉在冲突中退缩被需要解决问题的人体验为一种遗弃', '可能忽视强烈的内在价值观若未表达，会导致他人误解其优先顺序', '倾向未察觉不愿提前规划为需要稳定感的伴侣和朋友制造了不必要的压力']
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
      },
      communicationStyle: {
        en: 'ESTPs communicate with bold energy and quick wit, keeping conversations lively and action-oriented. They are natural storytellers who use humor and real-world examples to make their points, preferring to cut through theoretical talk and get to practical solutions. In teams, they energize the group and push for immediate action, excelling in high-pressure situations where quick thinking is required.',
        'zh-TW': 'ESTP 以大膽的活力和敏捷的機智進行溝通，使對話保持活潑且以行動為導向。他們是天生的說故事高手，運用幽默和現實案例來闡述觀點，偏好跳過理論直奔實際解決方案。在團隊中，他們為團隊注入活力並推動即時行動，在需要快速思考的高壓情境中表現出色。',
        'zh-CN': 'ESTP 以大胆的活力和敏捷的机智进行沟通，使对话保持活泼且以行动为导向。他们是天生的说故事高手，运用幽默和现实案例来阐述观点，偏好跳过理论直奔实际解决方案。在团队中，他们为团队注入活力并推动即时行动，在需要快速思考的高压情境中表现出色。'
      },
      relationshipDeepDive: {
        en: 'ESTPs are exciting and adventurous partners who keep relationships dynamic and fun. They are drawn to confident, spontaneous individuals who can keep up with their active lifestyle. They express love through shared adventures, physical affection, and showing up for their partner in tangible, immediate ways. However, they may avoid deep emotional conversations and can struggle when relationships require patience, vulnerability, or discussing feelings at length.',
        'zh-TW': 'ESTP 是令人興奮且愛冒險的伴侶，使關係保持活力和趣味。他們被自信、隨性且能跟上其活躍生活方式的人所吸引。他們透過共同的冒險、肢體表達愛意和以具體即時的方式為伴侶而在來展現愛。然而，他們可能迴避深度的情感對話，當關係需要耐心、展現脆弱或深入討論感受時會感到掙扎。',
        'zh-CN': 'ESTP 是令人兴奋且爱冒险的伴侣，使关系保持活力和趣味。他们被自信、随性且能跟上其活跃生活方式的人所吸引。他们通过共同的冒险、肢体表达爱意和以具体即时的方式为伴侣而在来展现爱。然而，他们可能回避深度的情感对话，当关系需要耐心、展现脆弱或深入讨论感受时会感到挣扎。'
      },
      blindSpots: {
        en: ['May not realize how their thrill-seeking behavior worries and exhausts the people who love them', 'Often unaware that their focus on the present moment causes them to repeat the same relationship mistakes', 'Can be blind to how their competitive nature turns everyday interactions into power dynamics', 'Tend not to see how their discomfort with vulnerability prevents the deep emotional intimacy their partners crave'],
        'zh-TW': ['可能未意識到自己追求刺激的行為令愛他們的人擔憂和疲憊', '常不自覺專注當下導致在關係中重複犯同樣的錯誤', '可能忽視自己的競爭本性如何將日常互動變成權力較量', '傾向未察覺對脆弱的不適阻止了伴侶所渴望的深層情感親密'],
        'zh-CN': ['可能未意识到自己追求刺激的行为令爱他们的人担忧和疲惫', '常不自觉专注当下导致在关系中重复犯同样的错误', '可能忽视自己的竞争本性如何将日常互动变成权力较量', '倾向未察觉对脆弱的不适阻止了伴侣所渴望的深层情感亲密']
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
      },
      communicationStyle: {
        en: 'ESFPs communicate with infectious enthusiasm and natural charisma, making every conversation feel like a celebration. They are expressive and animated speakers who use humor, physical energy, and vivid descriptions to engage their audience. In teams, they boost morale and create a positive atmosphere, encouraging openness and spontaneity while sometimes steering discussions toward fun rather than focus.',
        'zh-TW': 'ESFP 以富有感染力的熱情和天生的魅力進行溝通，讓每次對話都像一場慶祝。他們是表達力豐富且充滿活力的演說者，運用幽默、肢體語言和生動的描述來吸引聽眾。在團隊中，他們提振士氣並營造正面氛圍，鼓勵開放和自發性，儘管有時可能將討論導向歡樂而非專注。',
        'zh-CN': 'ESFP 以富有感染力的热情和天生的魅力进行沟通，让每次对话都像一场庆祝。他们是表达力丰富且充满活力的演说者，运用幽默、肢体语言和生动的描述来吸引听众。在团队中，他们提振士气并营造正面氛围，鼓励开放和自发性，尽管有时可能将讨论导向欢乐而非专注。'
      },
      relationshipDeepDive: {
        en: 'ESFPs are generous and affectionate partners who fill relationships with warmth, laughter, and spontaneity. They are attracted to people who appreciate their vivacious spirit and can share in their love of life. They express love through physical affection, quality time filled with fun activities, and generous gift-giving. In friendships, they are the life of the party who makes everyone feel included, though they may struggle with the deeper, more serious dimensions of close relationships.',
        'zh-TW': 'ESFP 是慷慨且充滿愛的伴侶，為關係注入溫暖、歡笑和驚喜。他們被欣賞其活潑精神且能分享其生活熱情的人所吸引。他們透過肢體表達愛意、充滿趣味活動的陪伴時光和慷慨的禮物來展現愛。在友誼中，他們是讓每個人都感到被包容的派對靈魂，儘管可能在親密關係中較深入、嚴肅的層面有所掙扎。',
        'zh-CN': 'ESFP 是慷慨且充满爱的伴侣，为关系注入温暖、欢笑和惊喜。他们被欣赏其活泼精神且能分享其生活热情的人所吸引。他们通过肢体表达爱意、充满趣味活动的陪伴时光和慷慨的礼物来展现爱。在友谊中，他们是让每个人都感到被包容的派对灵魂，尽管可能在亲密关系中较深入、严肃的层面有所挣扎。'
      },
      blindSpots: {
        en: ['May not realize how their avoidance of serious topics leaves important matters unaddressed until they become crises', 'Often unaware that their need to be liked leads them to suppress their true opinions and boundaries', 'Can be blind to how their spontaneous spending and impulsive decisions create long-term financial and practical consequences', 'Tend not to see how their discomfort with solitude and introspection prevents them from developing deeper self-awareness'],
        'zh-TW': ['可能未意識到迴避嚴肅話題讓重要事務懸而未決直到演變為危機', '常不自覺渴望被喜歡導致壓抑了自己真實的意見和界限', '可能忽視即興消費和衝動決策如何造成長期的財務和實際後果', '傾向未察覺對獨處和內省的不適阻止了自己發展更深層的自我認知'],
        'zh-CN': ['可能未意识到回避严肃话题让重要事务悬而未决直到演变为危机', '常不自觉渴望被喜欢导致压抑了自己真实的意见和界限', '可能忽视即兴消费和冲动决策如何造成长期的财务和实际后果', '倾向未察觉对独处和内省的不适阻止了自己发展更深层的自我认知']
      }
    }

  };

})();
