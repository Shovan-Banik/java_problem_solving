function checkTriangle(side1, side2,side3){
    //write your code here
    //don't forget to write return
    if(side1==side2 && side2==side3 && side1==side3){
        var result=console.log('no');
        return result;
    }
    else if(side1!==side2 && side1!==side3 && side2!==side3){
        var result2=console.log('no');
        return result2;
    }

    else{
        var result3=console.log('yes');
        return result3;
    }
    
    }
checkTriangle(9,9,3);
