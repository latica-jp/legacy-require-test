import swal from 'sweetalert'
import img from '../../.goqoo/img/SmallLogo.jpg'
import common from '../../legacy-lib'

kintone.events.on('app.record.index.show', event => {
  const text = `[APP: ${common.APP.appId}] 1 + 2 = ${common.sum(1, 2)}`
  swal({
    text: text,
    icon: img,
  })

  return event
})
