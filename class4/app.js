//             need to check weather user insert a big value than the 100 or less .
//             need to check userfirst value is greater or user second value.
//             need to check uservalue is perfect divisible by 2 or not
//             need to check uservalue is perfect divisible by 3 or not
//             need to check uservalue is perfect divisible by 5 or not
//             need to check uservalue what is the reminder by divided by 2
//             need to check uservalue what is the reminder by divided by 3
//             need to check uservalue what is the reminder by divided by 5




var uInput1 = prompt("Enter the desire number");
if(uInput1 > 100)
{
    alert("number is greater then 100");
}
else{
    alert("number is less then 100");
}



var uInput2 = +prompt("Enter first value to campare");
var uInput3 = +prompt("Enter second value to campare");

if(uInput2 > uInput3){
    alert("first value is greater");
}
else if (uInput3 > uInput2 )
    {
    alert("secend value is greater");
}
else{
    alert("both are equal");
}





var uInput4 = +prompt("Enter a number to check whether its divisible by 2");
var ischeck = uInput4 % 2 ;
if(ischeck == 0)
{
    alert("is divisible");
}
else{
    alert("not divisible");
}





var uInput5 = +prompt("Enter a number to check whether its divisible by 3");
var ischeck = uInput5 % 3 ;
if(ischeck == 0)
{
    alert("is divisible");
}
else{
    alert("not divisible");
}


var uInput6 = +prompt("Enter a number to check whether its divisible by 5");
var ischeck = uInput6 % 5 ;
if(ischeck == 0)
{
    alert("is divisible");
}
else{
    alert("not divisible");
}







            // need to check uservalue what is the reminder by divided by 2
var uInput7 = +prompt("Enter a number to divide 2. we will tell you the remainder");
var remainder = uInput7 % 2;
    alert("the remainder is: " + remainder);




// need to check uservalue what is the reminder by divided by 3
var uInput7 = +prompt("Enter a number to divide 3. we will tell you the remainder");
var remainder = uInput7 % 3;
    alert("the remainder is: " + remainder);



// need to check uservalue what is the reminder by divided by 4
var uInput7 = +prompt("Enter a number to divide 5. we will tell you the remainder");
var remainder = uInput7 % 5;
    alert("the remainder is: " + remainder);
