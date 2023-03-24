function histogram(set):object {
    let tempset: Array<number> = [...set].sort((a, b) => a > b ? 1 : -1);
    let returnHistogram:object = {};
    for(let i=0; i<tempset.length; i++) 
    {
        let value=tempset[i];
        if(!returnHistogram[i]) {
            returnHistogram[i] = 1;
        }
        else {
            returnHistogram[i] += 1;
        }
    }
    return returnHistogram;
}