const path = require('path');
const fs = require('fs');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');

const inboxPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(inboxPath, 'UTF-8');

var input = {
    language: 'Solidity',
    sources: {
        'Lottery.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
module.exports = output.contracts['Lottery.sol']['Lottery'];
console.log(Object.keys(module.exports));
