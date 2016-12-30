$(document).mousemove(function (e) {
  var boxCenter = [$('#image').offset().left, $('#image').offset().top]
  var angle = Math.atan2(e.pageX - boxCenter[0], -(e.pageY - boxCenter[1])) * (180 / Math.PI)
  $('#image').css({
    '-webkit-transform': 'rotate(' + (angle - 90) + 'deg)'
  })
  $('#image').css({
    '-moz-transform': 'rotate(' + (angle - 90) + 'deg)'
  })

  $('#image').stop().animate({
    left: e.pageX - 250,
    top: e.pageY - 180
  }, 1000)
})
