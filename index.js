const Vector = require("./Vector2D")

const calculate = (points) => {
  let w_sum = 0
  let wx_sum = 0
  let wy_sum = 0
  
  points.forEach(p => {
    w_sum += p.w
    wx_sum += p.w * p.v.x
    wy_sum += p.w * p.v.y
  })

  let product_vector = new Vector(wx_sum/w_sum, wy_sum/w_sum)

  return product_vector
}

module.exports = {calculate, Vector}
