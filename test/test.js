const  chai = require("chai");
const  chaiHttp  = require("chai-http");
const server = "http://localhost:9000/api/";
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe("Users", () => {
  describe("/GET users", () => {
    it("it should GET all the users", (done) => {
      chai
        .request(server)
        .get("/user")
        .end((err, res) => {
            console.log(err)
            console.log(res)
            res.should.have.status(200);
            res.body.should.be.a('array');
          done();
        });
    });})
});
