function setRootFontSize () {
  var conf = document.body
  var baseWidth = conf.getAttribute('base-width')
  var baseHeight = conf.getAttribute('base-height')
  var ratioW, ratioH
  // 使用 viewport 的大小 http://weizhifeng.net/viewports.html
  // https://github.com/jquery/jquery/blob/master/src/dimensions.js
  if (baseWidth) {
    ratioW = document.documentElement.clientWidth / baseWidth
  }
  if (baseHeight) {
    ratioH = document.documentElement.clientHeight / baseHeight
  }
  var MAX_RATIO = 1.5
  if (ratioW || ratioH) {
    var ratio = Math.min(ratioW || MAX_RATIO, ratioH || MAX_RATIO)
    if (ratio > MAX_RATIO) {
      ratio = MAX_RATIO
    }
    var html = document.getElementsByTagName('html')[0]
    html.style.fontSize = (100 * ratio) + 'px'

    // html.style.setProperty("font-size", fontsize + "px", "important");
  }
}
window.addEventListener('resize', setRootFontSize)
setRootFontSize()
