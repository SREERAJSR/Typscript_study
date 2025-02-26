type UserInfo ={
    name:string,
    age:number,
    location:string
}

type AccountDetails ={
    email:string,
    password :string
}

type User = UserInfo & AccountDetails;

const sree :User={
    name:'Sree',
    age:23,
    location:'India',
    email:'sreerajsr03@gmail.com',
    password:'password@123'
}



console.log(`Name:${sree.name} Age:${sree.age} Location :${sree.location} Email:${sree.email}  Password:${sree.password} `); 