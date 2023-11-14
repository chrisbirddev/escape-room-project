const fs = require('fs')
const path = require('path')

const POKEMON_DIRECTORY = "pokemon";

module.exports = function () {
    const directory = path.join(__dirname, POKEMON_DIRECTORY);
    const files =  fs.readdirSync(directory);
    const randomIndex = Math.floor(Math.random() * files.length)
    return fs.readFileSync(`${directory}/${files[randomIndex]}`,
      { encoding: 'utf8', flag: 'r' });
}
