const Vector = require("./Vector2D")

const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
}

const reverseNumber = (num, min, max) => {
  return (max + min) - num;
}

const calculate = (points) => {
  let w_sum = 0
  let wx_sum = 0
  let wy_sum = 0
  let d_max = 0
  points.forEach(p => {
    if (p.d > d_max)
      d_max = p.d
  });
  points.forEach(p => {
    p.weight = reverseNumber(p.d, 0, 100)
    w_sum += p.weight
    wx_sum += p.weight * p.v.x
    wy_sum += p.weight * p.v.y
  })

  let product_vector = new Vector(wx_sum/w_sum, wy_sum/w_sum)

  return product_vector
}

module.exports = {calculate, toRadians, Vector}
