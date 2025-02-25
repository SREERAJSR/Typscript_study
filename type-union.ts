type UserInfo ={
    name:string;
    age:number;
    location:string;
    job?:string;
}

type AccountDetails = {
    email:string,
    password:string
}

type User = UserInfo | AccountDetails;

const sree1 :User ={
name:'Sree',
age:23,
location:'Kerala,India',
email:'sreerajsr03@gmail.com',
password:'password@1233432432',
job:'WebDEv',
}
console.log(sree1);


const list: (number|string)[] = [2,43,43,'dev'
]

// const list2 :(number[] | string[]) = [23,23,32,231,'sre']  this leads to problem

console.log(list);


