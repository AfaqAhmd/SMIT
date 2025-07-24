function runIndexof() {
  var paragraph = document.getElementById("paragraph");

  // Current text in paragraph
  var text = paragraph.innerText;

  var txt1 = document.getElementById("text-1").value.trim();
  var txt2 = document.getElementById("text-2").value.trim();

  var findtext = text.indexOf(txt1);

  if (findtext !== -1) {
    // Replace txt1 with txt2
    text = text.slice(0, findtext) + txt2 + text.slice(findtext + txt1.length);

    // Update paragraph on the page
    paragraph.innerText = text;
    console.log("Replaced Text:", text);
  } else {
    console.log("Text to find not found.");
  }
}
