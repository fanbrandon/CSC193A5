const fancify = document.getElementById("idFancyShmancy");
const boring = document.getElementById("idBoringBetty");
fancify.addEventListener("change", fancifyOption);
boring.addEventListener("change", boringOption);


function sendAlert() {
  alert("Something Changed");
}


function makeTextBig() {
  document.getElementById("myTextArea").style.fontSize = "24px";
}


function fancifyOption() {
  document.getElementById("myTextArea").style.color = "blue";
  document.getElementById("myTextArea").style.fontWeight = "bold";
  document.getElementById("myTextArea").style.textDecoration = "underline";
}


function boringOption() {
  document.getElementById("myTextArea").style.color = "black";
  document.getElementById("myTextArea").style.fontWeight = "normal";
  document.getElementById("myTextArea").style.textDecoration = "none";
}


function moo() {
  
  var textarea = document.getElementById("myTextArea");
  
  var text = textarea.value.toUpperCase();
  
  var sentences = text.split(/([.!?]+)/);

  
  for (var i = 0; i < sentences.length; i += 2) {
    
    var sentence = sentences[i];

    
    if (/\s/.test(sentence)) {
      
      var words = sentence.split(/\s+/);
      
      words[words.length - 1] += "-Moo";
      
      sentences[i] = words.join(" ");
    }
  }

  
  text = sentences.join("");
 
  textarea.value = text;
}