const regExp = /[0-9]*/gm;
const regExpNum = /\d+/gm;

const sumArr = arr => {
    const newArr = arr.toString().split(",");
    return newArr.reduce((sum, elem) => {
        return sum + Number(elem.match(regExp)[0].match(regExpNum));
    }, 0);
};

const test = [[1, [2]], "32b", "x333", [""], ["ф444"], 5];

console.log(sumArr(test));
