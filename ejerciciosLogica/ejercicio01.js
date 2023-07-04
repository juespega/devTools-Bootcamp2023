function next_pal(number) {
  number = number + 1;

  while (true) {
    const num_str = number.toString();
    if (num_str === num_str.split("").reverse().join("")) {
      return parseInt(num_str);
    } else {
      number = number + 1;
    }
  }
}

console.log(next_pal(11)); // Output: 22
