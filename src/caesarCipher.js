function cipher(str, num) {
    let result = '';
    
    for (let i= 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i)
        let shift = num;
        if (
            !(charCode >= 65 && charCode <= 90) &&
            !(charCode >= 97 && charCode <= 122)
        ) {
            result += String.fromCharCode(charCode);
            continue;
        }
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode -65 + shift) % 26) + 65;
        }
        else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + shift) % 26) + 97
        };
        result += String.fromCharCode(charCode);
    };
    
    return result;
    
};



module.exports = cipher;