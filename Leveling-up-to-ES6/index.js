//Appending Negative Numbers
//Implement the function which accepts a single argument (numbers, an array of numbers) and have it append any negative numbers into the negativeNumbers array
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    numbers.forEach(element => {
        if (element < 0) {
            negativeNumbers.push(element);
        }
    });
}

let numbers = [1, 2, 0, -5, 3, -8, -10];

extractNegativeNumbers(numbers);
console.log(negativeNumbers);

//Setting a Largest String
//Implement the funcion, which has a single argument (strings an array of strings) which will set the largestString variable to the string which has the longest length of the array.

let largestString;

function findLargestString(strings) {

    largestString = [];
    for (const word of strings) {
        if (largestString.length < word.length) {
            largestString = word;
        }
    }
}

let strings = ['Eduardo', 'Teste', 'Paralelepipedo', 'No', 'Supercalifragilisticexpialidocious', ''];
findLargestString(strings);