const transactionService = require('../services/transactionService');
const validationService = require('../services/validationService');
const ruleEngine = require('../services/ruleEngine');
const groupService = require('../services/groupService');
const returnsService = require('../services/returnsService');

exports.parseTransactions = (req, res) => {
  try {
    const transactions = transactionService.buildTransactions(req.body);
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.validateTransactions = (req, res) => {
  try {
    const result = validationService.validate(req.body.transactions);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.filterTransactions = (req, res) => {
  try {
    const { transactions, q, p } = req.body;

    const parsed = transactionService.buildTransactions(transactions);
    const updated = ruleEngine.applyRules(parsed, q, p);

    res.json({ valid: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.calculateNPS = (req, res) => {
  try {
    const { age, inflation, k, transactions, q, p } = req.body;

    const parsed = transactionService.buildTransactions(transactions);

    const updated = ruleEngine.applyRules(parsed, q, p);

    const grouped = groupService.groupByK(updated, k);

    const result = grouped.map(g => {
      const real = returnsService.calculate(g.amount, age, inflation, 0.0711);
      return {
        start: g.start,
        end: g.end,
        amount: g.amount,
        return: real
      };
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.calculateIndex = (req, res) => {
  try {
    const { age, inflation, k, transactions, q, p } = req.body;

    if (!transactions || !Array.isArray(transactions)) {
      return res.status(400).json({ error: "Invalid transactions input" });
    }

    if (!k || !Array.isArray(k)) {
      return res.status(400).json({ error: "Invalid k periods" });
    }

    const parsed = transactionService.buildTransactions(transactions);
    const updated = ruleEngine.applyRules(parsed, q, p);
    const grouped = groupService.groupByK(updated, k);

    const result = grouped.map(g => {
      const real = returnsService.calculate(g.amount, age, inflation, 0.1449);

      return {
        start: g.start,
        end: g.end,
        amount: g.amount,
        return: real
      };
    });

    res.json(result);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};