const person:{firstName:string;lastName:string;age:number}={
    firstName:'Sreeraj',
    lastName:'sr',
    age:23
}

console.log(`Firstname:${person.firstName}\nLastname:${person.lastName}\nAge:${person.age} `);

function getPersonDetails():{firstName:string; lastName:string; age:number}{
    return person
}
const res = getPersonDetails()
console.log(res);
