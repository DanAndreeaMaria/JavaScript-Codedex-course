function relativityTheory(mass) {
    const c = 3e8;
    let e = mass * c**2;
    return e;
}

console.log(relativityTheory(50));