function countZeros ( binary_num ) {
    //Write your code here
    //Don't forget to return
    var count=0;
    for(var i=0;i<binary_num.length;i++){
        var value=binary_num[i];
        if(value=='0'){
            count++;
        }
    }
    return count;
    }
    var number='10101';
    var result=countZeros(number);
    console.log(result);