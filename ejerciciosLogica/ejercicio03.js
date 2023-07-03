// We define a function called "countNameRepetitions" that takes a "names" parameter,
// which is expected to be an array of names.
function countNameRepetitions(names) {
  // We declare an empty object called "result"
  // that we will use to store the names and their corresponding asterisk representation.
  const result = {};

  // We start a for loop that iterates through each element of the "names" array.
  // At each iteration, we assign the current value to the variable "name"-
  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    // Inside the loop, we check if the name already exists as a property on the result object.
    if (result[name]) {
      result[name] += "*";
    } else {
      result[name] = "*";
    }
  }

  // we return the result object containing the names and their corresponding asterisk representation.
  return result;
}

const names2 = ["Juan", "María", "Pedro", "Juan", "María", "María"];
const result2 = countNameRepetitions(names2);
console.log(result2);
