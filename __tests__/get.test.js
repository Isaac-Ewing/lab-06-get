const app = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);
const games = require('../data.js');

const Destiny = {
    id: 'Destiny',
    avgPlayers: 73000,
    fun: false,
    type: 'fps',
}

it('games responds with all games', async(done) => {
    const response = await request.get('/games');

    expect(response.body).toEqual(games);
    done();
});

it('games:id responds with one game', async(done) => {
    const response = await request.get('/games/Destiny');

    expect(response.body).toEqual(Destiny);
    done();
});