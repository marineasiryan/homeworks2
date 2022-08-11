function arraysSort(arr1, arr2) {
    let target = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            target.push(arr1.shift());
        } else {
            target.push(arr2.shift());
        }
    }
    return [...target, ...arr1, ...arr2];
}

function merge(arr1, arr2, arr3, arr4, arr5) {
    let arg = [...[arr1, arr2, arr3, arr4, arr5]];
    let newArray = [];
    let tempArr;
    while (arg.length > 1) {
        let array1 = arg.shift();
        let array2 = arg.shift();
        newArray.push(arraysSort(array1, array2));
    }
    tempArr = arraysSort(...newArray);
    newArray = [];
    newArray.push(tempArr);
    return arraysSort(...newArray, ...arg);
}

let arr1 = [1, 2, 3, 4];
let arr2 = [10, 20, 30, 40];
let arr3 = [5, 7, 11, 14];
let arr4 = [60, 61];
let arr5 = [1, 10, 20];
console.log(merge(arr1, arr2, arr3, arr4, arr5));