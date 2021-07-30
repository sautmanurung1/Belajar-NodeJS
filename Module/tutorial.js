const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('Object Require');
    }
}
module.exports = {sum : sum, PI : PI, SomeMathObject : SomeMathObject};