'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:10010'); // supertest init;
var expect = chai.expect;

describe('/picture/boxed', function() {
  describe('get', function() {
    it('should respond with 200 Success', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "array",
        "items": {
          "required": [
            "id",
            "path"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "path": {
              "type": "string"
            }
          }
        }
      };

      /*eslint-enable*/
      api.get('/picture/boxed')
      .query({
startDate: 'DATA GOES HERE',endDate: 'DATA GOES HERE',x1: 'DATA GOES HERE',y1: 'DATA GOES HERE',x2: 'DATA GOES HERE',y2: 'DATA GOES HERE',x3: 'DATA GOES HERE',y3: 'DATA GOES HERE',x4: 'DATA GOES HERE',y4: 'DATA GOES HERE'
      })
      .set('Accept', 'application/json')
      .expect(200)
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
      api.get('/picture/boxed')
      .query({
startDate: 'DATA GOES HERE',endDate: 'DATA GOES HERE',x1: 'DATA GOES HERE',y1: 'DATA GOES HERE',x2: 'DATA GOES HERE',y2: 'DATA GOES HERE',x3: 'DATA GOES HERE',y3: 'DATA GOES HERE',x4: 'DATA GOES HERE',y4: 'DATA GOES HERE'
      })
      .set('Accept', 'application/json')
      .expect('DEFAULT RESPONSE CODE HERE')
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

  });

});
