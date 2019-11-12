// const greeting = require("./greetings");

// // console.log("greetings===>" , greeting);
// // console.log("greetings===>" , greeting.sayHelloEnglish());

// // var x = 5;
// // var a = process.nextTick(()=>{
// //     console.log("I logged")
// // });
// // for(let i =0; i<10; i++){
// //     console.log(x , i, a);
// //     setTimeout(()=>{
        
// //         console.log(x , 'world', i, a);
// //     });
// // }

// // async and wait function

// // async function boom(){
// //     console.log(" hey oysss");
// //     try {
// //         const fireworks = await getFireWorks();
// //         const trigger = await setUpFireWorks(fireworks);
// //         return trigger();
// //     }
// //     catch (error) {
// //         return 'Run Away!';
// //     }
// // }

// // boom();


// function getMessage() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> resolve("Message"), 2000);
//     });
// }

// async function start() {
//     const message = await getMessage();
//     return `The message is: ${message}`;
// }

// start().then(msg=>{
//     console.log(msg);
// });

// function task1() {
//     return 1;
// }

// function task(){
//     return 2;
// }


// async function sequential() {
//     const output1 = await task1();
//     const output2 = await task2();
//     const output3 = await task3();
//     return combineEverything(output1, output2, output3);
//   }

// crypto 

const crypto = require('crypto');
console.log(crypto);

let secret = 'abcdef';

let hash = crypto.createHmac('sha256', secret)
                 .update('I love cupcakes')
                 .digest('hex');
    
console.log(hash);
