interface fruit {
    name:string;
    color:string
}
const fruitsList:fruit[] =[{
    name:'Apple',
    color:'Red'
},
{
    name:"Orange",
    color:'orange'
},
{
    name:'Pineapple',
    color:"yellow"
}]
function getValueBasedOnCondition<T extends Array<U> ,U>(list:T,condition:(item:U)=>boolean):U[]{

        return list.filter((item)=> condition(item))
}

const res = getValueBasedOnCondition<fruit[],fruit>(fruitsList,(item:fruit)=>item.color.length <4)

console.log(res);