const colorsSet = ['G', 'B', 'R', 'Y', 'P', 'W'];

let secret = ['G', 'Y', 'B', 'R'];
let guess = ['G', 'B', 'Y', 'W'];


const check = (secret, guess) => {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] !== secret[i]) {
      if (secret.includes(guess[i])) {
        cows += 1;
      }
    } else {
      bulls += 1;
    }
  }
  console.log(`Bulls: ${bulls}`);
  console.log(`Cows: ${cows}`);
}


check(secret, guess);