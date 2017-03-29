//EXERCISE 1
var  str = 'hello';
var num = 4;
var array=['foo','bar'];


//EXERCISE 2
var str = 4;
var str='hello';


//EXERCISE 3
var numArray=[3, 5, 16, 3, 4, 18];
var result = numArray[0];
for (var i=1;numArray.length;i++){
    result+=numArray[i];
}
console.log('result: '+ result);


//EXERCISE 4
console.log("this is a string" + "this is another string");


//EXERCISE 5
var num1=3.5;
var myInteger1=Number(num1);
var num2=5.3;
var myInteger2 = parseInt(num2);

//EXERCISE 6
var newStr='Hello';

if (newStr2 !== null){
    console.log(newStr2);
}else{
    console.log(newStr);
}

//EXERCISE 7
var check='What time is it?';
switch (check){
    case 'hello':
        console.log('greetings');
        break;
    case 'bye':
        console.log('good bye');
        break;
    default:
        console.log("It's party time!");
        break;
}


//EXERCISE 8
var student = {name: 'Skippy', class: 'English', grade: 75};


//EXERCISE 9
var student = {};

student.name = 'Skippy';
student.class = 'English';
student.grade= 75;


//EXERCISE 10
var numbers=[35,2,14,56,65,52];
function findGreatestNumAndIndex(direction){
    var greatest=null;
    greatestIndex=null;
    if(direction>=0){
        var i = 0;
        var increment = 1;
        var endLoop = numbers.length;
    }else{
        var i = numbers.length;
        var increment= -1;
        var endLoop =0;
    }
    while (i !== endLoop){
        if (numbers[i]>greatest){
            greatest = numbers[i];
            greatestIndex= i;
        }
        i+=increment;
    }
    return {'greatest': greatest, 'greatestInex': greatestIndex};
}
findGreatestNumAndIndex(1);


