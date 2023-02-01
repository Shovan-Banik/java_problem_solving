function getLetter(s) {
    // let letter;
    // Write your code here
    var letter=[];
    for(var i=0;i<s.length;i++){
        var value=s[i];
        console.log (value);
        letter.push(value);

    }
    console.log(letter);
    switch(letter){
        case letter[0]=='a' || letter[0]=='e' || letter[0]=='i' || letter[0]=='o' || letter[0]=='u':
            var A=console.log('A');
            return A;
            break;
        case letter[0]=='b' || letter[0]=='c' || letter[0]=='d' || letter[0]=='f' || letter[0]=='g':
            var B=console.log('B');
            return B;
            break;
        case letter[0]=='h' || letter[0]=='j' || letter[0]=='k' || letter[0]=='l' || letter[0]=='m':
            var C=console.log('C');
            return C;
            break;
        default:
            var D=console.log('D');
            return D;
            break;
    }
    return letter;
}
getLetter('hsdf');


 // if(letter[0]=='a' || letter[0]=='e' || letter[0]=='i' || letter[0]=='o' || letter[0]=='u'){
    //     return A;
    // }
    // else if(letter[0]=='b' || letter[0]=='c' || letter[0]=='d' || letter[0]=='f' || letter[0]=='g'){
    //     return B;
    // }