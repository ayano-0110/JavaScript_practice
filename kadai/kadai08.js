let number = [];

for (let a = 1; a <= 100; a++) {   
    number.push(a);
}
console.log(number);


let b3 = number.filter(function(e) {
    return e % 3 == 0;
});
console.log(b3);

let b5 = number.filter(function(c) {
    return c % 5 == 0;
});
console.log(b5);