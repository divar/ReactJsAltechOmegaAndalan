function fishBash(n) {
    if (typeof n !== 'number') {
        return console.log("input must be number")
    }
    for (let i = 1; i < n; i++) {
        if (i%3 === 0) {
            console.log('fish')
        } else if (i%5 === 0) {
            console.log('bash')
        } else {
            console.log(i)
        }
    }
}

const input = Number(process.argv[2]);
fishBash(input);