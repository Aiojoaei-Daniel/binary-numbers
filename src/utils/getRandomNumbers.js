const BITS = {
  4: 15,
  5: 32,
  6: 63,
  7: 127,
  8: 255,
};

export const getRandomNumbers = (size = 4) => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * BITS[size]);
  };

  let randomNumbers = [];

  while (randomNumbers.length < 3) {
    let randomNumber = getRandomNumber();

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
};
