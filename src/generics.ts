// regular function 

// function getString(item:string):string{
//     return item;
// }


// function getNumber(item:number):number{
//     return item;
// }

// function getBool(item:boolean): boolean{
//     return item
// }

// const str = getString(3) //ERROR we can't use number in this functionn , can't reuse this funciton 
// const num = getNumber(true) // Error 
// const bool = getBool(true)
// console.log(str);
// console.log(num);
// console.log(bool);

// -----------------------------------------------------------------------------
// GenericFunction

function getValue<T>(item:T):T{
    return item
}

const str = getValue<string>('sreeraj')
const num = getValue<number>(32)
const bool = getValue<boolean>(true)
 //reused the same function with different datatypes
 
console.log(str);
console.log(num);
console.log(bool);