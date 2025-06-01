



var table = +prompt("Enter a number to generate tables");

for(var i=2; i<=table; i++){

    document.write("<h1> Table of :"+i+"</h1>");

    for(var j=1; j<=10; j++)
    {
        document.write(i+" x "+j+" = "+i*j+"<br>");
    }
}