const regex = /[a-zа-яё0-9]*/gm;

const string1 = "Ш4л4ш";
const string2 = "Eva, can I see bees in a cave?";
const Yandex = "Яндекс";

const palOrNot = val => {
    const newVal = val
        .toUpperCase()
        .match(regex)
        .join("");
    let left = 0,
        right = newVal.length - 1;
    let error = false;

    while (left < right) {
        if (newVal[left] != newVal[right]) {
            console.log("false");
            error = true;
            break;
        }
        left++;
        right--;
    }
    if (!error) console.log("true");
};

palOrNot(string2);
