let color=prompt(`Enter color`);


// if(color=="red"){
//     console.log("STOP")
// }else if(color=="yellow"){
//     console.log("READY")
// }else{
//     console.log("GO")
// }

// using switch


switch(color){

case "red":console.log("STOP");
           break;
case "green":console.log("Go");
           break;
case "yellow":console.log("Slow down!");
           break;
default:console.log("traffic light is broken!");

}