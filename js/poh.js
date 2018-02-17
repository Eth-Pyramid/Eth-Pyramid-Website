var contractAddress = '0x2Fa0ac498D01632f959D3C18E38f4390B005e200'

if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] !== 'undefined'
        ? args[number]
        : match

    })
  }
}

window.addEventListener('load', function () {

  if ($('#metamask-detecting').hasClass('visible')) {
    $('#metamask-detecting').dimmer('hide')
  }

  if (typeof web3 !== 'undefined') {
    web3js = new Web3(web3.currentProvider)
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    $('#metamask-not-found').dimmer('show')
  }

  let abi = [
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        },
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'allowance',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'totalSupply',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'tokenBalance',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'symbol',
      'outputs': [
        {
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'buyPrice',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'ethervalue',
          'type': 'uint256'
        },
        {
          'name': 'subvalue',
          'type': 'uint256'
        }
      ],
      'name': 'calculateDividendTokens',
      'outputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'payouts',
      'outputs': [
        {
          'name': '',
          'type': 'int256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'name',
      'outputs': [
        {
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'decimals',
      'outputs': [
        {
          'name': '',
          'type': 'uint8'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '_owner',
          'type': 'address'
        }
      ],
      'name': 'dividends',
      'outputs': [
        {
          'name': 'amount',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '_owner',
          'type': 'address'
        }
      ],
      'name': 'balanceOf',
      'outputs': [
        {
          'name': 'balance',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'getEtherForTokens',
      'outputs': [
        {
          'name': 'ethervalue',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'sellPrice',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'ethervalue',
          'type': 'uint256'
        }
      ],
      'name': 'getTokensForEther',
      'outputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'reinvestDividends',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'to',
          'type': 'address'
        }
      ],
      'name': 'withdrawOld',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'withdraw',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'sellMyTokens',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'payable': true,
      'stateMutability': 'payable',
      'type': 'fallback'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'getMeOutOfHere',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'fund',
      'outputs': [],
      'payable': true,
      'stateMutability': 'payable',
      'type': 'function'
    }
  ]

  var contractClass = web3.eth.contract(abi)
  var contract = contractClass.at(contractAddress)

  web3.eth.defaultAccount = web3.eth.accounts[0]
  updateData(contract)

  setInterval(function () {
    updateData(contract)
  }, 1000)

  // Buy token click handler
  $('#buy-tokens').click(function () {
    let amount = $('#purchase-amount').val().trim()
    if (amount <= 0 || !isFinite(amount) || amount === '') {
      $('#purchase-amount').addClass('error').popup({
        title: 'Invalid Input',
        content: 'Please input a valid non-negative, non-zero value.'
      }).popup('show')
    } else {
      $('#purchase-amount').removeClass('error').popup('destroy')
      contract.fund({
        value: convertEthToWei(amount)
      }, function (e, r) {
        console.log(e, r)
      })
    }
  })

  $('#donate-action').click(function () {
    let amount = $('#donate-amount').val().trim()
    if (amount <= 0 || !isFinite(amount) || amount === '') {
      $('#donate-amount').addClass('error').popup({
        title: 'Invalid Input',
        content: 'Please input a valid non-negative, non-zero value.'
      }).popup('show')
    } else {
      $('#donate-amount').removeClass('error').popup('destroy')
      web3.eth.sendTransaction({
        to: '0x25dd53e2594735b38a4646f62e5b65b4e4aa42bb',
        value: convertEthToWei(amount)
      }, function (e, r) {
        $('#donate-amount').val('')
        $('#donate-dimmer').dimmer('hide')
        console.log(e, r)
      })
    }
  })

  $('#donate-open').click(function (e) {
    e.preventDefault()
    $('#donate-dimmer').dimmer('show')
  })

  $('#donate-close').click(function () {
    $('#donate-dimmer').dimmer('hide')
  })

  // Sell token click handler
  $('#sell-tokens-btn').click(function () {
    contract.sellMyTokens(function (e, r) {
      console.log(e, r)
    })
  })

  // Reinvest click handler
  $('#reinvest-btn').click(function () {
    contract.reinvestDividends(function (e, r) {
      console.log(e, r)
    })
  })

  // Withdraw click handler
  $('#withdraw-btn').click(function () {
    contract.withdraw(function (e, r) {
      console.log(e, r)
    })
  })

  $('#sell-tokens-btn-m').click(function () {
    contract.sellMyTokens(function (e, r) {
      console.log(e, r)
    })
  })

  $('#reinvest-btn-m').click(function () {
    contract.reinvestDividends(function (e, r) {
      console.log(e, r)
    })
  })

  $('#withdraw-btn-m').click(function () {
    contract.withdraw(function (e, r) {
      console.log(e, r)
    })
  })
})

function convertEthToWei (e) {
  return 1e18 * e
}

function convertWeiToEth (e) {
  return e / 1e18
}

var ethPrice = 0
var currency = (typeof default_currency == 'undefined') ? 'USD' : default_currency
var timer = null

function updateEthPrice () {
  clearTimeout(timer)
  $.getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=' + currency, function (result) {
    var eth = result[0]
    ethPrice = parseFloat(eth['price_' + currency.toLowerCase()])
    timer = setTimeout(updateEthPrice, 10000)
  })
}

$(function () {

  $('#currency').val(currency)

  $('#currency').change(function () {
    currency = $(this).val()
    updateEthPrice()
  })

})

updateEthPrice()

var dividendValue = 0
var tokenBalance = 0

function updateTransactionHistory () {
  if (!web3.eth.defaultAccount) {
    return
  }

  $.getJSON('https://api.ethpyramid.io/history.php?address=' + web3.eth.defaultAccount, function (data) {
    $('#transaction-history').empty()

    for (let i = 0; i < data.length; i++) {
      let $record = $('<div class="record"/>')

      let date_string = '<span class="time">' + data[i].time.replace(/(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2})/, '$1-$2-$3 $4:$5') + '</span>'

      switch (data[i].method) {
        case 'fund':
          $record.html(date_string + lang.fund.format(data[i].value.toFixed(6), data[i].balance_change.toFixed(6)))
          break
        case 'reinvestDividends':
          $record.html(date_string + lang.reinvest.format(data[i].balance_change.toFixed(6)))
          break
        case 'withdraw':
          $record.html(date_string + lang.withdraw)
          break
        case 'sellMyTokens':
          $record.html(date_string + lang.sold.format((-data[i].balance_change.toFixed(6))))
          break
      }

      $record.prependTo($('#transaction-history'))
    }
  })
}

var currentAccount = null

setInterval(updateTransactionHistory, 1000 * 60 * 5)

function updateData (contract) {
  if (!web3.eth.defaultAccount) {
    $('#metamask-not-logged-in').dimmer('show')
    return
  }

  if (web3.eth.defaultAccount !== currentAccount) {
    currentAccount = web3.eth.defaultAccount
    updateTransactionHistory()
  }

  if ($('#metamask-not-logged-in').hasClass('visible'))
    $('#metamask-not-logged-in').dimmer('hide')

  $('#eth-address').html(web3.eth.defaultAccount)

  contract.balanceOf(web3.eth.defaultAccount, function (e, r) {
    $('.poh-balance').text((r / 1e18 * 1000).toFixed(4) + ' EPY')
    contract.getEtherForTokens(r, function (e, r) {
      let bal = convertWeiToEth(r * 0.9)
      $('.poh-value').text(bal.toFixed(4) + ' ETH')
      $('.poh-value-usd').text('(' + (convertWeiToEth(r * 0.9) * ethPrice).toFixed(4) + ' ' + currency + ')')
      if (tokenBalance !== 0) {
        if (bal > tokenBalance) {
          $('.poh-value').addClass('up').removeClass('down')
          setTimeout(function () {
            $('.poh-value').removeClass('up')
          }, 3000)
        }
        else if (bal < tokenBalance) {
          $('.poh-value').addClass('down').removeClass('up')
          setTimeout(function () {
            $('.poh-value').removeClass('down')
          }, 3000)
        }
      }
      tokenBalance = bal
    })
  })

  contract.buyPrice(function (e, r) {
    let buyPrice = (1 / (convertWeiToEth(r) * .9) / 1000000)
    $('.poh-buy').text(buyPrice.toFixed(6) + ' ETH')
    $('.poh-buy-usd').text('(' + (buyPrice * ethPrice).toFixed(4) + ' ' + currency + ')')
  })

  contract.sellPrice(function (e, r) {
    let sellPrice = convertWeiToEth(r)
    $('.poh-sell').text(sellPrice.toFixed(6) + ' ETH')
    $('.poh-sell-usd').text('(' + (sellPrice * ethPrice).toFixed(4) + ' ' + currency + ')')
  })

  contract.dividends(web3.eth.defaultAccount, function (e, r) {
    let div = convertWeiToEth(r).toFixed(6)

    $('.poh-div').text(div + ' ETH')
    $('.poh-div-usd').text('(' + (convertWeiToEth(r) * ethPrice).toFixed(4) + ' ' + currency + ')')

    if (dividendValue != div) {
      $('.poh-div').fadeTo(100, 0.3, function () { $(this).fadeTo(250, 1.0) })

      dividendValue = div
    }
  })

  web3.eth.getBalance(contract.address, function (e, r) {
    $('.contract-balance').text(convertWeiToEth(r).toFixed(4))
  })

}
