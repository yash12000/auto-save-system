const { isInRange } = require('../utils/dateUtils');

exports.applyRules = (transactions, q = [], p = []) => {
  return transactions.map(t => {
    let rem = Number(t.remanent || 0);

    let matchedQ = null;

    for (let rule of q) {
      if (isInRange(t.date, rule.start, rule.end)) {
        if (!matchedQ || new Date(rule.start) > new Date(matchedQ.start)) {
          matchedQ = rule;
        }
      }
    }

    if (matchedQ) {
      rem = Number(matchedQ.fixed || 0);
    }

    for (let rule of p) {
      if (isInRange(t.date, rule.start, rule.end)) {
        rem += Number(rule.extra || 0);
      }
    }

    return {
      ...t,
      remanent: rem
    };
  });
};