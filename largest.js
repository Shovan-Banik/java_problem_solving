function findMax(max){
    //write your code here
    //don't forget to write return
      var num1=55;
      var num2=10;
      var num3=95;
      if(num1>num2 && num1>num3){
        return num1;
      }
      else if(num2>num1 && num2>num3){
        return num2;
      }
      else{
        return num3;
      }
    }
    var result=findMax(1);
    console.log(result);