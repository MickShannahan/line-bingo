import { ProxyState } from "../AppState.js";
import { Square } from "../Models/Square.js";



export function saveState(){
  const data = {
    squares : ProxyState.squares,
    wins : ProxyState.wins
  }
  localStorage.setItem('line-bingo', JSON.stringify(data))
}

export function loadState(){
  const raw = localStorage.getItem('line-bingo')
  if(raw){
    // @ts-ignore
  const parsed = JSON.parse(raw)
    ProxyState.squares = parsed.squares.map(s => new Square(s))
    ProxyState.wins = parsed.wins
  }
}