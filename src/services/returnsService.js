const NPS_RATE = 0.0711;
const INDEX_RATE = 0.1449;

const compound = (P, r, t) => {
  return P * Math.pow(1 + r, t);
};

const inflationAdjust = (A, inflation, t) => {
  return A / Math.pow(1 + inflation / 100, t);
};

exports.calculate = (amount, age, inflation, rate) => {
  if (!amount) return 0;

  const years = age < 60 ? 60 - age : 5;

  const final = amount * Math.pow(1 + rate, years);
  const real = final / Math.pow(1 + inflation / 100, years);

  return real;
};