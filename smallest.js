function findingSmallest ( numbers ) {
    //Write your code here
    //Don't forget to return
    var box=[];
    for(var i=0;i<numbers.length;i++){
        var value=numbers[i];
        box.push(value);
    }
        if(box[0]<box[1] && box[0]<box[2] && box[0]<box[3] && box[0]<box[4]){
            return box[0];
        }
        else if(box[1]<box[0] && box[1]<box[2] && box[1]<box[3] && box[1]<box[4]){
            return box[1];
        }
        else if(box[2]<box[0] && box[2]<box[1] && box[2]<box[3] && box[2]<box[4]){
            return box[2];
        }
        else if(box[3]<box[0] && box[3]<box[1] && box[3]<box[2] && box[3]<box[4]){
            return box[3];
        }
        else{
            return box[4];
        }
    }

    var arr=[10,33,5,99,6];
    var output=findingSmallest(arr);
    console.log(output);
    
    
    // switch(true){
        //     case value[0]<value[1] && value[0]<value[2] && value[0]<value[3] && value[0]<value[4]:
        //         return value[0];
        //     case value[1]<value[0] && value[1]<value[2] && value[1]<value[3] && value[1]<value[4]:
        //         return value[1];
        //     case value[2]<value[0] && value[2]<value[1] && value[2]<value[3] && value[2]<value[4]:
        //         return value[2];
        //     case value[3]<value[0] && value[3]<value[1] && value[3]<value[2] && value[3]<value[4]:
        //         return value[3];
        //     case value[4]<value[0] && value[4]<value[1] && value[4]<value[2] && value[4]<value[3]:
        //         return value[4];
        // }