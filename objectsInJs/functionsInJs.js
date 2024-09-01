function sum(a,b){
    console.log((a+b));
}

function helloWorld(){
    console.log("Hellow India!");
}


function ave(i,j,k){
    return ((i+j+k)/3);
}


function sumOfn(n){

   let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;

    }
    return sum;
}


let strr=["My"," ","is"," ","Aashish"," ","Vidyarthi"];

function concat(str){


    let res=" ";

    for(let i=0;i<str.length;i++){
        res+=strr[i];


    }

    return res;
}