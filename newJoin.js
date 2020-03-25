const newJoin = (sep, ...arr) => {
    return arr.join(sep);
};

console.log(newJoin("|", 1, 2, 3));
