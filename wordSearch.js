/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word){
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (row, col, index) => {
        // If index reaches the end of the word, return true
        if(index === word.length) return true;
        // Check if current cell is out of bounds or doesn't match the current character of word
        if(row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]){
            return false;
        }
        // Mark current cell as visited by changing its character temporarily
        const temp = board[row][col];
        board[row][col] = '*';
        const found = dfs(row + 1, col, index + 1) ||
            dfs(row - 1, col, index + 1) || dfs(row, col + 1, index + 1) || dfs(row, col - 1, index + 1);
        // Restore the original character
        board[row][col] = temp;
        return found;
    };
    // Iterate through each cell in the board
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            // If the first character matches, start DFS
            if(board[i][j] === word[0] && dfs(i, j, 0)) return true;
        }
    }
    return false;
};