
var imonitor = importMonitor()
imonitor.add({ action: 'loading', category: 'default', label: 'loading' })
function importMonitor () {
  var monitor = {}

  monitor.add = function (options) {
    if (options) {
      var defaults = {
        action: 'touchend',
        category: 'default',
        label: ''
      }
      var opts = Object.assign(defaults, options)
      if (opts.obj && opts.obj.length > 0) {
        opts.obj.each(function (i, n) {
          n.onclick = function (e) {
            eventBind(e, { action: opts.action, category: opts.category, label: opts.label })
          }
        })
      } else {
        opts.action = 'script'
        eventBind(null, opts)
      } // end else
    } // end if
  } // end func

  function eventBind (e, data) {
    if (e) eventHandler(e.data)
    else eventHandler(data)
  } // end func

  function eventHandler (data) {
    if (window._hmt) window._hmt.push(['_trackEvent', data.category, data.action, data.label])
    if (window.ga) window.ga('send', 'event', data.category, data.action, data.label)
    if (window.gtag) {
      window.gtag('event', data.action, {
        'event_category': data.category,
        'event_label': data.label
      })
    }
    if (window.console) window.console.log('事件：' + ' | ' + '类别：' + data.category + ' | ' + '标签：' + data.label)
  } // end func

  return monitor
} // end import

export default imonitor
