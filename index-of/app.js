



function runIndexof(){

    
    var text = 'A computer is an electronic device that manipulates data and information, capable of storing, retrieving and processing it.';
    console.log(text);
    
    var txt1 = document.getElementById("text-1").value;
    var txt2 = document.getElementById("text-2").value;

    var findtext = text.indexOf(txt1);

    if (findtext !== -1) {
         text = text.slice(0, findtext) + txt2 + text.slice(findtext + txt1.length);
         console.log(text);
    }
    else
    {

        console.log(text);
    }
}