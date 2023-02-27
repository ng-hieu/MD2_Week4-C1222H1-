class BubbleSort{
    arr:number[]

    constructor(arr: number[]) {
        this.arr = arr;
    }
    bubbleSort(){
        let array = this.arr;
        let needNextPass = true;
        console.log(`Before swap ${array}`)
        for (let i = 1; i < array.length; i++) {
            needNextPass = false;
            for (let j = 0; j < array.length - i; j++) {
                if (array[j] > array[j+1]){
                    console.log(`Swap ${array[j]} with ${array[j+1]}`);
                    let swap = array[j];
                    array[j] = array[j+1];
                    array[j+1] = swap;
                    needNextPass = true;
                    console.log("List after the  " + i + "' sort: ")
                    console.log("After swap:  ")
                    for (let k = 0; k < array.length; k++) {
                        console.log(array[k])
                    }
                }
            }
        }
    }
}
let arr = new BubbleSort([3,2,1,5,9,7,6]);
arr.bubbleSort();