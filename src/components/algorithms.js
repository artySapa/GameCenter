export const mergeSort = (array, animations = []) => {
    if(array.length === 1) return array; // check if length is 1

    const midIndex = Math.floor(array.length/2); // take a mid index

    const firstArr = mergeSort(array.slice(0, midIndex)); // recurse on first half
    const secondArr = mergeSort(array.slice(midIndex)); // recurse on second half

    const result = [];

    let i = 0, j = 0;

    while(i < firstArr.length && j < secondArr.length){
        if(firstArr[i] < secondArr[j]){
            result.push(firstArr[i++]);
        }
        else {
            result.push(secondArr[j++]);
        }
    }

    while(i < firstArr.length){
        result.push(firstArr[i++]);
    }

    while(j < secondArr.length){
        result.push(secondArr[j++]);
    }

    return result;
}

export const average = array => {
    let count = 0;
    for(let i = 0; i < array.length; i++){
        count += array[i];
    }
    count = count / array.length;
    return count;
}