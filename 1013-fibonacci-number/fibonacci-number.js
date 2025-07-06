/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let fib = [0, 1];
    for(let i=2; i<=n; i++){
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib[n];
    // if (n<=1){
    //     return n;
    // }
    // return fib(n-1) + fib(n-2);
};