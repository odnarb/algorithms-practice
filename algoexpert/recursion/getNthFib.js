function getNthFib(n) {
    if(n == 1) return 0;
    if(n == 2) return 1;
    return getNthFib(n-1) + getNthFib(n-2);
}

console.log( getNthFib(2) );
console.log( getNthFib(3) );
console.log( getNthFib(4) );
console.log( getNthFib(5) );
console.log( getNthFib(6) );
console.log( getNthFib(7) );
console.log( getNthFib(8) );
console.log( getNthFib(20) );
console.log( getNthFib(30) );
//console.log( getNthFib(50) );