// String literal type ;

import { isMatchWith } from "lodash";

let color: "Yellow" | "red" | "green" = "Yellow";
color = "green";
console.log(color);

let secretPasswrod: 'secretPassword@1233' = "secretPassword@1233"
console.log(secretPasswrod);

let  isTrue :true |false =true;
// isTrue='sre'  Error 
isTrue  =false;
console.log(isTrue);
