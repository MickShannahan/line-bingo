import { generateId } from "../Utils/generateId.js";



export class Square{
  constructor(data){
    this.id = data.id || generateId()
    this.body = data.body || 'Free Space'
    this.complete = data.complete != undefined ? data.complete : false
  }

  get Template(){
    return `<div class="bingo-square ${this.complete ? 'complete': ''}"
    onclick="app.bingoController.toggleSquare('${this.id}', ${this.complete}, '${this.body}')"
    >${this.body}</div>`
  }
}