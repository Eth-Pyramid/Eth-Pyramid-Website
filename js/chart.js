var chart = AmCharts.makeChart('chartdiv', {
  'type': 'stock',
  'theme': 'black',

  'categoryAxesSettings': {
    'minPeriod': '15mm',
    'maxSeries': 150,
    'groupToPeriods': ['15mm', '30mm', 'hh', '2hh', '3hh', '6hh', '12hh', 'DD', '2DD', '3DD', '4DD', '5DD', '6DD', 'WW', '2WW', 'MM', '3MM', '6MM', 'YYYYt st']
  },

  'dataSets': [{
    'fieldMappings': [{
      'fromField': 'open',
      'toField': 'open'
    }, {
      'fromField': 'close',
      'toField': 'close'
    }, {
      'fromField': 'high',
      'toField': 'high'
    }, {
      'fromField': 'low',
      'toField': 'low'
    }],
    'dataProvider': [],
    'color': '#7f8da9',
    'title': 'EPX Sell Price',
    'categoryField': 'date'
  }],

  'panels': [{
    'title': 'Value',

    'showCategoryAxis': true,

    'percentHeight': 70,

    'dataDateFormat': 'YYYY-MM-DD JJ:NN',

    'valueAxes': [{
      'dashLength': 5
    }],

    'categoryField': 'date',

    'categoryAxis': {
      'parseDates': true
    },

    'chartCursor': {
      'valueLineEnabled': true,
      'valueLineBalloonEnabled': true
    },

    'stockGraphs': [{
      'type': 'candlestick',
      'id': 'g1',
      'balloonText': 'Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>',
      'openField': 'open',
      'closeField': 'close',
      'highField': 'high',
      'lowField': 'low',
      'valueField': 'close',
      'fillColors': '#5ba976',
      'negativeLineColor': '#db4c3c',
      'negativeFillColors': '#db4c3c',
      'fillAlphas': 1,
      'useDataSetColors': false,
      'comparable': true,
      'compareField': 'value',
      'showBalloon': true
    }]
  }],

  'chartScrollbarSettings': {
    'graph': 'g1',
    'graphType': 'line',
    'usePeriod': '15mm',
    'height': 90,
    'color': '#222222'
  }

})

chart.addListener('dataUpdated', zoomChart)

var zoomed = false

function zoomChart () {
  var diff = Math.min(96 * 5, chart.dataSets[0].dataProvider.length)
  if (chart.dataSets[0].dataProvider.length === 0)
    return

  if (zoomed)
    return

  zoomed = true

  var start = new Date(chart.dataSets[0].dataProvider[chart.dataSets[0].dataProvider.length - diff - 1].date + ':00')
  var end = new Date(chart.dataSets[0].dataProvider[chart.dataSets[0].dataProvider.length - 1].date + ':00')
  chart.zoom(start, end)
}

function refreshData () {
  $.getJSON('https://api.ethpyramid.io/candles.php', function (data) {
    chart.dataSets[0].dataProvider = data
    chart.validateData()
  })
}

refreshData()
setInterval(refreshData, 1000 * 60)
