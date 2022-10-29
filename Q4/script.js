let arr = [{ name: 'ali', family: 'rahmani' }];
function objectToString(arr) {
    let str = "";
    arr.forEach(item => {
        let keys = Object.keys(item);
        let values = Object.values(item);
        for (let i = 0; i < keys.length; i++) {
            str = str + keys[i] + "@@" + values[i];
            if (i !== (keys.length - 1)) {
                str = str + "&&";
            }
        }
    });
    return str;
}
console.log(objectToString(arr));

function stringToObject(string) {
    let object = {};
    let keyValues = string.split('&&');
    keyValues.forEach((item) => {
        let pair = item.split('@@');
        object[pair[0]] = pair[1];
    });
    return object;
}

console.log(stringToObject("name@@ali&&family@@rahmani"));