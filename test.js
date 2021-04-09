'use strict'

const {ok} = require("assert")
const {calculate} = require(".")
const Vector = require("./Vector2D")

let res = calculate([
  {v: new Vector(2, 4), rssi: -0},
  {v: new Vector(5.5, 13), rssi: -50},
  {v: new Vector(11.5, 2), rssi: -100}
])

console.log(`got X:${res.x} Y:${res.y}`)