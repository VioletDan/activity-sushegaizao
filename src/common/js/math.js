const imath = function () {
  let math = {}
  // 获得2点之间的距离
  math.getDis = function (source, target) {
    var lineX = target[0] - source[0]
    var lineY = target[1] - source[1]
    return Math.sqrt(Math.pow(Math.abs(lineX), 2) + Math.pow(Math.abs(lineY), 2))
  } // end func

  // 获得2点之间的夹角
  math.getDeg = function (source, target) {
    var deg
    if (source[0] === target[0] && source[1] === target[1]) {
      deg = 0
    } else {
      var disX = target[0] - source[0]
      var disY = target[1] - source[1]
      deg = Math.atan(disY / disX) * 180 / Math.PI
      if (disX < 0) {
        deg = 180 + deg
      } else if (disY < 0) {
        deg = 360 + deg
      }
    } // end else
    return deg
  } // end func
  return math
}

module.exports = imath()
