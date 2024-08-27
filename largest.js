let a=prompt(`enter number a:`);
let b=prompt(`enter number b:`);
let c=prompt(`enter number c:`);


if(a>=b){
    if(a>=c){
        console.log("A is largest")
    }else{
        console.log("C is largest")
    }
}else if(b>=c){
    console.log("B is largest")
}else{
    console.log("C is largest");
}


