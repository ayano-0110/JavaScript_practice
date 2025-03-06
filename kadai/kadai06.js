let fruits = {apple:'りんご', strawberry:'いちご', grape:'ぶどう', lemon:'れもん'};

console.log(fruits.grape);

let keys = Object.keys(fruits);

console.log(keys);

for (key in fruits) {
    console.log(fruits[key]);
}
