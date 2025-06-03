



// Triangle star pattern
for(let i=1; i<=5; i++){
    let line= "";

    for(let j=5; j>=i; j--)
    {
        line += "&nbsp;";
    }

    for(let k = 1; k <= i; k++) {
        line += "*";
    }

    document.write(line + "<br/>");
}
document.write("<br/> --------------------------------<br/>")





// reverse right half pyramid
for(var y=5; y>=1; y--)
{

    for(var z=1; z<=y; z++)
    {
        document.write("*");
    }

    document.write("<br />")

}

document.write("<br/> --------------------------------<br/>")



// left half pyramid
let row = 5;

for (let i = 1; i <= row; i++) {
  let pattern = "";

  
  for (let j = 1; j <= row - i; j++) {
    pattern += "&nbsp;&nbsp;"; 
  }

  
  for (let k = 1; k <= i; k++) {
    pattern += "*";
  }

  document.write(pattern + "<br/>");
}

document.write("<br/> --------------------------------<br/>")



// Reverce left half pyramid
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  
  for (let k = 1; k <= i; k++) {
    pattern += "&nbsp;&nbsp;";
  } 
  
  for (let j = 5; j >= i; j--) {
    pattern += "*"; 
  }

  document.write(pattern + "<br/>");
}


document.write("<br/> --------------------------------<br/>")


for(var y=1; y<=4; y++)
{

    for(var z=1; z<=y; z++)
    {
      let v ="";
        document.write(v += z +" ");
    }

    document.write("<br />")
}


document.write("<br/> --------------------------------<br/>")

for(var y=4; y>=1; y--)
{

    for(var z=1; z<=y; z++)
    {
      let v = "";
        document.write(v += z +" ");
    }

    document.write("<br />")
}


document.write("<br/> --------------------------------<br/>")


let num = 1; 
let rowss = 4;  

for (let i = 1; i <= rowss; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += num + " ";
    num++;
  }
  document.write(line +"<br/>");
}
