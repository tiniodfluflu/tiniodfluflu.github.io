export function histogram(battleSets:Array<number>):object {
    let tempset: Array<number> = [...battleSets].sort((a, b) => a > b ? 1 : -1);
    let returnHistogram:object = {};
    for(let i=0; i<tempset.length; i++) 
    {
        let value=tempset[i];
        if(!returnHistogram[value]) {
            returnHistogram[value] = 1;
        }
        else {
            returnHistogram[value] += 1;
        }
    }
    return returnHistogram;
}

export function averageTicks(battleSets:Array<number>):number {
    return Math.ceil([...battleSets].reduce((a, b) => a + b) / battleSets.length);
}