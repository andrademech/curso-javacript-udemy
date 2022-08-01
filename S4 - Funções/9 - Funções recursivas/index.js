function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-10);

// recursividade possui um limite máximo de ciclos 
// limite em torno de 1000 recursões