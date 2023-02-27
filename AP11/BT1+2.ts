class InsertionSort {
    arr:number[]

    constructor(arr: number[]) {
        this.arr = arr;
    }
    insertionSort(){
        let array = this.arr;
        let key;
        for (let i = 1; i < array.length; i++) {
            console.log(`Lần kiểm tra số ${i}`);
            key = array[i]
            let j = i-1;
            while (j>=0 && array[j]>key){
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = key;
            console.log(`Sau khi kiểm tra lần ${i}: ${array}`);
        }
        console.log("Sau khi hoàn thành: "+array)
    }
}
let arr = new InsertionSort([3,2,1,5,9,7,6]);
arr.insertionSort();
