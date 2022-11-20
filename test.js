function adder (num1) {
    const funToReturn = function (num2) {
        const function3 = function (num3) {
            console.log(num1 + num2 + num3);
        }
        return function3
    }
    return funToReturn;
};
const add2 = adder(2);
const add3 = adder(3);

const add3rdtime1 = add2(5)
const add3rdtime2 = add3(7)

add3rdtime1(4)
add3rdtime2(5)
