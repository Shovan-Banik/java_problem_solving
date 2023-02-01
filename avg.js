function average (arrOfMarks){
    //write your code here
   // don't forget to write return
     var box=0;
     for(var i=0;i<arrOfMarks.length;i++){
       var index=i;
       var value=arrOfMarks[index];
       box=box+value;
     }
     var avg=box/arrOfMarks.length;
     var output=parseFloat(avg.toFixed(2));
     return output;
     
   }
   var marks=[100,100,100,100];
   var givenMarks=average(marks);
   console.log(givenMarks);