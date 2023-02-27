// let arr:number[] = [3,2,1,5,9,7,6]
// for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < arr.length-i; j++) {
//         if(arr[j]>arr[j+1]){
//             let temp:number = arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);

class BubbleSort{
    arr:number[]

    constructor(arr: number[]) {
        this.arr = arr;
    }
    bubbleSort(){
        let array = this.arr;
        for (let i = 1; i < array.length; i++) {
            for (let j = 0; j < array.length - i; j++) {
                if (array[j] > array[j+1]){
                    let swap = array[j];
                    array[j] = array[j+1];
                    array[j+1] = swap;
                }
            }
        }
        console.log(array)
    }
}
let arr = new BubbleSort([3,2,1,5,9,7,6]);
arr.bubbleSort();
