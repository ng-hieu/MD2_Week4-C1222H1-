class NumRegex {
    Num_Regex: RegExp = /^[0-9]{2,}[-]{1}[0-9]{10}$/;
    testNum(numPhone:string):boolean{
        return this.Num_Regex.test(numPhone);
    }
}
let numPhone = new NumRegex();
let validAccount: string[] = ["84-2342345643", "86-3223545564"];
let invalidAccount: string[] = ["345144-1221", "12345", "85--5434567891"];
for (let data of invalidAccount) {
    numPhone.testNum(data);
    console.log(data + " khong phu hop")
}
// for (let data of validAccount) {
//     numPhone.testNum(data);
//     console.log(data + " phu hop")
// }