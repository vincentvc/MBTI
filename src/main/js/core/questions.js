(function() {
  'use strict';

  window.MBTI = window.MBTI || {};

  window.MBTI.questions = [

    // ========================================================================
    // E/I Dimension (Extraversion / Introversion) - Questions 1-18
    // Direction 'E': agreeing favors Extraversion
    // Direction 'I': agreeing favors Introversion
    // ========================================================================

    {
      id: 1,
      dimension: 'EI',
      direction: 'E',
      text: {
        en: "I feel energized after spending time with a large group of people.",
        'zh-TW': "\u8207\u4e00\u5927\u7fa4\u4eba\u76f8\u8655\u5f8c\uff0c\u6211\u6703\u611f\u5230\u7cbe\u529b\u5145\u6c9b\u3002",
        'zh-CN': "\u4e0e\u4e00\u5927\u7fa4\u4eba\u76f8\u5904\u540e\uff0c\u6211\u4f1a\u611f\u5230\u7cbe\u529b\u5145\u6c9b\u3002"
      }
    },
    {
      id: 2,
      dimension: 'EI',
      direction: 'I',
      text: {
        en: "I prefer to spend my weekends quietly at home rather than going out.",
        'zh-TW': "\u6bd4\u8d77\u5916\u51fa\uff0c\u6211\u66f4\u559c\u6b61\u5728\u5bb6\u5b89\u975c\u5730\u5ea6\u904e\u9031\u672b\u3002",
        'zh-CN': "\u6bd4\u8d77\u5916\u51fa\uff0c\u6211\u66f4\u559c\u6b22\u5728\u5bb6\u5b89\u9759\u5730\u5ea6\u8fc7\u5468\u672b\u3002"
      }
    },
    {
      id: 3,
      dimension: 'EI',
      direction: 'E',
      text: {
        en: "I often think out loud and talk through my ideas with others.",
        'zh-TW': "\u6211\u7d93\u5e38\u5927\u8072\u601d\u8003\uff0c\u4e26\u8207\u4ed6\u4eba\u8a0e\u8ad6\u6211\u7684\u60f3\u6cd5\u3002",
        'zh-CN': "\u6211\u7ecf\u5e38\u5927\u58f0\u601d\u8003\uff0c\u5e76\u4e0e\u4ed6\u4eba\u8ba8\u8bba\u6211\u7684\u60f3\u6cd5\u3002"
      }
    },
    {
      id: 4,
      dimension: 'EI',
      direction: 'I',
      text: {
        en: "I need plenty of alone time to recharge after social events.",
        'zh-TW': "\u793e\u4ea4\u6d3b\u52d5\u5f8c\uff0c\u6211\u9700\u8981\u5927\u91cf\u7684\u7368\u8655\u6642\u9593\u4f86\u6062\u5fa9\u7cbe\u529b\u3002",
        'zh-CN': "\u793e\u4ea4\u6d3b\u52a8\u540e\uff0c\u6211\u9700\u8981\u5927\u91cf\u7684\u72ec\u5904\u65f6\u95f4\u6765\u6062\u590d\u7cbe\u529b\u3002"
      }
    },
    {
      id: 5,
      dimension: 'EI',
      direction: 'E',
      text: {
        en: "I enjoy meeting new people and striking up conversations with strangers.",
        'zh-TW': "\u6211\u559c\u6b61\u8a8d\u8b58\u65b0\u670b\u53cb\uff0c\u4e26\u4e3b\u52d5\u8207\u964c\u751f\u4eba\u4ea4\u8ac7\u3002",
        'zh-CN': "\u6211\u559c\u6b22\u8ba4\u8bc6\u65b0\u670b\u53cb\uff0c\u5e76\u4e3b\u52a8\u4e0e\u964c\u751f\u4eba\u4ea4\u8c08\u3002"
      }
    },
    {
      id: 6,
      dimension: 'EI',
      direction: 'I',
      text: {
        en: "I tend to think things through carefully in my head before speaking.",
        'zh-TW': "\u6211\u50be\u5411\u65bc\u5728\u5fc3\u4e2d\u4ed4\u7d30\u601d\u8003\u5f8c\u624d\u958b\u53e3\u8aaa\u8a71\u3002",
        'zh-CN': "\u6211\u503e\u5411\u4e8e\u5728\u5fc3\u4e2d\u4ed4\u7ec6\u601d\u8003\u540e\u624d\u5f00\u53e3\u8bf4\u8bdd\u3002"
      }
    },
    {
      id: 7,
      dimension: 'EI',
      direction: 'E',
      text: {
        en: "I find working in a team more productive than working alone.",
        'zh-TW': "\u6211\u89ba\u5f97\u5718\u968a\u5408\u4f5c\u6bd4\u7368\u81ea\u5de5\u4f5c\u66f4\u6709\u6548\u7387\u3002",
        'zh-CN': "\u6211\u89c9\u5f97\u56e2\u961f\u5408\u4f5c\u6bd4\u72ec\u81ea\u5de5\u4f5c\u66f4\u6709\u6548\u7387\u3002"
      }
    },
    {
      id: 8,
      dimension: 'EI',
      direction: 'I',
      text: {
        en: "I find small talk draining and prefer deep one-on-one conversations.",
        'zh-TW': "\u6211\u89ba\u5f97\u9583\u804a\u5f88\u6d88\u8017\u7cbe\u529b\uff0c\u66f4\u559c\u6b61\u6df1\u5165\u7684\u4e00\u5c0d\u4e00\u5c0d\u8a71\u3002",
        'zh-CN': "\u6211\u89c9\u5f97\u95f2\u804a\u5f88\u6d88\u8017\u7cbe\u529b\uff0c\u66f4\u559c\u6b22\u6df1\u5165\u7684\u4e00\u5bf9\u4e00\u5bf9\u8bdd\u3002"
      }
    },
    {
      id: 9,
      dimension: 'EI',
      direction: 'E',
      text: {
        en: "I am usually the one to initiate plans and organize social gatherings.",
        'zh-TW': "\u6211\u901a\u5e38\u662f\u4e3b\u52d5\u767c\u8d77\u8a08\u756b\u548c\u7d44\u7e54\u793e\u4ea4\u805a\u6703\u7684\u4eba\u3002",
        'zh-CN': "\u6211\u901a\u5e38\u662f\u4e3b\u52a8\u53d1\u8d77\u8ba1\u5212\u548c\u7ec4\u7ec7\u793e\u4ea4\u805a\u4f1a\u7684\u4eba\u3002"
      }
    },
    {
      id: 10,
      dimension: 'EI',
      direction: 'I',
      text: {
        en: "After a long day, I would rather relax alone than go to a social event.",
        'zh-TW': "\u7d93\u904e\u6f2b\u9577\u7684\u4e00\u5929\u5f8c\uff0c\u6211\u5be7\u9858\u7368\u81ea\u653e\u9b06\u800c\u4e0d\u662f\u53c3\u52a0\u793e\u4ea4\u6d3b\u52d5\u3002",
        'zh-CN': "\u7ecf\u8fc7\u6f2b\u957f\u7684\u4e00\u5929\u540e\uff0c\u6211\u5b81\u613f\u72ec\u81ea\u653e\u677e\u800c\u4e0d\u662f\u53c2\u52a0\u793e\u4ea4\u6d3b\u52a8\u3002"
      }
    },
    {
      id: 11,
      dimension: 'EI',
      direction: 'E',
      text: {
        en: "I feel comfortable being the center of attention in a group.",
        'zh-TW': "\u5728\u4eba\u7fa4\u4e2d\u6210\u70ba\u7126\u9ede\u6642\uff0c\u6211\u611f\u5230\u81ea\u5728\u3002",
        'zh-CN': "\u5728\u4eba\u7fa4\u4e2d\u6210\u4e3a\u7126\u70b9\u65f6\uff0c\u6211\u611f\u5230\u81ea\u5728\u3002"
      }
    },
    {
      id: 12,
      dimension: 'EI',
      direction: 'I',
      text: {
        en: "I often feel overwhelmed in noisy, crowded environments.",
        'zh-TW': "\u5728\u5608\u96dc\u3001\u64c1\u64e0\u7684\u74b0\u5883\u4e2d\uff0c\u6211\u5e38\u611f\u5230\u4e0d\u77e5\u6240\u63aa\u3002",
        'zh-CN': "\u5728\u5618\u6742\u3001\u62e5\u6324\u7684\u73af\u5883\u4e2d\uff0c\u6211\u5e38\u611f\u5230\u4e0d\u77e5\u6240\u63aa\u3002"
      }
    },
    {
      id: 13,
      dimension: 'EI',
      direction: 'E',
      text: {
        en: "I enjoy having a wide circle of friends and acquaintances.",
        'zh-TW': "\u6211\u559c\u6b61\u64c1\u6709\u5ee3\u6cdb\u7684\u670b\u53cb\u548c\u719f\u4eba\u570b\u3002",
        'zh-CN': "\u6211\u559c\u6b22\u62e5\u6709\u5e7f\u6cdb\u7684\u670b\u53cb\u548c\u719f\u4eba\u5708\u3002"
      }
    },
    {
      id: 14,
      dimension: 'EI',
      direction: 'I',
      text: {
        en: "I prefer having a few close friends rather than many acquaintances.",
        'zh-TW': "\u6bd4\u8d77\u8a31\u591a\u6cdb\u6cdb\u4e4b\u4ea4\uff0c\u6211\u66f4\u559c\u6b61\u64c1\u6709\u5e7e\u500b\u89aa\u5bc6\u7684\u670b\u53cb\u3002",
        'zh-CN': "\u6bd4\u8d77\u8bb8\u591a\u6cdb\u6cdb\u4e4b\u4ea4\uff0c\u6211\u66f4\u559c\u6b22\u62e5\u6709\u51e0\u4e2a\u4eb2\u5bc6\u7684\u670b\u53cb\u3002"
      }
    },
    {
      id: 15,
      dimension: 'EI',
      direction: 'E',
      text: {
        en: "I get my best ideas through brainstorming and discussing with others.",
        'zh-TW': "\u900f\u904e\u8166\u529b\u6fc0\u76ea\u548c\u8207\u4ed6\u4eba\u8a0e\u8ad6\uff0c\u6211\u80fd\u7522\u751f\u6700\u597d\u7684\u9ede\u5b50\u3002",
        'zh-CN': "\u901a\u8fc7\u5934\u8111\u98ce\u66b4\u548c\u4e0e\u4ed6\u4eba\u8ba8\u8bba\uff0c\u6211\u80fd\u4ea7\u751f\u6700\u597d\u7684\u70b9\u5b50\u3002"
      }
    },
    {
      id: 16,
      dimension: 'EI',
      direction: 'I',
      text: {
        en: "I do my best thinking when I am completely alone and undisturbed.",
        'zh-TW': "\u7576\u6211\u5b8c\u5168\u7368\u8655\u4e14\u4e0d\u53d7\u5e72\u64fe\u6642\uff0c\u6211\u80fd\u6700\u597d\u5730\u601d\u8003\u3002",
        'zh-CN': "\u5f53\u6211\u5b8c\u5168\u72ec\u5904\u4e14\u4e0d\u53d7\u5e72\u6270\u65f6\uff0c\u6211\u80fd\u6700\u597d\u5730\u601d\u8003\u3002"
      }
    },
    {
      id: 17,
      dimension: 'EI',
      direction: 'E',
      text: {
        en: "I tend to act quickly and figure things out as I go.",
        'zh-TW': "\u6211\u50be\u5411\u65bc\u5feb\u901f\u884c\u52d5\uff0c\u908a\u505a\u908a\u60f3\u3002",
        'zh-CN': "\u6211\u503e\u5411\u4e8e\u5feb\u901f\u884c\u52a8\uff0c\u8fb9\u505a\u8fb9\u60f3\u3002"
      }
    },
    {
      id: 18,
      dimension: 'EI',
      direction: 'I',
      text: {
        en: "I find it difficult to speak up in large group discussions.",
        'zh-TW': "\u5728\u5927\u578b\u5718\u9ad4\u8a0e\u8ad6\u4e2d\uff0c\u6211\u89ba\u5f97\u5f88\u96e3\u958b\u53e3\u767c\u8a00\u3002",
        'zh-CN': "\u5728\u5927\u578b\u56e2\u4f53\u8ba8\u8bba\u4e2d\uff0c\u6211\u89c9\u5f97\u5f88\u96be\u5f00\u53e3\u53d1\u8a00\u3002"
      }
    },

    // ========================================================================
    // S/N Dimension (Sensing / Intuition) - Questions 19-36
    // Direction 'S': agreeing favors Sensing
    // Direction 'N': agreeing favors Intuition
    // ========================================================================

    {
      id: 19,
      dimension: 'SN',
      direction: 'S',
      text: {
        en: "I pay close attention to details and rarely miss small things.",
        'zh-TW': "\u6211\u5f88\u6ce8\u610f\u7d30\u7bc0\uff0c\u5f88\u5c11\u5ffd\u7565\u5c0f\u4e8b\u60c5\u3002",
        'zh-CN': "\u6211\u5f88\u6ce8\u610f\u7ec6\u8282\uff0c\u5f88\u5c11\u5ffd\u7565\u5c0f\u4e8b\u60c5\u3002"
      }
    },
    {
      id: 20,
      dimension: 'SN',
      direction: 'N',
      text: {
        en: "I often think about what the future could look like and imagine possibilities.",
        'zh-TW': "\u6211\u7d93\u5e38\u60f3\u50cf\u672a\u4f86\u7684\u6a23\u5b50\u548c\u5404\u7a2e\u53ef\u80fd\u6027\u3002",
        'zh-CN': "\u6211\u7ecf\u5e38\u60f3\u8c61\u672a\u6765\u7684\u6837\u5b50\u548c\u5404\u79cd\u53ef\u80fd\u6027\u3002"
      }
    },
    {
      id: 21,
      dimension: 'SN',
      direction: 'S',
      text: {
        en: "I prefer instructions that are clear, specific, and step-by-step.",
        'zh-TW': "\u6211\u559c\u6b61\u6e05\u6670\u3001\u5177\u9ad4\u4e14\u9010\u6b65\u7684\u6307\u5c0e\u8aaa\u660e\u3002",
        'zh-CN': "\u6211\u559c\u6b22\u6e05\u6670\u3001\u5177\u4f53\u4e14\u9010\u6b65\u7684\u6307\u5bfc\u8bf4\u660e\u3002"
      }
    },
    {
      id: 22,
      dimension: 'SN',
      direction: 'N',
      text: {
        en: "I enjoy exploring abstract theories and concepts even without practical application.",
        'zh-TW': "\u5373\u4f7f\u6c92\u6709\u5be6\u969b\u61c9\u7528\uff0c\u6211\u4e5f\u559c\u6b61\u63a2\u7d22\u62bd\u8c61\u7684\u7406\u8ad6\u548c\u6982\u5ff5\u3002",
        'zh-CN': "\u5373\u4f7f\u6ca1\u6709\u5b9e\u9645\u5e94\u7528\uff0c\u6211\u4e5f\u559c\u6b22\u63a2\u7d22\u62bd\u8c61\u7684\u7406\u8bba\u548c\u6982\u5ff5\u3002"
      }
    },
    {
      id: 23,
      dimension: 'SN',
      direction: 'S',
      text: {
        en: "I trust information that comes from direct experience more than hunches.",
        'zh-TW': "\u6bd4\u8d77\u76f4\u89ba\uff0c\u6211\u66f4\u4fe1\u4efb\u4f86\u81ea\u89aa\u8eab\u7d93\u9a57\u7684\u8cc7\u8a0a\u3002",
        'zh-CN': "\u6bd4\u8d77\u76f4\u89c9\uff0c\u6211\u66f4\u4fe1\u4efb\u6765\u81ea\u4eb2\u8eab\u7ecf\u9a8c\u7684\u4fe1\u606f\u3002"
      }
    },
    {
      id: 24,
      dimension: 'SN',
      direction: 'N',
      text: {
        en: "I often see patterns and connections that others do not notice.",
        'zh-TW': "\u6211\u7d93\u5e38\u80fd\u770b\u5230\u5225\u4eba\u6c92\u6ce8\u610f\u5230\u7684\u6a21\u5f0f\u548c\u806f\u7e6b\u3002",
        'zh-CN': "\u6211\u7ecf\u5e38\u80fd\u770b\u5230\u522b\u4eba\u6ca1\u6ce8\u610f\u5230\u7684\u6a21\u5f0f\u548c\u8054\u7cfb\u3002"
      }
    },
    {
      id: 25,
      dimension: 'SN',
      direction: 'S',
      text: {
        en: "I focus on what is happening right now rather than what might happen later.",
        'zh-TW': "\u6211\u5c08\u6ce8\u65bc\u7576\u4e0b\u6b63\u5728\u767c\u751f\u7684\u4e8b\u60c5\uff0c\u800c\u4e0d\u662f\u4ee5\u5f8c\u53ef\u80fd\u767c\u751f\u7684\u4e8b\u3002",
        'zh-CN': "\u6211\u4e13\u6ce8\u4e8e\u5f53\u4e0b\u6b63\u5728\u53d1\u751f\u7684\u4e8b\u60c5\uff0c\u800c\u4e0d\u662f\u4ee5\u540e\u53ef\u80fd\u53d1\u751f\u7684\u4e8b\u3002"
      }
    },
    {
      id: 26,
      dimension: 'SN',
      direction: 'N',
      text: {
        en: "I get bored with routine tasks and prefer variety and new challenges.",
        'zh-TW': "\u6211\u6703\u5c0d\u4f8b\u884c\u516c\u4e8b\u611f\u5230\u53ad\u5026\uff0c\u66f4\u559c\u6b61\u591a\u6a23\u6027\u548c\u65b0\u6311\u6230\u3002",
        'zh-CN': "\u6211\u4f1a\u5bf9\u4f8b\u884c\u516c\u4e8b\u611f\u5230\u538c\u5026\uff0c\u66f4\u559c\u6b22\u591a\u6837\u6027\u548c\u65b0\u6311\u6218\u3002"
      }
    },
    {
      id: 27,
      dimension: 'SN',
      direction: 'S',
      text: {
        en: "I prefer to learn new skills through hands-on practice rather than reading theory.",
        'zh-TW': "\u6bd4\u8d77\u95b1\u8b80\u7406\u8ad6\uff0c\u6211\u66f4\u559c\u6b61\u900f\u904e\u5be6\u969b\u64cd\u4f5c\u4f86\u5b78\u7fd2\u65b0\u6280\u80fd\u3002",
        'zh-CN': "\u6bd4\u8d77\u9605\u8bfb\u7406\u8bba\uff0c\u6211\u66f4\u559c\u6b22\u901a\u8fc7\u5b9e\u9645\u64cd\u4f5c\u6765\u5b66\u4e60\u65b0\u6280\u80fd\u3002"
      }
    },
    {
      id: 28,
      dimension: 'SN',
      direction: 'N',
      text: {
        en: "I am more interested in the big picture than in the specific details.",
        'zh-TW': "\u6bd4\u8d77\u5177\u9ad4\u7d30\u7bc0\uff0c\u6211\u5c0d\u5927\u5c40\u66f4\u611f\u8208\u8da3\u3002",
        'zh-CN': "\u6bd4\u8d77\u5177\u4f53\u7ec6\u8282\uff0c\u6211\u5bf9\u5927\u5c40\u66f4\u611f\u5174\u8da3\u3002"
      }
    },
    {
      id: 29,
      dimension: 'SN',
      direction: 'S',
      text: {
        en: "I like to describe things in a literal and precise way.",
        'zh-TW': "\u6211\u559c\u6b61\u4ee5\u5be6\u969b\u4e14\u7cbe\u78ba\u7684\u65b9\u5f0f\u4f86\u63cf\u8ff0\u4e8b\u7269\u3002",
        'zh-CN': "\u6211\u559c\u6b22\u4ee5\u5b9e\u9645\u4e14\u7cbe\u786e\u7684\u65b9\u5f0f\u6765\u63cf\u8ff0\u4e8b\u7269\u3002"
      }
    },
    {
      id: 30,
      dimension: 'SN',
      direction: 'N',
      text: {
        en: "I frequently use metaphors and analogies when explaining things.",
        'zh-TW': "\u6211\u5728\u89e3\u91cb\u4e8b\u7269\u6642\u7d93\u5e38\u4f7f\u7528\u6bd4\u55bb\u548c\u985e\u6bd4\u3002",
        'zh-CN': "\u6211\u5728\u89e3\u91ca\u4e8b\u7269\u65f6\u7ecf\u5e38\u4f7f\u7528\u6bd4\u55bb\u548c\u7c7b\u6bd4\u3002"
      }
    },
    {
      id: 31,
      dimension: 'SN',
      direction: 'S',
      text: {
        en: "I value practical solutions that have been proven to work.",
        'zh-TW': "\u6211\u91cd\u8996\u5df2\u88ab\u8b49\u660e\u6709\u6548\u7684\u5be6\u969b\u89e3\u6c7a\u65b9\u6848\u3002",
        'zh-CN': "\u6211\u91cd\u89c6\u5df2\u88ab\u8bc1\u660e\u6709\u6548\u7684\u5b9e\u9645\u89e3\u51b3\u65b9\u6848\u3002"
      }
    },
    {
      id: 32,
      dimension: 'SN',
      direction: 'N',
      text: {
        en: "I enjoy brainstorming many creative ideas, even if most are impractical.",
        'zh-TW': "\u6211\u559c\u6b61\u8166\u529b\u6fc0\u76ea\u51fa\u8a31\u591a\u5275\u610f\uff0c\u5373\u4f7f\u5927\u591a\u6578\u4e0d\u5207\u5be6\u969b\u3002",
        'zh-CN': "\u6211\u559c\u6b22\u5934\u8111\u98ce\u66b4\u51fa\u8bb8\u591a\u521b\u610f\uff0c\u5373\u4f7f\u5927\u591a\u6570\u4e0d\u5207\u5b9e\u9645\u3002"
      }
    },
    {
      id: 33,
      dimension: 'SN',
      direction: 'S',
      text: {
        en: "When cooking, I prefer to follow a recipe exactly rather than improvise.",
        'zh-TW': "\u7167\u98df\u8b5c\u505a\u83dc\u6642\uff0c\u6211\u559c\u6b61\u5b8c\u5168\u6309\u7167\u98df\u8b5c\u4f86\uff0c\u800c\u4e0d\u662f\u5373\u8208\u767c\u63ee\u3002",
        'zh-CN': "\u7167\u98df\u8c31\u505a\u83dc\u65f6\uff0c\u6211\u559c\u6b22\u5b8c\u5168\u6309\u7167\u98df\u8c31\u6765\uff0c\u800c\u4e0d\u662f\u5373\u5174\u53d1\u6325\u3002"
      }
    },
    {
      id: 34,
      dimension: 'SN',
      direction: 'N',
      text: {
        en: "I often find myself daydreaming or lost in thought.",
        'zh-TW': "\u6211\u7d93\u5e38\u767c\u73fe\u81ea\u5df1\u5728\u505a\u767d\u65e5\u5922\u6216\u6c89\u6d78\u5728\u601d\u7dd2\u4e2d\u3002",
        'zh-CN': "\u6211\u7ecf\u5e38\u53d1\u73b0\u81ea\u5df1\u5728\u505a\u767d\u65e5\u68a6\u6216\u6c89\u6d78\u5728\u601d\u7eea\u4e2d\u3002"
      }
    },
    {
      id: 35,
      dimension: 'SN',
      direction: 'S',
      text: {
        en: "I remember events mostly by the specific facts and details of what happened.",
        'zh-TW': "\u6211\u4e3b\u8981\u901a\u904e\u5177\u9ad4\u7684\u4e8b\u5be6\u548c\u7d30\u7bc0\u4f86\u8a18\u4f4f\u4e8b\u4ef6\u3002",
        'zh-CN': "\u6211\u4e3b\u8981\u901a\u8fc7\u5177\u4f53\u7684\u4e8b\u5b9e\u548c\u7ec6\u8282\u6765\u8bb0\u4f4f\u4e8b\u4ef6\u3002"
      }
    },
    {
      id: 36,
      dimension: 'SN',
      direction: 'N',
      text: {
        en: "I am drawn to innovation and enjoy finding entirely new ways to do things.",
        'zh-TW': "\u6211\u88ab\u5275\u65b0\u6240\u5438\u5f15\uff0c\u559c\u6b61\u627e\u5230\u5168\u65b0\u7684\u65b9\u6cd5\u4f86\u505a\u4e8b\u3002",
        'zh-CN': "\u6211\u88ab\u521b\u65b0\u6240\u5438\u5f15\uff0c\u559c\u6b22\u627e\u5230\u5168\u65b0\u7684\u65b9\u6cd5\u6765\u505a\u4e8b\u3002"
      }
    },

    // ========================================================================
    // T/F Dimension (Thinking / Feeling) - Questions 37-54
    // Direction 'T': agreeing favors Thinking
    // Direction 'F': agreeing favors Feeling
    // ========================================================================

    {
      id: 37,
      dimension: 'TF',
      direction: 'T',
      text: {
        en: "When making decisions, I rely more on logic than on how I feel.",
        'zh-TW': "\u505a\u6c7a\u5b9a\u6642\uff0c\u6211\u66f4\u4f9d\u8cf4\u908f\u8f2f\u800c\u4e0d\u662f\u611f\u89ba\u3002",
        'zh-CN': "\u505a\u51b3\u5b9a\u65f6\uff0c\u6211\u66f4\u4f9d\u8d56\u903b\u8f91\u800c\u4e0d\u662f\u611f\u89c9\u3002"
      }
    },
    {
      id: 38,
      dimension: 'TF',
      direction: 'F',
      text: {
        en: "I am deeply affected by other people's emotions and moods.",
        'zh-TW': "\u6211\u6df1\u53d7\u4ed6\u4eba\u7684\u60c5\u7dd2\u548c\u5fc3\u60c5\u5f71\u97ff\u3002",
        'zh-CN': "\u6211\u6df1\u53d7\u4ed6\u4eba\u7684\u60c5\u7eea\u548c\u5fc3\u60c5\u5f71\u54cd\u3002"
      }
    },
    {
      id: 39,
      dimension: 'TF',
      direction: 'T',
      text: {
        en: "I think it is more important to be truthful than to be tactful.",
        'zh-TW': "\u6211\u8a8d\u70ba\u8aaa\u5be6\u8a71\u6bd4\u5713\u6ed1\u66f4\u91cd\u8981\u3002",
        'zh-CN': "\u6211\u8ba4\u4e3a\u8bf4\u5b9e\u8bdd\u6bd4\u5706\u6ed1\u66f4\u91cd\u8981\u3002"
      }
    },
    {
      id: 40,
      dimension: 'TF',
      direction: 'F',
      text: {
        en: "Maintaining harmony in a group is more important to me than winning an argument.",
        'zh-TW': "\u5c0d\u6211\u4f86\u8aaa\uff0c\u7dad\u6301\u7fa4\u9ad4\u548c\u8ae7\u6bd4\u8d0f\u5f97\u722d\u8ad6\u66f4\u91cd\u8981\u3002",
        'zh-CN': "\u5bf9\u6211\u6765\u8bf4\uff0c\u7ef4\u6301\u7fa4\u4f53\u548c\u8c10\u6bd4\u8d62\u5f97\u4e89\u8bba\u66f4\u91cd\u8981\u3002"
      }
    },
    {
      id: 41,
      dimension: 'TF',
      direction: 'T',
      text: {
        en: "I can easily point out flaws in an argument without feeling uncomfortable.",
        'zh-TW': "\u6211\u80fd\u8f15\u9b06\u6307\u51fa\u8ad6\u9ede\u4e2d\u7684\u7f3a\u9677\uff0c\u4e26\u4e0d\u6703\u611f\u5230\u4e0d\u81ea\u5728\u3002",
        'zh-CN': "\u6211\u80fd\u8f7b\u677e\u6307\u51fa\u8bba\u70b9\u4e2d\u7684\u7f3a\u9677\uff0c\u5e76\u4e0d\u4f1a\u611f\u5230\u4e0d\u81ea\u5728\u3002"
      }
    },
    {
      id: 42,
      dimension: 'TF',
      direction: 'F',
      text: {
        en: "I often consider how my decisions will affect other people's feelings.",
        'zh-TW': "\u6211\u7d93\u5e38\u8003\u616e\u6211\u7684\u6c7a\u5b9a\u6703\u5982\u4f55\u5f71\u97ff\u4ed6\u4eba\u7684\u611f\u53d7\u3002",
        'zh-CN': "\u6211\u7ecf\u5e38\u8003\u8651\u6211\u7684\u51b3\u5b9a\u4f1a\u5982\u4f55\u5f71\u54cd\u4ed6\u4eba\u7684\u611f\u53d7\u3002"
      }
    },
    {
      id: 43,
      dimension: 'TF',
      direction: 'T',
      text: {
        en: "I believe fairness means applying the same rules to everyone equally.",
        'zh-TW': "\u6211\u8a8d\u70ba\u516c\u5e73\u610f\u5473\u8457\u5c0d\u6bcf\u500b\u4eba\u4e00\u8996\u540c\u4ec1\u5730\u9069\u7528\u76f8\u540c\u7684\u898f\u5247\u3002",
        'zh-CN': "\u6211\u8ba4\u4e3a\u516c\u5e73\u610f\u5473\u7740\u5bf9\u6bcf\u4e2a\u4eba\u4e00\u89c6\u540c\u4ec1\u5730\u9002\u7528\u76f8\u540c\u7684\u89c4\u5219\u3002"
      }
    },
    {
      id: 44,
      dimension: 'TF',
      direction: 'F',
      text: {
        en: "I find it natural to comfort someone who is upset, even if I do not know them well.",
        'zh-TW': "\u5373\u4f7f\u4e0d\u592a\u719f\uff0c\u6211\u4e5f\u6703\u81ea\u7136\u5730\u5b89\u6170\u96e3\u904e\u7684\u4eba\u3002",
        'zh-CN': "\u5373\u4f7f\u4e0d\u592a\u719f\uff0c\u6211\u4e5f\u4f1a\u81ea\u7136\u5730\u5b89\u6170\u96be\u8fc7\u7684\u4eba\u3002"
      }
    },
    {
      id: 45,
      dimension: 'TF',
      direction: 'T',
      text: {
        en: "I prefer to analyze problems objectively rather than go with my gut feeling.",
        'zh-TW': "\u6bd4\u8d77\u6191\u76f4\u89ba\uff0c\u6211\u66f4\u559c\u6b61\u5ba2\u89c0\u5730\u5206\u6790\u554f\u984c\u3002",
        'zh-CN': "\u6bd4\u8d77\u51ed\u76f4\u89c9\uff0c\u6211\u66f4\u559c\u6b22\u5ba2\u89c2\u5730\u5206\u6790\u95ee\u9898\u3002"
      }
    },
    {
      id: 46,
      dimension: 'TF',
      direction: 'F',
      text: {
        en: "I tend to prioritize people's needs over strict efficiency.",
        'zh-TW': "\u6211\u50be\u5411\u65bc\u512a\u5148\u8003\u616e\u4eba\u5011\u7684\u9700\u6c42\uff0c\u800c\u4e0d\u662f\u56b4\u683c\u7684\u6548\u7387\u3002",
        'zh-CN': "\u6211\u503e\u5411\u4e8e\u4f18\u5148\u8003\u8651\u4eba\u4eec\u7684\u9700\u6c42\uff0c\u800c\u4e0d\u662f\u4e25\u683c\u7684\u6548\u7387\u3002"
      }
    },
    {
      id: 47,
      dimension: 'TF',
      direction: 'T',
      text: {
        en: "I stay calm and composed during emotional situations.",
        'zh-TW': "\u5728\u60c5\u7dd2\u5316\u7684\u60c5\u6cc1\u4e0b\uff0c\u6211\u80fd\u4fdd\u6301\u5e73\u975c\u548c\u6c89\u8457\u3002",
        'zh-CN': "\u5728\u60c5\u7eea\u5316\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u80fd\u4fdd\u6301\u5e73\u9759\u548c\u6c89\u7740\u3002"
      }
    },
    {
      id: 48,
      dimension: 'TF',
      direction: 'F',
      text: {
        en: "I often put myself in other people's shoes to understand their perspective.",
        'zh-TW': "\u6211\u7d93\u5e38\u8a2d\u8eab\u8655\u5730\u5730\u70ba\u4ed6\u4eba\u8457\u60f3\uff0c\u4ee5\u7406\u89e3\u4ed6\u5011\u7684\u89c0\u9ede\u3002",
        'zh-CN': "\u6211\u7ecf\u5e38\u8bbe\u8eab\u5904\u5730\u5730\u4e3a\u4ed6\u4eba\u7740\u60f3\uff0c\u4ee5\u7406\u89e3\u4ed6\u4eec\u7684\u89c2\u70b9\u3002"
      }
    },
    {
      id: 49,
      dimension: 'TF',
      direction: 'T',
      text: {
        en: "I value competence and expertise more than personal warmth in a colleague.",
        'zh-TW': "\u5728\u540c\u4e8b\u8eab\u4e0a\uff0c\u6211\u66f4\u770b\u91cd\u80fd\u529b\u548c\u5c08\u696d\uff0c\u800c\u4e0d\u662f\u500b\u4eba\u89aa\u548c\u529b\u3002",
        'zh-CN': "\u5728\u540c\u4e8b\u8eab\u4e0a\uff0c\u6211\u66f4\u770b\u91cd\u80fd\u529b\u548c\u4e13\u4e1a\uff0c\u800c\u4e0d\u662f\u4e2a\u4eba\u4eb2\u548c\u529b\u3002"
      }
    },
    {
      id: 50,
      dimension: 'TF',
      direction: 'F',
      text: {
        en: "I find it hard to give negative feedback because I worry about hurting feelings.",
        'zh-TW': "\u6211\u89ba\u5f97\u5f88\u96e3\u7d66\u51fa\u8ca0\u9762\u56de\u994b\uff0c\u56e0\u70ba\u6211\u64d4\u5fc3\u50b7\u5bb3\u4ed6\u4eba\u7684\u611f\u60c5\u3002",
        'zh-CN': "\u6211\u89c9\u5f97\u5f88\u96be\u7ed9\u51fa\u8d1f\u9762\u53cd\u9988\uff0c\u56e0\u4e3a\u6211\u62c5\u5fc3\u4f24\u5bb3\u4ed6\u4eba\u7684\u611f\u60c5\u3002"
      }
    },
    {
      id: 51,
      dimension: 'TF',
      direction: 'T',
      text: {
        en: "I think the best decisions come from careful analysis, not emotions.",
        'zh-TW': "\u6211\u8a8d\u70ba\u6700\u597d\u7684\u6c7a\u5b9a\u4f86\u81ea\u4ed4\u7d30\u7684\u5206\u6790\uff0c\u800c\u4e0d\u662f\u60c5\u7dd2\u3002",
        'zh-CN': "\u6211\u8ba4\u4e3a\u6700\u597d\u7684\u51b3\u5b9a\u6765\u81ea\u4ed4\u7ec6\u7684\u5206\u6790\uff0c\u800c\u4e0d\u662f\u60c5\u7eea\u3002"
      }
    },
    {
      id: 52,
      dimension: 'TF',
      direction: 'F',
      text: {
        en: "I am moved by stories of people overcoming hardship and helping each other.",
        'zh-TW': "\u4eba\u5011\u514b\u670d\u56f0\u96e3\u3001\u4e92\u76f8\u5e6b\u52a9\u7684\u6545\u4e8b\u6703\u6df1\u6df1\u6253\u52d5\u6211\u3002",
        'zh-CN': "\u4eba\u4eec\u514b\u670d\u56f0\u96be\u3001\u4e92\u76f8\u5e2e\u52a9\u7684\u6545\u4e8b\u4f1a\u6df1\u6df1\u6253\u52a8\u6211\u3002"
      }
    },
    {
      id: 53,
      dimension: 'TF',
      direction: 'T',
      text: {
        en: "In a disagreement, I focus on who has the stronger argument rather than who feels hurt.",
        'zh-TW': "\u5728\u722d\u8ad6\u4e2d\uff0c\u6211\u66f4\u95dc\u6ce8\u8ab0\u7684\u8ad6\u9ede\u66f4\u6709\u529b\uff0c\u800c\u4e0d\u662f\u8ab0\u611f\u5230\u53d7\u50b7\u3002",
        'zh-CN': "\u5728\u4e89\u8bba\u4e2d\uff0c\u6211\u66f4\u5173\u6ce8\u8c01\u7684\u8bba\u70b9\u66f4\u6709\u529b\uff0c\u800c\u4e0d\u662f\u8c01\u611f\u5230\u53d7\u4f24\u3002"
      }
    },
    {
      id: 54,
      dimension: 'TF',
      direction: 'F',
      text: {
        en: "I believe showing vulnerability and emotion is a sign of strength, not weakness.",
        'zh-TW': "\u6211\u8a8d\u70ba\u5c55\u73fe\u8106\u5f31\u548c\u60c5\u611f\u662f\u5805\u5f37\u7684\u8868\u73fe\uff0c\u800c\u4e0d\u662f\u8eef\u5f31\u3002",
        'zh-CN': "\u6211\u8ba4\u4e3a\u5c55\u73b0\u8106\u5f31\u548c\u60c5\u611f\u662f\u575a\u5f3a\u7684\u8868\u73b0\uff0c\u800c\u4e0d\u662f\u61e6\u5f31\u3002"
      }
    },

    // ========================================================================
    // J/P Dimension (Judging / Perceiving) - Questions 55-72
    // Direction 'J': agreeing favors Judging
    // Direction 'P': agreeing favors Perceiving
    // ========================================================================

    {
      id: 55,
      dimension: 'JP',
      direction: 'J',
      text: {
        en: "I like to plan my day in advance and follow a schedule.",
        'zh-TW': "\u6211\u559c\u6b61\u63d0\u524d\u898f\u5283\u6211\u7684\u4e00\u5929\u4e26\u6309\u7167\u8a08\u756b\u57f7\u884c\u3002",
        'zh-CN': "\u6211\u559c\u6b22\u63d0\u524d\u89c4\u5212\u6211\u7684\u4e00\u5929\u5e76\u6309\u7167\u8ba1\u5212\u6267\u884c\u3002"
      }
    },
    {
      id: 56,
      dimension: 'JP',
      direction: 'P',
      text: {
        en: "I prefer to keep my options open rather than commit to a fixed plan.",
        'zh-TW': "\u6bd4\u8d77\u78ba\u5b9a\u56fa\u5b9a\u8a08\u756b\uff0c\u6211\u66f4\u559c\u6b61\u4fdd\u7559\u9078\u64c7\u7684\u5f48\u6027\u3002",
        'zh-CN': "\u6bd4\u8d77\u786e\u5b9a\u56fa\u5b9a\u8ba1\u5212\uff0c\u6211\u66f4\u559c\u6b22\u4fdd\u7559\u9009\u62e9\u7684\u5f39\u6027\u3002"
      }
    },
    {
      id: 57,
      dimension: 'JP',
      direction: 'J',
      text: {
        en: "I feel uneasy when things are left unfinished or undecided.",
        'zh-TW': "\u7576\u4e8b\u60c5\u672a\u5b8c\u6210\u6216\u672a\u6c7a\u5b9a\u6642\uff0c\u6211\u6703\u611f\u5230\u4e0d\u5b89\u3002",
        'zh-CN': "\u5f53\u4e8b\u60c5\u672a\u5b8c\u6210\u6216\u672a\u51b3\u5b9a\u65f6\uff0c\u6211\u4f1a\u611f\u5230\u4e0d\u5b89\u3002"
      }
    },
    {
      id: 58,
      dimension: 'JP',
      direction: 'P',
      text: {
        en: "I enjoy going with the flow and seeing where the day takes me.",
        'zh-TW': "\u6211\u559c\u6b61\u96a8\u9047\u800c\u5b89\uff0c\u770b\u770b\u4e00\u5929\u6703\u5e36\u7d66\u6211\u4ec0\u9ebc\u3002",
        'zh-CN': "\u6211\u559c\u6b22\u968f\u9047\u800c\u5b89\uff0c\u770b\u770b\u4e00\u5929\u4f1a\u5e26\u7ed9\u6211\u4ec0\u4e48\u3002"
      }
    },
    {
      id: 59,
      dimension: 'JP',
      direction: 'J',
      text: {
        en: "I prefer to finish one task completely before starting another.",
        'zh-TW': "\u6211\u559c\u6b61\u5b8c\u5168\u5b8c\u6210\u4e00\u9805\u4efb\u52d9\u5f8c\u518d\u958b\u59cb\u4e0b\u4e00\u9805\u3002",
        'zh-CN': "\u6211\u559c\u6b22\u5b8c\u5168\u5b8c\u6210\u4e00\u9879\u4efb\u52a1\u540e\u518d\u5f00\u59cb\u4e0b\u4e00\u9879\u3002"
      }
    },
    {
      id: 60,
      dimension: 'JP',
      direction: 'P',
      text: {
        en: "I often start multiple projects at once and switch between them.",
        'zh-TW': "\u6211\u7d93\u5e38\u540c\u6642\u958b\u59cb\u591a\u500b\u5c08\u6848\uff0c\u4e26\u5728\u5b83\u5011\u4e4b\u9593\u4f86\u56de\u5207\u63db\u3002",
        'zh-CN': "\u6211\u7ecf\u5e38\u540c\u65f6\u5f00\u59cb\u591a\u4e2a\u9879\u76ee\uff0c\u5e76\u5728\u5b83\u4eec\u4e4b\u95f4\u6765\u56de\u5207\u6362\u3002"
      }
    },
    {
      id: 61,
      dimension: 'JP',
      direction: 'J',
      text: {
        en: "I keep my workspace neat and organized.",
        'zh-TW': "\u6211\u6703\u4fdd\u6301\u5de5\u4f5c\u7a7a\u9593\u6574\u6f54\u6709\u5e8f\u3002",
        'zh-CN': "\u6211\u4f1a\u4fdd\u6301\u5de5\u4f5c\u7a7a\u95f4\u6574\u6d01\u6709\u5e8f\u3002"
      }
    },
    {
      id: 62,
      dimension: 'JP',
      direction: 'P',
      text: {
        en: "I work best under pressure and close to deadlines.",
        'zh-TW': "\u6211\u5728\u58d3\u529b\u4e0b\u548c\u63a5\u8fd1\u622a\u6b62\u65e5\u671f\u6642\u5de5\u4f5c\u72c0\u614b\u6700\u597d\u3002",
        'zh-CN': "\u6211\u5728\u538b\u529b\u4e0b\u548c\u63a5\u8fd1\u622a\u6b62\u65e5\u671f\u65f6\u5de5\u4f5c\u72b6\u6001\u6700\u597d\u3002"
      }
    },
    {
      id: 63,
      dimension: 'JP',
      direction: 'J',
      text: {
        en: "I make to-do lists and feel satisfied when I check items off.",
        'zh-TW': "\u6211\u6703\u5217\u5f85\u8fa6\u6e05\u55ae\uff0c\u4e26\u5728\u5b8c\u6210\u9805\u76ee\u6642\u611f\u5230\u6eff\u8db3\u3002",
        'zh-CN': "\u6211\u4f1a\u5217\u5f85\u529e\u6e05\u5355\uff0c\u5e76\u5728\u5b8c\u6210\u9879\u76ee\u65f6\u611f\u5230\u6ee1\u8db3\u3002"
      }
    },
    {
      id: 64,
      dimension: 'JP',
      direction: 'P',
      text: {
        en: "I find strict rules and rigid structures limiting and frustrating.",
        'zh-TW': "\u6211\u89ba\u5f97\u56b4\u683c\u7684\u898f\u5247\u548c\u50f5\u5316\u7684\u7d50\u69cb\u8b93\u4eba\u53d7\u9650\u548c\u6cae\u55aa\u3002",
        'zh-CN': "\u6211\u89c9\u5f97\u4e25\u683c\u7684\u89c4\u5219\u548c\u50f5\u5316\u7684\u7ed3\u6784\u8ba9\u4eba\u53d7\u9650\u548c\u6cae\u4e27\u3002"
      }
    },
    {
      id: 65,
      dimension: 'JP',
      direction: 'J',
      text: {
        en: "I prefer to have clear expectations and know what is coming next.",
        'zh-TW': "\u6211\u559c\u6b61\u6709\u660e\u78ba\u7684\u671f\u671b\uff0c\u4e26\u77e5\u9053\u63a5\u4e0b\u4f86\u6703\u767c\u751f\u4ec0\u9ebc\u3002",
        'zh-CN': "\u6211\u559c\u6b22\u6709\u660e\u786e\u7684\u671f\u671b\uff0c\u5e76\u77e5\u9053\u63a5\u4e0b\u6765\u4f1a\u53d1\u751f\u4ec0\u4e48\u3002"
      }
    },
    {
      id: 66,
      dimension: 'JP',
      direction: 'P',
      text: {
        en: "I enjoy surprises and unexpected changes in plans.",
        'zh-TW': "\u6211\u559c\u6b61\u9a5a\u559c\u548c\u8a08\u756b\u4e2d\u7684\u610f\u5916\u8b8a\u5316\u3002",
        'zh-CN': "\u6211\u559c\u6b22\u60ca\u559c\u548c\u8ba1\u5212\u4e2d\u7684\u610f\u5916\u53d8\u5316\u3002"
      }
    },
    {
      id: 67,
      dimension: 'JP',
      direction: 'J',
      text: {
        en: "I am usually punctual and expect others to be on time as well.",
        'zh-TW': "\u6211\u901a\u5e38\u5f88\u6e96\u6642\uff0c\u4e5f\u671f\u671b\u5225\u4eba\u80fd\u6e96\u6642\u3002",
        'zh-CN': "\u6211\u901a\u5e38\u5f88\u51c6\u65f6\uff0c\u4e5f\u671f\u671b\u522b\u4eba\u80fd\u51c6\u65f6\u3002"
      }
    },
    {
      id: 68,
      dimension: 'JP',
      direction: 'P',
      text: {
        en: "I tend to procrastinate and leave things to the last minute.",
        'zh-TW': "\u6211\u50be\u5411\u65bc\u62d6\u5ef6\uff0c\u628a\u4e8b\u60c5\u7559\u5230\u6700\u5f8c\u4e00\u523b\u3002",
        'zh-CN': "\u6211\u503e\u5411\u4e8e\u62d6\u5ef6\uff0c\u628a\u4e8b\u60c5\u7559\u5230\u6700\u540e\u4e00\u523b\u3002"
      }
    },
    {
      id: 69,
      dimension: 'JP',
      direction: 'J',
      text: {
        en: "When traveling, I prefer to have a detailed itinerary planned out.",
        'zh-TW': "\u65c5\u884c\u6642\uff0c\u6211\u559c\u6b61\u4e8b\u5148\u898f\u5283\u597d\u8a73\u7d30\u7684\u884c\u7a0b\u3002",
        'zh-CN': "\u65c5\u884c\u65f6\uff0c\u6211\u559c\u6b22\u4e8b\u5148\u89c4\u5212\u597d\u8be6\u7ec6\u7684\u884c\u7a0b\u3002"
      }
    },
    {
      id: 70,
      dimension: 'JP',
      direction: 'P',
      text: {
        en: "When traveling, I prefer to be spontaneous and explore without a fixed plan.",
        'zh-TW': "\u65c5\u884c\u6642\uff0c\u6211\u559c\u6b61\u96a8\u6027\u63a2\u7d22\uff0c\u4e0d\u62d8\u6ce5\u65bc\u56fa\u5b9a\u8a08\u756b\u3002",
        'zh-CN': "\u65c5\u884c\u65f6\uff0c\u6211\u559c\u6b22\u968f\u6027\u63a2\u7d22\uff0c\u4e0d\u62d8\u6ce5\u4e8e\u56fa\u5b9a\u8ba1\u5212\u3002"
      }
    },
    {
      id: 71,
      dimension: 'JP',
      direction: 'J',
      text: {
        en: "I feel more comfortable when a decision has been made and things are settled.",
        'zh-TW': "\u7576\u6c7a\u5b9a\u5df2\u7d93\u505a\u51fa\u3001\u4e8b\u60c5\u5df2\u7d93\u78ba\u5b9a\u6642\uff0c\u6211\u6703\u611f\u5230\u66f4\u81ea\u5728\u3002",
        'zh-CN': "\u5f53\u51b3\u5b9a\u5df2\u7ecf\u505a\u51fa\u3001\u4e8b\u60c5\u5df2\u7ecf\u786e\u5b9a\u65f6\uff0c\u6211\u4f1a\u611f\u5230\u66f4\u81ea\u5728\u3002"
      }
    },
    {
      id: 72,
      dimension: 'JP',
      direction: 'P',
      text: {
        en: "I like to keep gathering information before making a decision, even if it takes longer.",
        'zh-TW': "\u5373\u4f7f\u9700\u8981\u66f4\u591a\u6642\u9593\uff0c\u6211\u4e5f\u559c\u6b61\u5728\u505a\u6c7a\u5b9a\u524d\u6301\u7e8c\u6536\u96c6\u8cc7\u8a0a\u3002",
        'zh-CN': "\u5373\u4f7f\u9700\u8981\u66f4\u591a\u65f6\u95f4\uff0c\u6211\u4e5f\u559c\u6b22\u5728\u505a\u51b3\u5b9a\u524d\u6301\u7eed\u6536\u96c6\u4fe1\u606f\u3002"
      }
    }

  ];

})();
