//function expression
let sum= function(a,b){
    return a+b;
}


let res=sum(2,3);
console.log(res);



let greet=function(){
    console.log("Namaste");



}

//higher order function->function which takes 1 more multiple function as nd argument or returns function

function hof(func , n){


    for(let i=0;i<n;i++){
        console.log(i);
        func();
    }
}


hof(function(){
   console.log(Math.floor(Math.random()*10));
},6)

