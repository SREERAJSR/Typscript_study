interface Employee {
    readonly firstname:string;
    lastname:string;
    id_card_number:number;
    readonly workexperiences :number;
    perfomane:()=> string
}


const sreeraj:Employee={
firstname:'Sreeraj',
lastname:'S R ',
id_card_number:1231231231,
workexperiences:2,
perfomane:():string=>{
    return 'Best performer on the year 2025'
}
}

console.log(sreeraj
    
);

console.log(sreeraj.perfomane());