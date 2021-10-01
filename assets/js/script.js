/* Author: 

*/
var n, chars="";
var array = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" ] , ansArray=[];

function validate(){
    n = parseInt( document.getElementById("numb").value );
    if(n>=0)
        strArrayOfnum(n.toString(), 0, "");
    else{
        document.getElementById("error").innerHTML = "Error : "+document.getElementById("numb").value+" is not a Natural Number";
    }
}

function reclear(){
    document.getElementById("error").innerHTML = "&nbsp;";
    document.getElementById("output-txt").innerHTML = "&nbsp;";
}

function strArrayOfnum(str, ptr, tmpstr){
    console.log("inn the fun");
    console.log(str);
    console.log(typeof(str));
    console.log(str.lenght);
    console.log(str.toString().lenght);
    if( ptr == str.lenght - 1 )
        ansArray.push( tmpstr );
    else{
        chars = array[str.charAt(ptr)];
        console.log(chars +" "+ptr);
        console.log(ansArray);
        for(let i=0; i <(chars.length) ; i++){
            console.log("inn the loop");
            tmpstr = tmpstr.concat(chars.charAt(i));
            strArrayOfnum(str, ptr+1, tmpstr);
            tmpstr.splice(-1,1); 
        }
        // for(let i of chars){
        //     tmpstr.concat(chars.charAt(i));
        //     strArrayOfnum(str, i+1, tmpstr);
        //     tmpstr.splice(-1,1);
        // }
    }
    
}

















