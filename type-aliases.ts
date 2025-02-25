type Person ={
    name:string;
    age:number;
    location:string
}

const getUserDetails =(user:Person)=> `Name (${user.name})  Age:(${user.age}) Location:(${user.location}) `

const res = getUserDetails({name:'sreeraj',age:23,location:"India"})
console.log(res);