
    const boardSize:number = 8;

    function generateChessBoard(): string {
        let board = '';
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if ((i + j) % 2 === 0) {
                    board += '██';
                } else {
                    board += '  ';
                }
            }
            board += '\n';
        }
        return board;
    }

    console.log(generateChessBoard());