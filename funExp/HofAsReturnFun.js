let request="odd";


function factory(request){

    if(request=="odd"){
        return function(n){
            if(n%2!=0){
                console.log("ODD number");
            }
        }
    }else if(request=="even"){
        return function(n){
            if(n%2==0){
                console.log("ODD number");
            }
        }
    }else{
        console.log("wrong request");
    }




}
