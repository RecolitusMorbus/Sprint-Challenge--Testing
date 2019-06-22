const server = require('./server.js');
const request = require('supertest');

describe('get(\'games\')', () => {
  it('Returns Status Code: 200.', async () => {
    let res = await request(server).get('/games');
    expect(res.status).toBe(200);
  });
  it('Returns JSON data.', async () => {
    let res = await request(server).get('/games');
    expect(res.type).toBe('application/json');
  });
  it('Functions without error.', async () => {
    let res = await request(server).get('/games');
    expect(typeof res.body).toEqual('object');
  });
});

describe('get(\'games\')', () => {
  it('Returns Status Code: 200.', async () => {
    let res = await request(server).get('/games');
    expect(res.status).toBe(200);
  });
  it('Return an array.', async () => {
    let res = await request(server).get('/games');
    expect(Array.isArray(res.body)).toBeTruthy();
  });
  it('Returns an object array.', async () => {
    let res = await request(server).get('/games');
    for (i = 0; i < res.body.length; i++) {
      expect(typeof res.body[i]).toEqual('object');
    };
  });
});

describe('post(\'games\')', () => {
  it('Returns Status Code: 201 with correct data.', async () => {
    const body = {
      title: 'hEid a nd SEkE',
      genre: '[Data Corrupt]',
      release_year: 4420100000
    };
    let res = await request(server).post('/games').send(body);
    expect(res.status).toBe(201);
  });
  it('Returns an object.', async () => {
    const body = {
      title: 'Command & Conquer',
      genre: 'Real-Time Strategy',
      release_year: 1995
    };
    let res = await request(server).post('/games').send(body);
    expect(typeof res.body).toEqual('object');
  });
  it('Returns Status Code: 422 with incorrect data.', async () => {
    const body = {
      title: 'Command & Conquer',
      release_year: 1995
    };
    let res = await request(server).post('/games').send(body);
    expect(res.status).toBe(422);
  });
});