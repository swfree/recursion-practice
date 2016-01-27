/* Create a function using recursion called numToText which takes a string and returns a new string with all numeric numbers from the input string converted to their corresponding text words. You can assume that the numbers in the string are single digit numbers.

Can you implement this function in two different ways? One way involves creating an inner helper function, the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str) {
    // split string into array of words
    var strArray = str.split("");
    // create array of text numbers
    var numKey = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    result = '';

    // create inner recursive helper that takes array as a param
    var recurse = function(array) {
        // base case
        if (array.length < 1) { return strArray; }

        // recursive case
        var char = array.shift();

        // if char is a number, find text value in numKey
        if (!isNaN(char) && char !== " ") {
            result += numKey[Number(char)];
        } else {
            result += char;
        }

        // recurse over reduced array
        recurse(array);
    };

    // call helper function
    recurse(strArray);

    // return resulting array>string
    return result;
};


// Quick tests:
var testString = "I have 5 dogs and 6 ponies";
var test2 = "hi 5";

console.log(numToText(test2));
console.log(numToText(testString));