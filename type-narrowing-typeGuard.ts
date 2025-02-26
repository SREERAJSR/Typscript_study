type Mytype = string | number;

function exampleFunction(item: Mytype): Mytype {
  if (typeof item === "string") {
    return item.toLocaleUpperCase();
  } else {
    return item.toFixed(3);
  }
}

const res:Mytype = exampleFunction('sreeraj')
const res2 :Mytype = exampleFunction(32)
console.log(res);

console.log(res2);

