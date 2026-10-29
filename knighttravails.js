function knightMoves(start, end){

    if(JSON.stringify(start) === JSON.stringify(end)) return [start];
    console.log("hello");

    let queue = [start];
    let map = new Map();
    map.set(start.join(), null);

    while(queue.length !== 0){
        calculatePossibleMoves(queue[0], queue, map);
        queue.shift();
        if(map.has(end.join())) {
            console.log("break")
            break;
        }
    }
    let value = map.get(end.join());
    let solution = [value, end];
    while(map.get(value.join()) !== null){
        value = map.get(value.join());
        solution.unshift(value);
    }
    return solution;
}



function calculatePossibleMoves(start, queue, map){
    let possiblemoves = [];
    let x = start[0];
    let y = start[1];
    possiblemoves.push([x+2, y+1]);
    possiblemoves.push([x+2, y-1]);
    possiblemoves.push([x+1, y+2]);
    possiblemoves.push([x+1, y-2]);
    possiblemoves.push([x-2, y+1]);
    possiblemoves.push([x-2, y-1]);
    possiblemoves.push([x-1, y+2]);
    possiblemoves.push([x-1, y-2]);

    let legalmoves = possiblemoves.filter((move) => {return move[0] >=0 && move[1] >= 0 && move[0] < 8 && move[1] < 8}).filter((move) => !map.has(move.join()));

    queue.push(...legalmoves);
    for(const i of legalmoves){
        map.set(i.join(), start);
    }
    

    
}

console.log(knightMoves([0,0],[3,4]));
