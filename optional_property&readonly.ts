type Person ={
    name:string,
    age:number,
  readonly  location?:string,
}


const person1:Person ={
    name:'sreeraj',
    age:23,
    location:'India'
}
const person2:Person ={
    name:'Deadpool',
    age:22
}


// person1.location='sfs' ======> Error because it is readonly property


console.log(`Name: ${person1.name} Age:${person1.age} Location :${person1.location} `);

console.log(`Name: ${person2.name} Age:${person2.age} Location :${person2.location} `);
