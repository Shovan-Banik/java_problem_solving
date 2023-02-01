function tallestFriend ( height ) {
    //Write your code here
    //Don't forget to return
    var box=[];
    for(var i=0; i<height.length;i++){
        var value=height[i];
        // console.log(value);
        box.push(value);

    }
        if(box[0]>box[1] && box[0]>box[2]){
            return box[0];
        }
        else if(box[1]>box[0] && box[1]>box[2]){
            return box[1];
        }
        else{
            return box[2];
        }
    }
    
    var arr=[157,134,188];
    var result=tallestFriend(arr);
    console.log(result);