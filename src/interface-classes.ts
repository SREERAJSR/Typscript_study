interface MathematicalOperations {

    addTwoNumbers(num1: number, num2: number): number;
    multiplyTwoNumbers(num1: number, num2: number): number
}


class Maths implements MathematicalOperations {


    addTwoNumbers(num1: number, num2: number): number {
        return num1 + num2
    }


    multiplyTwoNumbers(num1: number, num2: number): number {
        return num1 * num2;
    }

}

const m1 = new Maths();
console.log(m1.addTwoNumbers(1,2));
console.log(m1.multiplyTwoNumbers(10,320));
