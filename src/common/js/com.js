/* eslint-disable camelcase */
var icom = importCom()
function importCom () {
  let com = {}
  // 初始化
  com.init = function () {
    var screenProp = window.innerWidth / window.innerHeight
    console.log('screenProp:' + screenProp)
    let atricle = document.getElementById('atricle')
    if (screenProp < 0.54) atricle.classList.add('screen189')
    if (screenProp > 0.54 && screenProp < 0.62) { atricle.classList.add('screenNormal') }
    if (screenProp >= 0.62) {
      if (screenProp >= 0.65) atricle.classList.add('screen149')
      else atricle.classList.add('screen159')
    }
    document.addEventListener('touchmove', function (e) {
      e.preventDefault()
    })
  }// edn func

  // 添加类
  com.addClass = function (obj, cls) {
    let blank, added
    var obj_class = obj.className
    blank = (obj_class !== '') ? ' ' : ''
    added = obj_class + blank + cls
    obj.className = added
  }
  // 移除class
  com.removeClass = function (obj, cls) {
    let removed
    var obj_class = ' ' + obj.className + ' '
    // 将多余的空格替换为一个空格
    obj_class = obj_class.replace(/(\s+)/gi, ' ')

    // 将原来的class替换为首尾加空格的class
    removed = obj_class.replace(' ' + cls + ' ', ' ')

    // 去掉首尾空格
    removed = removed.replace(/(^\s+)|(\s+$)/g, '')
    obj.className = removed
  }
  // 判断是否有class
  com.hasClass = function (obj, cls) {
    var obj_class = obj.className
    var obj_class_list = obj_class.split(' ')
    var x = 0
    for (x in obj_class_list) {
      if (obj_class_list[x] === cls) {
        return false
      } else {
        return true
      }
    }
  }
  return com
}

export default icom
