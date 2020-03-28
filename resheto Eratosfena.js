let prime = [];

const N = 100;

for (let i = 0; i < N; i++) prime[i] = true;

for (let i = 2; i * i < N; i++) {
    for (let j = i; j < N; j++) {
        if (j % i === 0 && i != j) prime[j] = false;
    }
}

let primes = [];

for (let i = 2; i < N; i++) {
    if (prime[i]) primes.push(i);
}

console.log(primes);
