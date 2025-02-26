class Dog {
  barking() {
    console.log("Bow Bow");
  }
}

class Cat {
  Meow() {
    console.log("Meow Meow");
  }
}

function exampFunction(animal: Dog| Cat):void{

    if(animal instanceof Dog){
        animal.barking()
    }else{
        animal.Meow()
    }
}

const myDog = new Dog()
const myCat = new Cat();

exampFunction(myCat)
exampFunction(myDog)