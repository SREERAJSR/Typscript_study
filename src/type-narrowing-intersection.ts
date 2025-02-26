type Employee = {
  name: string;
  id: number;
  age: number;
};

type Manger = {
  department: string;
  role: string;
};

type MangerWithEmployeeInfo = Employee & Manger;

const manager: MangerWithEmployeeInfo = {
  name: "Sreeraj",
  age: 23,
  department: "IT",
  role: "Technical lead",
  id:1233
};

console.log(manager.name);
console.log(manager.age);
console.log(manager.id);
console.log(manager.role);
console.log(manager.department);
