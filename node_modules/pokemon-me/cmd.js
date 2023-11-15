#!/usr/bin/env node

const pokemonMe = require('./index');

const output = pokemonMe()

process.stdout.write(output)
process.stdout.write('\n')
