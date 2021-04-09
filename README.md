# weighted-positioning
Localization using weighted proximity of a set of coordinates

## Installation
```shell
npm install weighted-positioning
```

## Usage
```js
const {calculate, Vector} = require("weighted-positioning")

let res = calculate([
  {v: new Vector(2, 4), w: 10},
  {v: new Vector(7, 13), w: 50},
  {v: new Vector(10, 2), w: 20}
])

console.log(res) // { x: 7.125, y: 9.125 }
```

