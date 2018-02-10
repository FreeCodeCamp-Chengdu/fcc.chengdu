const fs = require('fs');
const { EOL } = require('os');

var list = fs.readFileSync(__dirname + '/event.txt').toString().split(EOL);

var events = [];
list.forEach((item, index) => {
    let regx = /第(.*)期：《(.*?)》- (\d+)\s形式：(.*)/i;
    let arr = item.match(regx) ;
    if(arr===null){
        console.log(item);
        return;
    }
    events.push( {
        "time": arr[3],
        "title": arr[2],
        "type": arr[4],
        "address": "拾级Cafe",
        "describe": arr[2],
        "imageList": [
            {
                "url": "./xxx",
                "describe": "xxxxxxxxxxxx"
            }
        ]
    });
});


fs.writeFileSync(__dirname + '/index.json', JSON.stringify(events, null, 4));
//console.log(list);