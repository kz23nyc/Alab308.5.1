
function calculateSum(numbers) {
    // Using the reduce method for a concise solution
    return numbers.reduce((sum, number) => sum + number, 0);
  }
  
  console.log(calculateSum([1,2,3,4,5]));

  function calculateAverage(numbers) {
    const sum = calculateSum(numbers); // Reuse the sum function
    return sum / numbers.length;
  }
  console.log(calculateAverage([1,2,3,4,5]));