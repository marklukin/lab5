function array() {
    const result = [];
    const get = (i) => {
        return result[i];
    };
    get.push = (item) => {
        return result.push(item);
    };
    get.pop = (item) => {
        return result.pop(item);
    };
    return get;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined