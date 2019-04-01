// interface example
function printLabel(labelledObj: { label: string, helloWorld: string }) {
    console.log(labelledObj.helloWorld);
}

let myObj = {size: 10, label: "Size 10 Object", helloWorld: 'testing123'};
printLabel(myObj);

// another interface example
interface Food {
    tacos: string,
    pizza: string
}

function greeter(food: Food) {
    return "The best place to get tacos is " + food.tacos 
      + " and the best place to get pizza is " + food.pizza + ".";
}

let places = {
    tacos: 'Seattle',
    pizza: 'Lynnwood'
};

console.log(greeter(places));
