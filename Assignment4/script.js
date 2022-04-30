function max(x,y){
    
    if(x>y){
        return x;
    }
    else if(x<y){
        return y;
    }
    else{
        return "They are both equal";
    }
    
}

function printer(){
       var x=parseInt(document.getElementById("FirstBox").value);
       var y=parseInt(document.getElementById("SecondBox").value);
     document.getElementById("textbox").value= max(x,y);
        
 }
 

    function maxBetweenThree(x,y,z){
        if(x>y && x>z){return x;}
        else if(y>z && y>x){return y;}
        else if(z>x && z>y){return z;}
        else {return "they are all the same"}
    }
    function printerMaxThree() {
        var x=parseInt(document.getElementById("FirstBox2").value);
        var y=parseInt(document.getElementById("SecondBox2").value);
        var z=parseInt(document.getElementById("ThirdBox2").value);
        document.getElementById("textbox2").value=maxBetweenThree(x,y,z);
    }

    function isVowel(character){
        if(character=='a' || character=='e' ||character=='o' ||character=='i' ||character=='u' )
        return character;
        else
        return "you have no vowel";
    }

 
 

//4
    let num=[10,100,20,60];
    let count=0;
    let c=function(more){
        for(let i=0;i<more.length;i++){
       count+=num[i];
    }
    return count;
}

    console.log(c(num));

    // 5
    let str="jag testar";
    let str2="";
    function reverse(){
        for(let i=str.length-1;i>=0;i--)
           str2+=str[i];

           return str2;
    }

    console.log(reverse());
    //6
    let word1="Muhammad";
    let word2="Soliman";

    function LongestWord(word1,word2){
        word1.length>word2.length? console.log("word1:  "+ "is longer than "+"word2"):console.log("word2:  "+ "is longer than "+"word1");
    }

    LongestWord(word1,word2);
    //7
    function LongWords(word,...more){
        let arr=[];
        for(let i=0;i<more.length;i++)
       if(more[i].length>word.length)
       arr[i]=more[i];
        return arr;
    }

 
window.onload=function(){        
    document.getElementById("buttonbox").onclick=printer; 
    document.getElementById("buttonbox2").onclick=printerMaxThree;       
    document.getElementById("buttonVowels").onclick=function(){
        document.getElementById("vowelsBox").value=isVowel(document.getElementById("stringBox").value);
    }
    

    document.getElementById("button7").onclick=function(){
        document.getElementById("exhibit").value=LongWords("Muhammad",document.getElementById("words").value);
    }                                                     
          
}
//8
let a=[4,5,6,7,1,10,13,2,3];
const b=a.map(function(element, index, array){
    return element*10;
})
console.log(b);

const d=a.filter(function(element,index, array){
    return element===3;
})
console.log(d);
const f=a.reduce(function(preval,element,index,array){
    return preval*element;
})
console.log(f);