#include <vector>
#include <functional>

using namespace std;

class Solution {
    public:
        void solve(vector<vector<char>>& board){
            if (board.empty() || board[0].empty()) return;

            int m = board.size();
            int n = board[0].size();

            function<void(int, int)> dfs = [&](int i, int j){
                if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] != 'O') return;
                board[i][j] = 'E'; // Mark as visited (Escape)
                dfs(i + 1, j);
                dfs(i - 1, j);
                dfs(i, j + 1);
                dfs(i, j - 1);
            };

            for(int i = 0; i < m; ++i){
                if (board[i][0] == 'O') dfs(i, 0);
                if (board[i][n - 1] == 'O') dfs(i, n - 1);
            }
            for(int j = 0; j < n; ++j){
                if(board[0][j] == 'O') dfs(0, j);
                if(board[m - 1][j] == 'O') dfs(m - 1, j);
            }

            for(int i = 0; i < m; ++i){
                for(int j = 0; j < n; ++j) {
                    if(board[i][j] == 'O'){
                        board[i][j] = 'X';
                    }else if(board[i][j] == 'E'){
                        board[i][j] = 'O';
                    }
                }
            }
        };
};