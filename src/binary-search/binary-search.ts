const sortedArray: number[] = Array.from({ length: 128 }, (_, i) => i + 1);
console.log(sortedArray);

const binarySearch = (list: number[], item:number) => {
    let low = 0;
    let high = list.length - 1
    let counter = 0;
    while (low <= high) {
        counter++;


        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        if (guess === item) {
            console.log("So viel iteration braucht man: " + counter);
            return console.log("Das ist die gesuchte Zahl: " + guess + " an Position " + mid);

        }

        if (guess > item) {
            high = mid - 1;  
        } else {
            low = mid + 1;   
        }
    }

    console.log("Nicht gefunden");

}


binarySearch(sortedArray, 95)