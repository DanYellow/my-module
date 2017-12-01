export const pow = (n, p) => {
    return n ** p;
}

// https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-prime-number-to-determine-if-it-is-pr
export const isPrime = (n) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
