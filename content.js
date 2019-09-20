import browser from 'webextension-polyfill'

function insertCSS(file) {
  const style = document.createElement('link')
  style.rel = 'stylesheet'
  style.type = 'text/css'
  style.href = browser.extension.getURL('style.css')
  style.id = file
  document.getElementsByTagName('html')[0].appendChild(style)
  // ;(document.head || document.documentElement).appendChild(style)
}

function removeCSS(file) {
  const cssNode = document.getElementById(file)
  cssNode && cssNode.parentNode.removeChild(cssNode)
}

browser.runtime.onMessage.addListener(message => {
  const id = 'redact-the-web'
  if (message.command === 'insertCSS') {
    insertCSS(id)
  } else if (message.command === 'removeCSS') {
    removeCSS(id)
  }
})
