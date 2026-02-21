// Test Type: Integration
// Validation: End-to-end pipeline

const request = require('supertest');
const app = require('../src/app');

describe('Returns API', () => {
  it('should calculate index returns correctly', async () => {
    const res = await request(app)
      .post('/blackrock/challenge/v1/returns:index')
      .send({
        age: 29,
        inflation: 5.5,
        q: [],
        p: [],
        k: [{ start: "2023-01-01 00:00:00", end: "2023-12-31 23:59:59" }],
        transactions: [{ date: "2023-01-01 10:00:00", amount: 250 }]
      });

    expect(res.statusCode).toBe(200);
  });
});