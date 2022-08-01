import { generateId } from "../Utils/generateId.js";



export class Square{
  constructor(data){
    this.id = data.id || generateId()
    this.body = data.body || 'Free Space'
    this.complete = data.complete != undefined ? data.complete : false
  }

  get Template(){
    return `<div class="bingo-square ${this.complete ? 'complete': ''} ${this.Padding} ${this.Font}"
    onclick="app.bingoController.toggleSquare('${this.id}', ${this.complete}, '${this.body}')"
    >${this.body}</div>`
  }

  get Padding(){
    let long = this.body.split(' ').every(word => word.length < 8)
    if(this.body.length > 25 || !long){
      console.log(this.body, long, this.body.length);
      return 'p-small'
    }
    return ''
  }

  get Font(){
    let long = this.body.split(' ').every(word => word.length < 9)
    if(this.body.length > 32 || !long){
      return 'font-small'
    }
    return ''
  }
}