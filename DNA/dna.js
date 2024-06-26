const myDNA = [];

const dnaPieces = ["A", "C", "G", "T"];

for (let i = 0; i < 24; i++) {
    const p1 = Math.floor(Math.random() * dnaPieces.length);
    const p2 = Math.floor(Math.random() * dnaPieces.length);
    const p3 = Math.floor(Math.random() * dnaPieces.length);

    myDNA.push(dnaPieces[p1] + dnaPieces[p2] + dnaPieces[p3]);
}

console.log(myDNA);
