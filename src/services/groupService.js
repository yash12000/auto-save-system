const { isInRange } = require('../utils/dateUtils');

exports.groupByK = (transactions, k) => {
  return k.map(period => {
    let sum = 0;

    transactions.forEach(t => {
      if (isInRange(t.date, period.start, period.end)) {
        sum += Number(t.remanent || 0);
      }
    });

    return {
      start: period.start,
      end: period.end,
      amount: sum || 0
    };
  });
};