export const getBinary = (number, bits = 4) => {
  let binaryNumber = number.toString(2);

  while (bits > binaryNumber.length) {
    binaryNumber = "0" + binaryNumber;
  }
  return binaryNumber;
};
