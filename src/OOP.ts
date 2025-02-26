class Human {
    name:string;
    age:number
    location :string
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

const person1 = new Human('Sreeraj',23)
console.log(person1.name);
