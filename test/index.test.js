const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

describe('static pages', () => {
  describe('home page', () => {
    it('should return a 200 response', (done) => {
      request(app)
        .get('/')
        .expect(200, done);
    });
  });
});
