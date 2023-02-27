class SelectionSort {
    arr: number[]

    constructor(arr: number[]) {
        this.arr = arr;
    }

    selectionSort() {
        let array = this.arr;
        let minIdx;
        for (let i = 0; i < array.length-1; i++) {
                minIdx = i;
            for (let j = i+1; j < array.length; j++) {
                if(array[j]<array[minIdx]){
                    minIdx = j;
                    let temp = array[minIdx];
                    array[minIdx] = array[i];
                    array[i] = temp;
                }
            }
        }
        console.log(array)
    }
}

let arr = new SelectionSort([3, 2, 1, 5, 9, 7, 6]);
arr.selectionSort();