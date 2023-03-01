class ClassRegex {
    Class_Regex: RegExp = /^(C|A|P)+[0-9]{4,}[G-M]$/;
    testClass(className:string):boolean{
      return this.Class_Regex.test(className);
    }
}
let className = new ClassRegex();
let validAccount: string[] = ["C3245G", "A3123H"];
let invalidAccount: string[] = [".@", "12345", "1234_", "abcde"];
for (let data of invalidAccount) {
    className.testClass(data);
    console.log(data + " khong phu hop")
}
for (let data of validAccount) {
    className.testClass(data);
    console.log(data + " phu hop")
}