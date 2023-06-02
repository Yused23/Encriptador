
function encryptText(text) {
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    return text;
  }
  
  function decryptText(text) {
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text;
  }
  

  const inputText = document.getElementById('input-text');
  const outputText = document.getElementById('output-text');
  const encryptBtn = document.getElementById('encrypt-btn');
  const decryptBtn = document.getElementById('decrypt-btn');
  const copyBtn = document.getElementById('copy-btn');
  
  
  encryptBtn.addEventListener('click', function() {
    const input = inputText.value.toLowerCase();
    const encrypted = encryptText(input);
    outputText.value = encrypted;
  });
  
  
  decryptBtn.addEventListener('click', function() {
    const input = inputText.value.toLowerCase();
    const decrypted = decryptText(input);
    outputText.value = decrypted;
  });
  
  copyBtn.addEventListener('click', function() {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
  });
  