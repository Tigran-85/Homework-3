const random = require('random');

const http = require('http');

const fs = require('fs/promises');

//Homework1

// let num = random.int(0, 10);
// let promise = new Promise(function(resolve, reject){
//     if(num > 5){
//         resolve(num)
//     } else{
//         reject(new Error('error'))
//     }
// });

// promise.then(() => {
//     console.log(num);
// });

// promise.catch((err) => {
//     console.log(err.message);
// });

//Homework2

   
    // fs.readFile('./config.json', (err, data) => {
    //     let portNum = JSON.parse(data.toString()).port;
    //     let hostNum = JSON.parse(data.toString()).host;

    //     const server = http.createServer(function(req, res){
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.write('Hello world');
    //         res.end();
    //     })
    //     server.listen(portNum, hostNum, () => {
    //         console.log(portNum, hostNum)
    //     })
    // })

    //Homework3


async function readInput(){
    const fileData = await fs.readFile('./input.txt', 'utf-8');

    const firstPart = fileData.slice(0, fileData.length / 2);
    const secondPart = fileData.slice(fileData.length / 2);
    
    await Promise.all([
        fs.writeFile('output1.txt', firstPart),
        fs.writeFile('output2.txt', secondPart)
    ])
};

readInput().then(() => {
    console.log('done');
}).catch((err) => {
    console.log(err.message);
});

