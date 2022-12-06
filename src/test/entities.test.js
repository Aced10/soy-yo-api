const chai = require("chai");
const sinonChai = require("sinon-chai");
const chaiHttp = require("chai-http");
const should = chai.should();

const app = require("../../src/index");
chai.use(sinonChai);
chai.use(chaiHttp);

describe("EntitiesController", function () {
  describe("filterEntities", function () {
    it("Bad request case", function (done) {
      chai
        .request(app)
        .post("/test-soyyo/entities/filter")
        .end(function (err, res) {
          res.should.have.status(400);
          done();
        });
    });
    it("Entities not found", function (done) {
      chai
        .request(app)
        .post("/test-soyyo/entities/filter")
        .send({
          startId: 14,
          endId: 15,
        })
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it("Get entities sort by name", function (done) {
      chai
        .request(app)
        .post("/test-soyyo/entities/filter")
        .send({
          startId: 1,
          endId: 2,
        })
        .end(function (err, res) {
          res.should.have.status(200);
          done();
        });
    });
    return;
  });
  return;
});
