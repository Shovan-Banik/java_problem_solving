// function stringConcat(str1, str2){
//     //write your code here
//     //don't forget to write return
//     //   var concat=
//     //   console.log(str1+str2);
//     return str1+str2;
//     //   return concat;
//     }
//     var first="I am going to be ";
//     var second="an awesome web developer";
//     var givenValue=stringConcat(first,second);
//     console.log(givenValue);

function stringConcat(str1, str2){
    //write your code here
    //don't forget to write return
    //   var concat=
    //   console.log(str1+str2);
    let result=str1.concat(" ",str2);
      return result;
    }
    var first="I am going to be ";
    var second="an awesome web developer";
    var givenValue=stringConcat(first,second);
    console.log(givenValue);