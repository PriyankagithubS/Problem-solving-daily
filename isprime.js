// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // Function to check if a given number is prime
  function isPrime(n) {
    // Since 0 and 1 are not prime numbers
    if (n <= 1) return false;

    // 2 and 3 are prime numbers
    if (n <= 3) return true;

    // Exclude multiples of 2 and 3
    if (n % 2 === 0 || n % 3 === 0) return false;

    // Check divisors from 5 to the square root of n
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }

  // Function to get all prime numbers up to a given range
  function getPrimes(range) {
    let primes = [];
    for (let num = 2; num <= range; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  }

  // Read the input and parse it as an integer
  const N = parseInt(userInput[0]);

  // Get all prime numbers up to N
  const primes = getPrimes(N);

  // Print the prime numbers joined by a space
  console.log(primes.join(', '));
});
