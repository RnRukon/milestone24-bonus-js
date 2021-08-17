// const fibonacci = [0, 1];
// for (let i = 2; i <= 6; i++) {
//     // fibonacci[2]=fibonacci[1]+fibonacci[0];
//     // fibonacci[3]=fibonacci[2]+fibonacci[1];
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }
// console.log(fibonacci);
function fibonacci(i) {
    if (i === 0) {
        return 0;
    }
    if (i === 1) {
        return 1;
    }
    return fibonacci(i - 1) + fibonacci(i - 2);
}
console.log(fibonacci(6));