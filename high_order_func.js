// var a=[2,3,4,2,3,5]
// var b=a.filter((e)=>{
//     return e%2==0
// })
// console.log(b);

// 1)
// var a=[12,32,33,45,23]
// console.log(a.filter((e)=>e%2==0)
// );

// // 2)))
// var a=[12,32,33,45,23]
//     a.filter((e)=>e%2===0)
//     .map((e)=>e*2)//it's double the value.
//     .forEach((e)=>{ //only excess the value and print that, it's applicable for multipul values.
//         console.log(e);
//     })


// 3)
var a=[2,3]
var result=a.filter((e)=>e%2===0)
    .map((e)=>e*2)
    .reduce((a,b)=>a+b)//give only one the single value.
console.log(result);