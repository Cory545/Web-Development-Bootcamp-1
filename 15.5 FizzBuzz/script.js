var array = [];
var count = 1
function fizzBuzz(){
    if(count % 3 === 0 && count % 5 === 0){
        array.push("FizzBuzz");
        console.log(array);
    } else if(count % 3 === 0){
        array.push("Fizz");
        console.log(array);
    } else if (count % 5 === 0){
        array.push("Buzz");
        console.log(array)
    }else{
    array.push(count);
    console.log(array);
    
    }
count++;
};

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();