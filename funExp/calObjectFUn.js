let calulator={

   add:function(a,b){
    console.log("sum is "+(a+b));
   },
   sub:function(a,b){
    return (a-b);
   },

   prod:function(a,b){
    return (a*b);
   },

   div: function(a,b){
    return (a/b);
   }

}


console.log(calulator.add(3,5));