function findLeapYear(year){
    //write your code here
    //don't forget to write return
      var leapYear=[];
      for(var i=0; i<year.length;i++){
        var value=year[i];
        if(value%4==0){
          leapYear.push(value);
        }
      }
      return leapYear;
    }
    var someYears=[2023,2024,2025,2028,2030];
    var output=findLeapYear(someYears);
    console.log(output);