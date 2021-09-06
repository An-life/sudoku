module.exports = function solveSudoku(matrix) {
    function testMatrix(matrix, row, column, number) {
        for (let i = 0; i < 9; i++) {
            const a = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const b = 3 * Math.floor(column / 3) + i % 3;
            if (matrix[row][i] === number || matrix[i][column] === number || matrix[a][b] ===number ) {
                return (false);
            }
        }
        return (true);
    }
    for (let i = 0; i < 9; i++) {
        for (let x = 0; x < 9; x++) {
            if (matrix[i][x] === 0) {
                for (let m = 1; m <= 9; m++) {
                    if (testMatrix(matrix, i, x, m)) {
                        matrix[i][x] = m;
                        if (solveSudoku(matrix)) {
                            return (matrix);
                        } else {
                            matrix[i][x] = 0;
                        }
                    }
                }
                return (false);
            }
        }
    }
    return (matrix);
}

