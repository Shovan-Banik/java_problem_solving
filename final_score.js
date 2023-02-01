function finalScore ( scores ) {
    //Write your code here
    //Don't forget to return
    var total=0;
    for(var i=0;i<scores.length;i++){
        var value=scores[i];
        total=total+value;
    }
    return total;
    }
    var attempts=[20,13 ,37 ];
    var result=finalScore(attempts);
    console.log(result);