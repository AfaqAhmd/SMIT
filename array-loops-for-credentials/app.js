


// var arrays = ["ahmer", 76, false, 0.9,  ["ali", false]];
// console.log(arrays);


// arrays[2] = "true";
// console.log(arrays);



// console.log(arrays[2]);
// // arrays.pop();

// console.log(arrays[4][1]);
// console.log(arrays[4]);

// arrays[4].pop();
// console.log(arrays);



// -------------------

// var arrays = ["ahmer", "ali", "sheikh", "saylani"];
// arrays.push("ahmer", 25);
// console.log(arrays);


// var userEmails = [];
// var userInput = prompt("enter your email.. :");
// var isFound = false;

// for (var i = 0; i < userInput.length; i++) {
//   if (userInput[i] === "@") {
//     userEmails.push(userInput);
//     isFound = true;
//   }
// }

// if (isFound === false) {
//   console.log("your email is invalid");
// }
// console.log(userEmails);








// var emails = ["ahmer@gmail.com", "ali@gmail.com" , "sheikh@gmail.com"];
// var passwords = ["12345", "54321", "13579"];

// var userEmail = prompt("kindly write your email");
// var userPassword = prompt("kindly write your password");
// var isFound = false;
// for(var i=0; i<emails.length; i++){
//     if(userEmail === emails[i] && userPassword===passwords[i]){
//         isFound = true;
//         console.log("login successfullly");
//         alert("Login Successfully");
//     } 
// }
// if(isFound === false){
//     alert("Login Faild");
// }



let emails = [];
let passwords = [];


for (let i = 0; i < 5; i++) {

    while(true)
    {

        let userInput = prompt(`Enter email ${i + 1}:`);
        // for(k=0; k < userInput.length; k++)
        // {
        //     if(userInput[k] === "@"){
            //     emails.push(userInput);
            //     alert("is email");
            //     }
            //     else{
                //         alert("not email");
                //     }
                
                // }
                
                if(userInput.includes("@")){
                    emails.push(userInput);
                    break;
                }
                else{
                    alert("not email");
                }
            }

}

for(let j=0; j< 5; j++){
    let userinp = prompt(`Enter pass ${j + 1}:`);
    passwords.push(userinp);
}

console.log("You entered:", emails);
console.log("You entered:", passwords);


alert("Now check the Email & Password");

let checkEmail = prompt("Enter email");
let checkPass = prompt("Enter password");

var isFoundd = false;
for(var k=0; k<emails.length; k++){
    if(checkEmail ===emails[k] && checkPass === passwords[k]){
       isFoundd = true;
    }
    
    
}

if(isFoundd == true)
{
    alert("Email and Password is matched");

}
else{
    alert("email and password is not marched");
}
