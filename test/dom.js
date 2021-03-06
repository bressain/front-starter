import jsdom from 'jsdom'
import localStorage from 'localStorage'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView
win.localStorage = localStorage
global.document = doc
global.window = win
propagateToGlobal(win)

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}
