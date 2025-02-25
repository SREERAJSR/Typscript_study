

function throwError(err:string):never{
    throw new Error(err)
}


function infiniteLoop():never{
while(true){}
}

let x :never;

function infiniteLoop2():never{
    while(true){}
}

x = infiniteLoop2()



