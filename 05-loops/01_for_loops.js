// for loop



for (let i = 0; i <= 10; i++) {  // shortcurt for multi cursor = ctrl + d
    const element = i;
    if (element == 5) {
        // console.log("5 is best Number");
    }
    // console.log(element);
}

// console.log(element); // not accessible 


for (let i = 1; i <= 10; i++) {  // loops under loops , nested loop
    // console.log(`outer loop value ${i}`);

    for (let j = 1; j <=10; j++) {
    //    console.log(`inner loop value ${j} Outer loop value ${i}`);  // i will print one time and under i j will print 10 times
        // console.log(i + '*' + j + '=' + i*j);
    }
    
}

// Array in for Loop

let myArray = ["Rajesh", "Singh"];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {   //* Break
//     if (index == 5) {
//         console.log(`detacted 5`);
//         break;  // break statement stops entire process of loop
//     }
//     console.log(`value of i is ${index}`);
// }


// for (let index = 1; index <= 20; index++) {  //* continue
//     if (index == 5) {
//         console.log(`detacted 5`);
//        continue  // continue only stops the current iteration of loop
//     }
//     console.log(`value of i is ${index}`);
// }

