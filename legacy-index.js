kintone.events.on('app.record.index.show', event => {
  alert('[APP: ' + APP.appId + '] 1 + 2 = ' + sum(1, 2))
  return event
})
