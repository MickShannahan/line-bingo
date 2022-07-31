import { ProxyState } from "../AppState.js";
import { Square } from "../Models/Square.js";
import { Pop } from "../Utils/Pop.js";


class BingoService{
  toggleSquare(id, status) {
    let square = ProxyState.squares.find(s => s.id == id)
    if(square){
      square.complete = !square.complete
      Pop.toast('completed '+ square.body, 'success', 'top')
    }
    ProxyState.squares = ProxyState.squares
  }
  generateCard() {
    let copy = [...ProxyState.masterSquares]
    let empty = []
    for (let i = 1; i < 26; i++) {
      const sq = copy.splice(Math.floor(Math.random()*copy.length));
      empty.push(sq)
    }
    empty[12] = new Square({completed: true})
    ProxyState.squares = empty
  }

}

export const bingoService = new BingoService()