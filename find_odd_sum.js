function findOddSum(odd){
    //write your code here
    //don't forget to write return
    var box=0;
    for(var i=0;i<odd.length;i++){
        var value=odd[i];
        if(value%2==1){
            box=box+value;
        }
    }
    return box;
    }
    var arr=[5, 7, 8, 10, 45, 30];
    var result=findOddSum(arr);
    console.log(result);