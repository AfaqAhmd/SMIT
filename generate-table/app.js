







var arrays = [1,"SMIT", true ,[19,11,22,33,44]];




// console.log(arrays[1]);
// console.log(arrays.length);




// for(var i= 0; i<arrays.length; i++)
// {
//     // console.log(i);
//     // console.log(i);
//     console.log(arrays[i])
    
// }


var tab = prompt("Enter a number to generate table");

if(tab !== null && tab !=="")
{

    
    for( var i= 1; i<11; i++)
        {
            document.write(tab +" x "+i + " = "+i*tab +"<br>");
        }
}

else{
    document.write("Number is not Set");
}

