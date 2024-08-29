let cars=["ferari","Toyota","tata","Suzuki","Hyndai"];
console.log(cars);
console.log(cars.push("kiya")); //returns length
console.log(cars);

console.log(cars.pop());
console.log(cars);

console.log(cars.unshift("volks"));
console.log(cars);

console.log(cars.shift());
console.log(cars);

let start=["january","july","march","august"];
console.log(start);
// console.log(start.shift());
// console.log(start.shift());
// console.log(start);
// console.log(start.unshift("july","june"));
// console.log(start);

start.splice(0,2,"july","june")

console.log(start);
console.log(start.indexOf("march"));
console.log(start.includes("july"))
let res=cars.concat(start);
console.log(res);
res.reverse();
console.log(res);

let colors=["red","green","yellow","black","blue"];
console.log(colors.slice(1,4))//green,yellow,black
console.log(colors.sort());


