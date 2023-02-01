function temperatureConverter(valNum) {
    var celsius=(valNum-32)/1.8;
    var result=parseFloat(celsius.toFixed(2));
    return result;
}
var fahrenheit=50;
var output=temperatureConverter(fahrenheit);
console.log(output);