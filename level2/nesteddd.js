// let roes=[["Superman","spiderman","Batman","Ironman","Deadpole","Himan","Stuart"],["vision","wonderwomen","Captain America","Flash","Hulk"]];

// for(let i=0;i<roes.length;i++){
//     console.log(i," ",roes[i]);

// }

//nested array
let toes=[["Superman","spiderman","Batman","Ironman","Deadpole","Himan","Stuart"],["vision","wonderwomen","Captain America","Flash","Hulk"]];

for(let i=0;i<toes.length;i++){
    for(let j=0;j<toes[i].length;j++){
        console.log(toes[i][j]+" ");
    }
}

let naam="Aashish";

for(char of naam){
    console.log(char);
}