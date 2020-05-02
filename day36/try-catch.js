const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Wrong type')
    }
}

try {
    const result = getTip(10);
    console.log(result)
} catch (e) {
    console.log('Catch block is running')
}

