let numbers = [10, 20, 30, 40, 50];
console.log("Array elements:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum =", sum);