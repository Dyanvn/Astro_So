const calculateLifePathNumber = (birthDate) => {
    const digits = birthDate.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
  
    while (sum > 9 && sum !== 11 && sum !== 22) {
      sum = sum.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }
  
    return sum;
  };
  
  export { calculateLifePathNumber };