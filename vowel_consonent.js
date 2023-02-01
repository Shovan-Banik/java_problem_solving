function solution(input){
    if(input=='a' || input=='e' || input=='i' || input=='o' || input=='u' || input=='A' || input=='E' || input=='I' || input=='O' || input=='U'){
        return vowel;
    }
    else if(input=='y'|| input=='Y'){
        return 'consonant but sometimes act like a vowel';
    }
    else{
        return consonant;
    }

}
solution('i');