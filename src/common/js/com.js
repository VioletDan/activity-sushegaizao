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
      // e.preventDefault()
    }, { passive: false })
  }// edn func

  return com
}

export default icom
