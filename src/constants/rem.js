;(function () {
  var initFontSize = 16
  var iPhone6Width = 320
  var clientWidth = window.document.documentElement.clientWidth || iPhone6Width
  var newFontSize = initFontSize * (clientWidth / iPhone6Width)
  document.documentElement.style.fontSize = newFontSize + 'px'
})()
