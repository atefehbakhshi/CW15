let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

find
let even = [];
const find = (arr1) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 === 0) {
            even.push(arr[i]);
        }
    }
    return even
}
console.log(find(arr))

map
let double = []
const map = (arr1) => {
    for (let i = 0; i < arr1.length; i++) {
        double.push(arr1[i] * 2)
    }
    return double
}
console.log(map(arr))

foreach
const foreach = (arr1) => {
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i])
    }
}
foreach(arr);
