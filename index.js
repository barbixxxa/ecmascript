//Appending Negative Numbers
//Implement the function which accepts a single argument (numbers, an array of numbers) and have it append any negative numbers into the negativeNumbers array
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    numbers.forEach(element => {
        if(element < 0){
            negativeNumbers.push(element);
        }
    });
}

let numbers = [1,2,0,-5,3, -8, -10];

extractNegativeNumbers(numbers);
console.log(negativeNumbers);