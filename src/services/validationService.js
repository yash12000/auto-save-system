exports.validate = (transactions) => {
  const seen = new Set();
  const valid = [];
  const invalid = [];

  for (let t of transactions) {
    if (t.amount < 0) {
      invalid.push({ ...t, message: "Negative amount" });
      continue;
    }

    if (seen.has(t.date)) {
      invalid.push({ ...t, message: "Duplicate transaction" });
      continue;
    }

    seen.add(t.date);
    valid.push(t);
  }

  return { valid, invalid };
};