const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});

const readline2=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});

// readline.question("what is your name? ", username=>{
//     console.log(`Welcome ${Muhammad}`);
//     readline2.question("how old are you? ",age=>{
//         message=(age<16)?"not allowed to have a driving license": "allowed to have a driving license";
//         console.log(message);
//         readline2.close();
//     });
//     readline.close();
// })


let counter=0;
let n=true;
while(n){
    readline.question("enter a number or write stop to stop",number=>{
        if(number==parseInt(number))
        counter+=number;
        else if(number=="stop"){
        n=false; readline.close();
        }
    });
  
}

