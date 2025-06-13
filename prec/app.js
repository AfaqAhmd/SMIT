





//same patteren differnt approach

// for(var y=1; y<=5; y++)
// {

//     for(var z=1; z<=y; z++)
//     {
//         document.write("*");
//     }

//     document.write("<br />")
// }


// let val = "*";
// let star ="";

// for(let i =1; i <= 5; i++ ){
//     star += val;
//     document.write(star + "<br />");
// }



// Triangle pyramid

// for(let i = 1; i <= 5; i++) {
//     let line = "";
    
//     // Add spaces
//     for(let j = 1; j <= 5 - i; j++) {
//         line += "&nbsp;";
//     }

//     // Add stars
//     for(let k = 1; k <= i; k++) {
//         line += "*";
//     }

//     document.write(line + "<br />");
// }



// Triangle star pattern
// for(let i=1; i<=5; i++){
//     let line= "";

//     for(let j=5; j>=i; j--)
//     {
//         line += "&nbsp;";
//     }

//     for(let k = 1; k <= i; k++) {
//         line += "*";
//     }

//     document.write(line + "<br />");
// }









// reverse right half pyramid
// for(var y=5; y>=1; y--)
// {

//     for(var z=1; z<=y; z++)
//     {
//         document.write("*");
//     }

//     document.write("<br />")

// }


// left half pyramid
// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";

//   // Print spaces first
//   for (let j = 1; j <= rows - i; j++) {
//     pattern += "&nbsp;&nbsp;"; // two spaces for alignment
//   }

//   // Then print stars
//   for (let k = 1; k <= i; k++) {
//     pattern += "*";
//   }

//   document.write(pattern + "<br/>");
// }





// Reverce left half pyramid
// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   // Then print stars
//   for (let k = 1; k <= i; k++) {
//     pattern += "&nbsp;&nbsp;";
//   } 
//   // Print spaces first
//   for (let j = 5; j >= i; j--) {
//     pattern += "*"; 
//   }

//   document.write(pattern + "<br/>");
// }



// both are of printing 
// 1
// 12
// 123
// 1234

// for(var y=1; y<=4; y++)
// {

//     for(var z=1; z<=y; z++)
//     {
//       let v =0;
//         document.write(v+=z);
//     }

//     document.write("<br />")
// }



// let val = 0;
// let star ="";

// for(let i =1; i <= 4; i++ ){
//     star += val+i;
//     document.write(star + "<br />");
// }




// for printing 
// 1234
// 123
// 12
// 1

// for(var y=4; y>=1; y--)
// {

//     for(var z=1; z<=y; z++)
//     {
//       let v =0;
//         document.write(v+=z);
//     }

//     document.write("<br />")
// }






let count = 1;
for(var y=1; y<=5; y++)
{
  let v ="";

    for(var z=1; z<=y; z++)
    {
        v +=count;
        count++
    }
    document.write(v+"<br />")
}

// let countt = 1;

// for(let i =1; i <= 4; i++ ){
//   let val ="";
//     document.write(val += countt);
//   }
//   countt++
//   document.write("<br/>");



let co = 1; 
let rows = 5;  // Changed to 5 rows

for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += co + " ";
    co++;
  }
  document.write(line +"<br/>");
}
