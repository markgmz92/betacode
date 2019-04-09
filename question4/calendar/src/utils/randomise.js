const randomise = (min, max) => {
    const random = []
    for (let i = 0; i < 7; i++) {
        random.push(Math.ceil(Math.random() * (max - min) + min))
    }
    return random
}

export default randomise
