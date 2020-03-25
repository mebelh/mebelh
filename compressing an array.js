const arr = [3, 2, 1, 5, 6, -1, 10, 11, 12].sort((a, b) => {
    return a < b ? -1 : 1;
});
const arr2 = [];

for (let i = 0; i < arr.length; ) {
    let k = 0;
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[i + j + 1] - arr[i + j] === 1) {
            k++;
        } else {
            break;
        }
    }
    if (k === 0) {
        arr2.push(`${arr[i]}`);
    } else {
        arr2.push(`${arr[i]}-${arr[i + k]}`);
    }
    i += k + 1;
}

console.log(arr2);
