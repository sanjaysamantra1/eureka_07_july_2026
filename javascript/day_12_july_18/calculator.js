function add(a, b) {
    console.log(`Addition of ${a} and ${b} is ${a + b}`)
}
function sub(a, b) {
    console.log(`Subtraction of ${a} and ${b} is ${a - b}`)
}
function mul(a, b) {
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`)
}
function division(a, b) {
    console.log(`Division of ${a} and ${b} is ${a / b}`)
};
// exporting 1 Object , that has 4 functions
export default { add, sub, mul, division }