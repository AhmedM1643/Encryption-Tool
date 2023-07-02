let encryptionInput = document.getElementById("encryption-input");
let decryptionInput = document.getElementById("decryption-input");
let normalAlphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", ",", "."]
let encryptedCodes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "|", '?', " ", ',', "."]
let copyBtn = document.getElementById("copy");

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
    encryptionInput.value = encryptionInput.value.replace(/[^abcdefghijklmnopqrstuvwxyz. ,]/ig, "")
    decryptionInput.value = encrypt(encryptionInput.value.toLowerCase())
})

decryptionInput.addEventListener("keyup", () => {
    encryptionInput.value = decrypt(decryptionInput.value)
})

copyBtn.addEventListener("click", () => {
    decryptionInput.select()
    decryptionInput.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(decryptionInput.value)
    copyBtn.textContent = "Copied.."
    setTimeout(() => {copyBtn.textContent = "Copy";  document.getSelection().removeAllRanges()}, 2000)
})