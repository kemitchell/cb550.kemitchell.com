document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('email')
  link.href = 'mailto:' + ['kyle', '@', 'kemitchell', '.com'].join('')
})
