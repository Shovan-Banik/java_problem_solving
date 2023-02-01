function solution(letter){
    if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u' || letter=='A' || letter=='E' || letter=='I' || letter=='O' || letter=='U'){
       var output1= console.log('VOWEL');
       return output1;
    }
    else if(letter=='y' || letter=='Y'){
        var output2=console.log("sometimes it acts as a consonant and sometimes it acts as a vowel");
        return output2;
      }
    else{
      var output3= console.log("CONSONANT");
      return output3;

    }

}
solution('s');
