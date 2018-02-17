function getStripedUrl () {
  return location.pathname + (function () {
    var strip_params = ['utm_campaign', 'utm_source', 'utm_medium']
    var i, search = location.search
    // Remove each specified parameter, regardless of format (p or p= or p=value) or position in the querystring.
    for (i = 0; i < strip_params.length; i++) {
      search = search.replace(new RegExp('([?&])' + strip_params[i] + '(=[^&]*)?&?', 'gi'), '$1')
    }
    // Trim trailing "&"s, and remove "?" if all params removed.
    return search.replace(/&+$/, '').replace(/^\?$/, '')
  })()
}

$(document)
  .ready(function () {
    var new_url = getStripedUrl();

    if (new_url !== window.location)
      window.history.replaceState({path: new_url}, '', new_url)

    // fix menu when passed
    $('.main-menu')
      .visibility({
        once: false,
        onBottomPassed: function () {
          $('.fixed.menu').transition('fade in')
        },
        onBottomPassedReverse: function () {
          $('.fixed.menu').transition('fade out')
        }
      })

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')

    // language selector dropdown
    $('.ui.dropdown')
      .dropdown({
        action: 'hide'
      })
  })
