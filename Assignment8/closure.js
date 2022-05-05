var add=(function(){
    let counter=0;
    return obj={
        adds:function(){
            return counter+=1;
        },
        rest:function(){
            return counter=0;
        }
    }
})();

console.log(obj.adds());
console.log(obj.adds());
console.log(obj.rest());
console.log(obj.adds());//?

//Free Variables
/*
 counter is a free variable
A free variable is simply a variable which is not
 declared inside a given function,
 but is used inside it.
*/

