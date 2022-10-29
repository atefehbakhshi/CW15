let str = 'aabog';

const convert = (string) => {
    let newstr = string.split('');
    for (let i = 0; i < newstr.length; i++) {
        if (newstr[i] === 'a') newstr[i] = '@';
        if (newstr[i] === 'e') newstr[i] = '3';
        if (newstr[i] === 'g') newstr[i] = '&';
        if (newstr[i] === 'i') newstr[i] = '!';
        if (newstr[i] === 'o') newstr[i] = '0';
    }
    return newstr.join('')
}
console.log(convert(str));
