/* 单例模式 */
class Board {
  width = 500
  height = 700
  private constructor() {

  }

  private static _board: Board

  static creatBoard() {
    if (this._board) {
      return this._board;
    } else {
      return this._board = new Board();
    }
  }
}

// const boardA = Board.creatBoard();
// const boardB = Board.creatBoard();
// console.log(boardA === boardB)


interface IAnimal {
  name: string;
  age: number
}

abstract class Animal {
}
