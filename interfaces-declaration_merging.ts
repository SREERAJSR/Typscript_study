

interface Mobile{
    brand :string;
    modelNo:number;
    ram:number;
    internalStorage:number
}
 //here we are adding more fields to existing interface  by ussing same name interface

interface Mobile{
    processor: string,
    cameraSensor:string
}

const apple :Mobile={
    brand:'Apple',
    modelNo:213213123,
    internalStorage:499999,
processor:'Apple a18 bionic chip',
cameraSensor:'Sony',
ram:8
}

console.log(apple);