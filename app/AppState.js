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
    new Square({body: 'Shirt from Dreamworks property (Shrek, kung foo Panda, etc.)'}),
    new Square({body: 'Shirt from Univeral property (Harry Potter, Jurassic World, Jaws, etc.)'}),
    new Square({body: 'Disney themed outfit'}),
    new Square({body: 'cast member comes through line'}),
    new Square({body: 'Selfie stops the line'}),
    new Square({body: 'Child climbs display'}),
    new Square({body: 'Child climbs through bars'}),
    new Square({body: 'Child playing phone game'}),
    new Square({body: 'Child left un-attended'}),
    new Square({body: 'Lightsaber turned on'}),
    new Square({body: 'Lightsaber dropped'}),
    new Square({body: 'Lightsaber Red Color'}),
    new Square({body: 'Lightsaber Blue Color'}),
    new Square({body: 'Lightsaber Green Color'}),
    new Square({body: 'Person cuts line'}),
    new Square({body: 'Person With folding fan'}),
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
    new Square({body: 'Person with Disney Character on shoulder'}),
    new Square({body: 'British person'}),
    new Square({body: 'Person speaks Foreign language'}),
    new Square({body: 'group of 6 or larger'}),
    new Square({body: 'Mom Takes picture of dad + kids'}),
    new Square({body: 'Dad Takes picture of mom + kids'}),
    new Square({body: 'Queue Vandalism / writing'}),
    new Square({body: "Queue decor has word 'Up'"}),
    new Square({body: "Queue decor has word 'Down'"}),
    new Square({body: "Queue decor has word 'left'"}),
    new Square({body: "Queue decor has word 'Right'"}),
    new Square({body: "Queue has spilled water"}),
    new Square({body: "Queue has animatronic"}),
    new Square({body: "Queue has fake sound effects"}),
    new Square({body: "Queue has fake power / light problems"}),
    new Square({body: "Queue has 2 parts"}),
    new Square({body: 'blue 🐭 ears'}),
    new Square({body: 'red 🐭 ears'}),
    new Square({body: 'green 🐭 ears'}),
    new Square({body: 'gold 🐭 ears'}),
    new Square({body: 'star wars 🐭 ears'}),
    new Square({body: 'toy story 🐭 ears'}),
    new Square({body: 'animal print 🐭 ears'}),
    new Square({body: 'marvel 🐭 ears'}),
    new Square({body: 'black 🐭 ears'}),
    new Square({body: 'white 🐭 ears'}),
    new Square({body: 'light up 🐭 ears'}),
    new Square({body: '🐭 cap and ears'}),
    new Square({body: 'any hat with 🐭 ears'}),
    new Square({body: 'Star Wars Hat'}),
    new Square({body: "Monsters Inc Hat"}),
    new Square({body: 'Hidden Mickey'}),
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
