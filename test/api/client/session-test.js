'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:10010'); // supertest init;
var expect = chai.expect;

describe('/session', function() {
  describe('post', function() {
    it('should respond with 201 Success', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.post('/session')
      .set('Accept', 'application/json')
      .send({
        body: 'DATA GOES HERE'
      })
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with default Error', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "code",
          "message"
        ],
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.post('/session')
      .set('Accept', 'application/json')
      .send({
        body: 'DATA GOES HERE'
      })
      .expect('DEFAULT RESPONSE CODE HERE')
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

  });

});
