class StudentPortals <T>{
private student:T
    constructor(item:T){
this.student = item;
    }

get getStudent():T{
return this.student
}

set setStudent(student:T){

this.student = student

}
}


interface Student{
    name:string,
    id_card:number
}
const s1 = new StudentPortals <Student>({id_card:1213,name:'sreeraj'})
console.log(s1.getStudent);
s1.setStudent={id_card:478923,name:'Nimisha ps'}
console.log(s1.getStudent);

