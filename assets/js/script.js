/* Author: 

*/
var n;
var array = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" ] , ansArray=[];
let str;

function validate(){
    n = parseInt( document.getElementById("numb").value );
    if(n>=0){
        strArrayOfnum(n.toString(), 0, "" );
        document.getElementById("output-txt").innerHTML ="Output:- <br><br>"+ansArray;
        ansArray=[];
        console.log(ansArray);
    }
    else{
        document.getElementById("error").innerHTML = "Error : "+document.getElementById("numb").value+" is not a Natural Number";
    }
}

function reclear(){
    document.getElementById("error").innerHTML = "&nbsp;";
    document.getElementById("output-txt").innerHTML = "&nbsp;";
}

function strArrayOfnum(str, ptr, tmpstr){
    if( ptr == str.length )
        ansArray.push( tmpstr );
    else{
        let chars = array[str.charAt(ptr)];
        for(let i=0; i <(chars.length) ; i++){
            tmpstr = tmpstr.concat(chars.charAt(i));
            strArrayOfnum(str, ptr+1, tmpstr);
            tmpstr = tmpstr.slice(0,-1);
        }
    }
}














