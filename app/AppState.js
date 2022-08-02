import { Square } from "./Models/Square.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  masterSquares = [
    new Square({body: 'Crying Kid'}),
    new Square({body: 'Screaming Kid'}),
    new Square({body: 'Siblings argue'}),
    new Square({body: 'Parents argue'}),
    new Square({body: 'Shirt matches ride property'}),
    new Square({body: 'Marvel shirt'}),
    new Square({body: 'Pixar Movie shirt'}),
    new Square({body: 'Grumpy Shirt'}),
    new Square({body: 'Mickey Shirt'}),
    new Square({body: 'Donald Shirt'}),
    new Square({body: 'Goofy Shirt'}),
    new Square({body: 'Shirt from Dream Works property'}),
    new Square({body: 'Shirt from Universal property '}),
    new Square({body: 'Disney themed outfit'}),
    new Square({body: 'cast member comes through line'}),
    new Square({body: 'Selfie stops the line'}),
    new Square({body: 'Child climbs display'}),
    new Square({body: 'Child climbs through bars'}),
    new Square({body: 'Child playing phone game'}),
    new Square({body: 'Child left un-attended'}),
    new Square({body: 'Person cuts line'}),
    new Square({body: 'Person With folding fan'}),
    new Square({body: 'Person With electric fan'}),
    new Square({body: 'Person Watching Video Game stream'}),
    new Square({body: 'Person Watching Sports Game stream'}),
    new Square({body: 'Person mists you with water fan'}),
    new Square({body: 'Person Curses'}),
    new Square({body: 'Person Farts'}),
    new Square({body: 'Person explains the ride to someone else'}),
    new Square({body: 'Person wearing crocs'}),
    new Square({body: 'Person wearing new balance'}),
    new Square({body: 'Person wearing anime shirt'}),
    new Square({body: 'Person wearing bra as shirt'}),
    new Square({body: 'Person wearing PRIDE clothing'}),
    new Square({body: 'Person wearing black shirt and pants'}),
    new Square({body: 'Person Colored Hair'}),
    new Square({body: 'Person speaks Foreign language'}),
    new Square({body: 'Person with lightsaber'}),
    new Square({body: 'group of 6 or larger'}),
    new Square({body: 'Mom Takes picture of dad + kids'}),
    new Square({body: 'Dad Takes picture of mom + kids'}),
    new Square({body: 'Queue Vandalism / writing'}),
    new Square({body: "Queue decor has ⬆"}),
    new Square({body: "Queue decor has ⬇"}),
    new Square({body: "Queue decor has ➡"}),
    new Square({body: "Queue decor has ⬅"}),
    new Square({body: "Queue has water on ground"}),
    new Square({body: "Queue has water feature"}),
    new Square({body: "Queue has animatronic"}),
    new Square({body: "Queue has fake sound effects"}),
    new Square({body: "Queue has fake power / light problems"}),
    new Square({body: "Queue has intro movie"}),
    new Square({body: 'blue 🐭 ears'}),
    new Square({body: 'red 🐭 ears'}),
    new Square({body: 'green 🐭 ears'}),
    new Square({body: 'gold 🐭 ears'}),
    new Square({body: 'star wars 🐭 ears'}),
    new Square({body: 'pixar movie🐭 ears'}),
    new Square({body: 'marvel 🐭 ears'}),
    new Square({body: 'black 🐭 ears'}),
    new Square({body: 'white 🐭 ears'}),
    new Square({body: 'light up 🐭 ears'}),
    new Square({body: '🐭 cap and ears'}),
    new Square({body: 'any hat with ears'}),
    new Square({body: '🐭 backpack'}),
    new Square({body: 'other Disney character backpack'}),
    new Square({body: 'Star Wars Hat'}),
    new Square({body: "Pixar movie hat"}),
    new Square({body: "Marvel Hat"}),
    new Square({body: 'reference to another Disney property'}),
  ]

  squares = []  

  wins = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
