exports.buildTransactions = (expenses) => {
  return expenses.map(e => {
    const ceiling = Math.ceil(e.amount / 100) * 100;
    const remanent = ceiling - e.amount;

    return {
      date: e.date,
      amount: e.amount,
      ceiling,
      remanent
    };
  });
};