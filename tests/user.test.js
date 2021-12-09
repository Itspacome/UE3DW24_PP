const request = require('supertest');
const app = require('../app');

describe('Test : Get all users', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    })
});

// describe('Test : Cannot get one user', function() {
//     it('responds with json', function(done) {
//         request(app)
//         .get('/api/users/0')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(404, done);
//     })
// });

describe('Test : Cannot create one user', function() {
    it('responds with json', function(done) {
        request(app)
        .post('/createuser/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /html/)
        .expect(404, done);
    })
});

describe('Test : Cannot update one user', function() {
    it('responds with json', function(done) {
        request(app)
        .put('/updateuser/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /html/)
        .expect(404, done);
    })
});

describe('Test : Cannot delete one user', function() {
    it('responds with json', function(done) {
        request(app)
        .delete('/deleteuser/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /html/)
        .expect(404, done);
    })
});

