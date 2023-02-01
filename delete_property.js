function deleteProperty(arr){
    var box=[];
    for(var i=0;i<arr.length;i++){
        var value=arr[i];
        box.push(value);
    }
    if(box[0].fname==box[1]){
        delete box[0].fname;
        var output1=console.log('yes');
        return output1;
    }
    else{
        var output2=console.log('no');
        return output2;
    }
}
var array= [{
    fname:'John',
   },'fname'];
deleteProperty(array);
