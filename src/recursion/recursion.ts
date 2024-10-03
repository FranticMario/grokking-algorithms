const faktorial = (num:number):number => {
    if(num === 1) return 1;
    else {
      console.log("Jetzt num " + num)
      return num * faktorial(num - 1 )
    }
  }

  faktorial(3);



const sum = (arr:number[]):number => {
    if (arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));

}

console.log("Summe von eine Array with Recursion " + sum([1,2,3,4,5]))


const lengthArr = (arr:number[]):number => {
    if(arr.length === 0) {
        return 0;
    }
    return 1 + lengthArr(arr.slice(1));

}

console.log("Length von einer Array " + lengthArr([1,2,3,4,5]))


const maxNumArr = (arr:number[]) => {
    if(arr.length === 2) {
        if(arr[0] > arr[1]) {
            return arr[0]
        } else { 
            return arr[1]
        }
    };
    let subMax:number = maxNumArr(arr.slice(1))
    return arr[0] > subMax ? arr[0] : subMax;
   
}


console.log(maxNumArr([5,4,1,8,9]))