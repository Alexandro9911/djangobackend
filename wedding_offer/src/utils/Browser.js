const Browser = {
  isiOS: function () {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  },
  isiPhone: function () {
    return /iPhone/.test(navigator.userAgent) && !window.MSStream
  },
  isiPad: function () {
    return /iPad/.test(navigator.userAgent) && !window.MSStream
  }
}

export default Browser