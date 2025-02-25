class Humans {
    public name:string;
    public age:number;
    public location:string

    constructor(name:string,age:number,location:string){
        this.age= age;
        this.name=name;
        this.location = location;
    }
}

const sree = new Humans('sreeraj',23,'Kerala')

console.log(sree.name);  // sreeraj
console.log(sree.location); //Error  sree is protected