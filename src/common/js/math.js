var imath = importMath()
function importMath () {
  let math = {}
  // 获得范围内随机整数
  math.randomRange = function (min, max) {
    var randomNumber
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber
  } // end func

  // 获得随机颜色
  math.randomColor = function () {
    var str = '0123456789abcdef'
    var s = '#'
    for (let j = 0; j < 6; j++) s += str.charAt(Math.random() * str.length)
    return s
  } // end func

  // 随机打乱一个数组
  math.randomSort = function (ary) {
    if (ary && ary.length > 1) {
      ary.sort(function () {
        return 0.5 - Math.random()
      })
    }
  } // end func

  // 随机正负
  math.randomPlus = function () {
    return Math.random() < 0.5 ? -1 : 1
  } // end func
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

export default imath
