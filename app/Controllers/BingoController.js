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

function _drawScore(){
  document.getElementById('score').innerHTML = ProxyState.wins.toString()
  document.getElementById('editScore').value = ProxyState.wins
}

function _closeCanvas(){
  bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('offcanvas')).hide()
}


export class BingoController{
  constructor(){
    ProxyState.on('squares', _drawSquares)
    ProxyState.on('squares', saveState)
    ProxyState.on('wins', _drawScore)
    ProxyState.on('wins', saveState)
    loadState()
  }

  async generateCard(){
    if(await Pop.confirm('Generate a new bingo card?', 'You will loose the progress of this one.', 'question', 'new one please.')){
      bingoService.generateCard()
      _closeCanvas()
    }
  }

  async toggleSquare(id, status, body =''){
    if(status){
     if( await !Pop.confirm('Un-complete this square?', body))
      return
    }
    bingoService.toggleSquare(id, status)
  }

  async resetBoard(){
    if(await Pop.confirm('start this board over?', '', 'warning', 'yes')){
      bingoService.resetBoard()
      _closeCanvas()
    }
  }

  async win(){
    if(await Pop.confirm('Did you really win?', 'double check with you partner', 'info', 'Yes I really won')){
      bingoService.win()
      _closeCanvas()
      if(await Pop.confirm('Start a new board?', 'clear this board and get a new one?', 'question', 'anotha one')){
        bingoService.generateCard()
      }
    }
  }

  editScore(){
    let input = window.event.target.value
    if(input){
      console.log(input);
      bingoService.editScore(input)
    }
  }

}