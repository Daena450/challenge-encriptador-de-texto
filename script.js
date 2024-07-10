function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const muneco = document.getElementById('muneco');
    const noMessage = document.getElementById('noMessage');
    const outputText = document.getElementById('outputText');

    if (!/^[a-z\s]*$/.test(inputText)) {
        alert("¡Solo letras minúsculas y sin acento!");
        return;
    }

    let encryptedText = inputText.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat');

    outputText.value = encryptedText;
    muneco.style.display = 'none';
    noMessage.style.display = 'none';
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const muneco = document.getElementById('muneco');
    const noMessage = document.getElementById('noMessage');
    const outputText = document.getElementById('outputText');

    if (!/^[a-z\s]*$/.test(inputText)) {
        alert("¡Solo letras minúsculas y sin acento!");
        return;
    }

    let decryptedText = inputText.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');

    outputText.value = decryptedText;
    muneco.style.display = 'none';
    noMessage.style.display = 'none';
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    alert('Texto copiado: ' + outputText.value);
}