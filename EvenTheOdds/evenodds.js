for (i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        continue; //this means that the code skips this iteration and moves to the next one
    }

    console.log(i);
    if (i == 42) {
        break;
    }
}