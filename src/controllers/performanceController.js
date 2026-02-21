exports.getPerformance = (req, res) => {
  const memory = process.memoryUsage().heapUsed / 1024 / 1024;

  res.json({
    time: `${Date.now()} ms`,
    memory: `${memory.toFixed(2)} MB`,
    threads: 1
  });
};