import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import users from '../src/models/db';


chai.use(chaiHttp);
chai.should();

describe("user", () => {
    beforeEach((done) => {
        users.splice(0, users.length) ;
          console.log(err);
        done();
        })
      });

    
describe("GET/loans", () => {
  it("should get all loan applications.", (done) => {
       chai.request(app)
           .get('/api/v1/loans')
           .end((err, res) => {
            res.status.should.be.eql(200);
            res.body.should.be.an('array');
            res.body[0].should.be.an('object'); 
            res.body[0].should.have.property('id');
            res.body[0].should.have.property('user');
            res.body[0].should.have.property('status'); 
            res.body[0].should.have.property('repaid'); 
            res.body[0].repaid.should.be.a('boolean');
            res.body[0].should.have.property('tenor'); 
            res.body[0].tenor.should.be.a('number');
            res.body[0].should.have.property('amount'); 
            res.body[0].should.have.property('paymentInstallment'); 
            res.body[0].should.have.property('balance'); 
            res.body[0].should.have.property('interest');
              
            done();
            });
   });


   it("should get a specific loan application.", (done) => {
    chai.request(app)
        .get('/api/v1/loans')
        .end((err, res) => {
         res.status.should.be.eql(200);
         res.body.should.be.an('array');
         res.body[0].should.be.an('object'); 
         res.body[0].should.have.property('id');
         res.body[0].should.have.property('user');
         res.body[0].should.have.property('status'); 
         res.body[0].should.have.property('createdOn');
         res.body[0].should.have.property('repaid'); 
         res.body[0].repaid.should.be.a('boolean');
         res.body[0].should.have.property('tenor'); 
         res.body[0].tenor.should.be.a('number');
         res.body[0].should.have.property('amount'); 
         res.body[0].should.have.property('paymentInstallment'); 
         res.body[0].should.have.property('balance'); 
         res.body[0].should.have.property('interest');
           
         done();
         });
});
});

 
           


