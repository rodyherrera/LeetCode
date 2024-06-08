const minFlips = (mat: number[][]): number => {
    const m = mat.length;
    const n = mat[0].length;
    const matrixToInt = (matrix: number[][]): number => {
        let num = 0;
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                num |= matrix[i][j] << (i * n + j);
            }
        }
        return num;
    };
    const flip = (num: number, i: number, j: number): number => {
        const directions = [[0, 0], [0, 1], [0, -1], [1, 0], [-1, 0]];
        for(const [di, dj] of directions){
            const ni = i + di, nj = j + dj;
            if(ni >= 0 && ni < m && nj >= 0 && nj < n){
                num ^= 1 << (ni * n + nj);
            }
        };
        return num;
    };
    const initial = matrixToInt(mat);
    if(initial === 0) return 0;
    const queue: [number, number][] = [[initial, 0]];
    const visited = new Set<number>();
    visited.add(initial);
    while(queue.length > 0){
        const [current, steps] = queue.shift()!;
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                const next = flip(current, i, j);
                if(next === 0) return steps + 1;
                if(!visited.has(next)){
                    visited.add(next);
                    queue.push([next, steps + 1]);
                }
            }
        }
    }
    return -1;
};