"use strict";

// if(4 == 9){
//     console.log('Ok!')
// } else {
//     console.log('No!')
// }

const num = 50;

// if(num < 49){
//     console.log('No!')
// } else if(num > 100){
//     console.log("No! Too much!")
// } else {
//     console.log('Ok')
// }

// (num === 51) ? console.log("OK") : console.log('NO!');


// switch - всегда на строгое сравнение!
switch (num) {
    case 49: 
        console.log('NO!');
        break;
    case 100:
        console.log('No!');
        break;
    case 51:
        console.log('YES!');
        break;
    default:
        console.log('none results')
        break;
}



