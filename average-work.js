const Blockchain = require('./blockchain');

const blockchain = new Blockchain();

blockchain.addBlock({ data: 'init' });

let prevTimestamp, nextTimestamp, nextBlock, timeDiff, average;

const times = [];

for (let i = 0; i < 10000; i += 1) {
    prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;

    blockchain.addBlock({ data: `block${i}` });
    nextBlock = blockchain.chain[blockchain.chain.length - 1];

    nextTimestamp = nextBlock.timestamp;
    timeDiff = nextTimestamp - prevTimestamp;
    times.push(timeDiff);

    average = times.reduce((total, number) => (total + number))/times.length;

    console.log(`Time to mine block: ${timeDiff}ms. Difficulty: ${nextBlock.difficulty}. Average time: ${average}ms`);
}