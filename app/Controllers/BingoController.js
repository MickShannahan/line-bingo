import { ProxyState } from "../AppState.js";
import { bingoService } from "../Services/BingoService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";


function _drawSquares(){
  let squares = ProxyState.squares
  let template = ''
  squares.forEach(s => template += s.Template)
  document.getElementById('app').innerHTML = template
}


export class BingoController{
  constructor(){
    ProxyState.on('squares', _drawSquares)
    ProxyState.on('squares', saveState)
    loadState()
  }

  async generateCard(){
    if(await Pop.confirm('Generate a new bingo card?', 'You will loose the progress of this one.', 'question', 'new one please.')){
      bingoService.generateCard()
    }
  }

  async toggleSquare(id, status, body =''){
    if(status){
     if( await Pop.confirm('Un-complete this square?', body))
      return
    }
    bingoService.toggleSquare(id, status)
    
  }

}