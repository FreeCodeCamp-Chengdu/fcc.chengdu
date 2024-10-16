import { readFileSync, writeFileSync } from 'fs';
import { EOL } from 'os';
import { dirname, join } from 'path';

const [filePath] = process.argv.slice(2);

console.time(filePath);

const list = (readFileSync(filePath) + '').split(EOL);

const regx = /第(.*)期：《(.*?)》- (\d+)\s形式：(.*)/i,
    address = '拾级Cafe',
    imageList = [{ url: './xxx', describe: 'xxxxxxxxxxxx' }];

const events = list
    .map(item => {
        const [matched, index, title, time, type] = item.match(regx) || [];

        if (!matched) return console.log(item);

        return { time, title, type, address, describe: title, imageList };
    })
    .filter(Boolean);

writeFileSync(
    join(dirname(filePath), 'index.json'),
    JSON.stringify(events, null, 4)
);
console.timeEnd(filePath);
