function reverseString(string){
   var nullString="";
    for(var i=string.length-1;i>=0;i--){
        var left=i;
        var right=string[left];
        nullString=nullString+right;
    }
   return nullString;
}
var stringValue='ShovanBanik';
var output=reverseString(stringValue);
console.log(output);
