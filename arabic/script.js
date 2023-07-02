let encryptionInput = document.getElementById("encryption-input");
let decryptionInput = document.getElementById("decryption-input");
let normalAlphabets = ["أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع","غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", " ", "،", ".", "ا"]
let encryptedCodes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "~", "!", "@", "#", "$", "`", "=", "%", "^", "&", "*", "(", ")", "_", "-", "+", "|", '?', " ", ',', ".", "1"]
console.log(copyBtn)
function encrypt(value) {
    let result = "";
    for (let i = 0; i < value.length; i++) {
        let char = normalAlphabets.indexOf(value[i]);
        result += encryptedCodes[char]
    }
    return result
}

function decrypt(value) {
    let result = "";
    for (let i = 0; i < value.length; i++) {
        let char = encryptedCodes.indexOf(value[i]);
        result += normalAlphabets[char]
    }
    return result
}

encryptionInput.addEventListener("keyup", () => {
    encryptionInput.value = encryptionInput.value.replace(/[^أبتثجحخدذرزسشصضطظعغفقكلمنهوي.، اءؤئ]/ig, "")
    decryptionInput.value = encrypt(encryptionInput.value.toLowerCase())
})

decryptionInput.addEventListener("keyup", () => {
    encryptionInput.value = decrypt(decryptionInput.value)
})

