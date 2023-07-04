function createPhoneNumber(numbers) {
  // Check if the array is of the required size (10 elements)
  if (numbers.length !== 10) {
    return "The array must contain exactly 10 numbers.";
  }

  // Check if all elements are positive integers between 0 and 9
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (!Number.isInteger(num) || num < 0 || num > 9) {
      return "The array must contain only positive integers between 0 and 9.";
    }
  }

  // Get phone number components
  const indicative = numbers.slice(0, 3).join("");
  const firstPart = numbers.slice(3, 6).join("");
  const secondPart = numbers.slice(6).join("");

  // Return the formatted phone number
  return `(${indicative}) ${firstPart}-${secondPart}`;
}

console.log(createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]));
