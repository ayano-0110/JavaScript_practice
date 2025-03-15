let apple = {       
    name: 'りんご',
    color: 'red',
    weight: 150,
    size: 'M'
};

let orange = {        
    name: 'みかん',
    color: 'orange',
    weight: 100,
    size:'S'
};

let grape = {      
    name: 'ぶどう',
    color: 'purple',
    weight: 200,
    size: 'L'
};


let fruits = [apple, orange, grape];


function total_weight(weight) {
   
    let totalWeight = 0;

        fruits.forEach(e => {
            totalWeight += e.weight;  // 重さを加算
        });

    return totalWeight;
}

let totalWeight = total_weight(fruits);
console.log('総重量は' + totalWeight + 'g');

