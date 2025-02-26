type StudentInfoType ={
    firstname:string,
    age:number
}

class Student {

protected firstname: string;
    protected age: number;

    constructor(firstname: string,age:number) {
        this.firstname = firstname;
        this.age = age;
    }

    getNameProperty(): string {
        return this.firstname
    }
}

class Sree extends Student{
    constructor(firstname:string, age:number){
        super(firstname,age)
    }

    get getStudentInfo():string{
        return  `StudentName :${this.firstname} Age:${this.age}`
    }


set setStudentInfo(stud:StudentInfoType){
    this.firstname= stud.firstname;
    this.age= stud.age;
}

}
// console.log(stud1.firstname);   Error  -=>firstname filed is private it can accesss only withinthe class only

const s1 = new Sree('sreeraj',23)

console.log(s1.getStudentInfo);
s1.setStudentInfo={firstname:'Rahul',age:27}
console.log(s1.getStudentInfo);