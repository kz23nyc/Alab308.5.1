//Part 1: Thinking Functionally
//Take an array of numbers and return the sum.

function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([12, 13, 14, 15, 16])); //70

// Take an array of numbers and return the average.

function averageArray(numbers) {
  const sum = sumArray(numbers);
  // Reuse the sumArray function
  return sum / numbers.length;
}
console.log(averageArray([12, 13, 14, 15, 16])); //14

// Take an array of strings and return the longest string.

function findLongestString(strings) {
  return strings.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}
console.log(
  findLongestString(["Cherry", "Watermelon", "Apricot", "Raspberry", "Avocado"])
); //Watermelon

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.

function stringsLongerThan(strings) {
  return strings;
}

console.log(
  findLongestString(["Say", "Hello beautiful", "in", "the", "Good morning"])
); //Hello beautiful
