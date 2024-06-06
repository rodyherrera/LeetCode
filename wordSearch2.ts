class TrieNode{
    children: Map<string, TrieNode>;
    word: string | null;
    constructor(){
        this.children = new Map();
        this.word = null;
    };
};

const findWords = (board: string[][], words: string[]): string[] => {
    const result: string[] = [];
    const trieRoot = buildTrie(words);
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            dfs(board, i, j, trieRoot, result);
        }
    }
    return result;
};

const buildTrie = (words: string[]): TrieNode => {
    const root = new TrieNode();
    for(const word of words){
        let node = root;
        for(const char of word){
            if(!node.children.has(char)){
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.word = word;
    }
    return root;
};

const dfs = (board: string[][], i: number, j: number, node: TrieNode, result: string[]) => {
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
    const char = board[i][j];
    if(!node.children.has(char)) return;
    const nextNode = node.children.get(char)!;
    if(nextNode.word){
        result.push(nextNode.word);
        nextNode.word = null;
    }
    board[i][j] = '#';
    dfs(board, i + 1, j, nextNode, result);
    dfs(board, i - 1, j, nextNode, result);
    dfs(board, i, j + 1, nextNode, result);
    dfs(board, i, j - 1, nextNode, result);
    board[i][j] = char;
};