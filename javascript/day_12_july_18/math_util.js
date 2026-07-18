export function add(a, b) {
    console.log(`Addition of ${a} and ${b} is ${a + b}`)
}
export function sub(a, b) {
    console.log(`Subtraction of ${a} and ${b} is ${a - b}`)
}
export function mul(a, b) {
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`)
}
export default function division(a, b) {
    console.log(`Division of ${a} and ${b} is ${a / b}`)
}
/* 
    1. default export
    2. named export 
*/

// Rule-1 : 1 file can have maximum 1 default export, but can have many named exports
// Rule-2 : default export member can be imported with any name, its not the same for named exports