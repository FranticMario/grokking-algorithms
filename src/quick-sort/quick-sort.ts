const arrNum: number[] = [1,5,7,8,2,3,4,6,12];

const quickSort = (arr:number[]):number[] => {
    let less:number[] = [];
    let greater:number[] = [];

    if(arr.length < 2)  {
        return arr;
    } else {
        const pivot: number = arr[0];
        for(let i = 1; i <arr.length; i++) {
            if(arr[i] > pivot) {
                greater.push(arr[i])
            } else {
                less.push(arr[i])
            }
        }
    return [...quickSort(less), ...[pivot], ...quickSort(greater)]
    }
}

console.log(arrNum)
console.log(quickSort(arrNum))
