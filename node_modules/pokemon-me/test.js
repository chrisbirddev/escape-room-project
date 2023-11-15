const { test } = require('tap')
const pokemonMe = require('./index')

test('returns a pokemon at random', function ({ equal, end }) {
    equal(typeof pokemonMe(), 'string', 'they are equal')
    end();
})
