/**
 * WebGL test
 */
var canvas = document.createElement('canvas')
var gl = canvas.getContext('webgl')

var debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)

/**
 * Tests
 */
let test1 = /HeadlessChrome/.test(window.navigator.userAgent)
let test2 = navigator.plugins.length === 0
let test3 = navigator.languages === ''
let test4 = vendor === 'Brian Paul' && renderer === 'Mesa OffScreen'
let test5 = !Modernizr['hairline']
let test6 = undefined

/**
 * Display result
 */
const displayResult = () => 
  document.getElementById('result').innerHTML = `
    <div><b>User Agent Test:</b> ${test1 ? 'Chrome headless detected' : 'OK'}</div>
    <div><b>Navigator Plugin Test:</b> ${test2 ? 'Maybe Chrome headless' : 'OK'}</div>
    <div><b>Navigator Languages Test:</b> ${test3 ? 'Chrome headless detected' : 'OK'}</div>
    <div><b>WebGL Test:</b> ${test4 ? 'Chrome headless detected' : 'OK'}</div>
    <div><b>Hairline Test:</b> ${test5 ? 'Maybe Chrome headless' : 'OK'}</div>
    <div><b>Image Test:</b> ${test6 ? 'Chrome headless detected' : 'OK'}</div>
    <div><b>Is it Chrome headless?</b> ${test1 || test3 || test4 || test6 ? 'Yes' : 'No'}</div>
  `

/**
 * Image test
 */
var body = document.getElementsByTagName('body')[0]
var image = document.createElement('img')
image.src = 'http://iloveponeydotcom32188.jg'
image.setAttribute('id', 'fakeimage')
body.appendChild(image)
image.onerror = () => {
  test6 = image.width === 0 && image.height === 0
  displayResult()
}