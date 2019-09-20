import browser from 'webextension-polyfill'
let hasInserted = false

const css = `* {font-family: redactedregular !important;}`

browser.browserAction.onClicked.addListener(function(tab) {
  browser.tabs.executeScript({ file: 'content.js' })

  if (!hasInserted) {
    browser.tabs.sendMessage(tab.id, {
      command: 'insertCSS',
    })
  } else {
    browser.tabs.sendMessage(tab.id, {
      command: 'removeCSS',
    })
  }
  hasInserted = !hasInserted
})
