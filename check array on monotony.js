const checkArray = arr => {
    const upFun = () => {
        let i = 0;
        while (arr[i] == arr[i + 1] && i < arr.length - 1) {
            i++;
        }
        if (i === arr.length) return true;

        if (arr[i] < arr[i + 1]) {
            return true;
        }
        return false;
    };
    const up = upFun();

    if (up) {
        return arr.every((elem, index, array) => {
            if (index === array.length - 1) {
                return true;
            }
            return elem <= array[index + 1];
        });
    }
    return arr.every((elem, index, array) => {
        if (index === array.length - 1) {
            return true;
        }
        return elem >= array[index + 1];
    });
};

console.log(checkArray([1, 2, 3, 4, 5]));
