// CONSTANTS
var contractAddress = '0x2Fa0ac498D01632f959D3C18E38f4390B005e200'
var donationAddress = '0x25dd53e2594735b38a4646f62e5b65b4e4aa42bb'

// GLOBALS
var web3Mode = null
var currentAddress = null
var keystore = null
var currentAccount = null
var dividendValue = 0
var tokenBalance = 0

var ethPrice = 0
var currency = (typeof default_currency === 'undefined') ? 'USD' : default_currency
var ethPriceTimer = null

// UTILITY FUNCTIONS
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

function updateEthPrice () {
  clearTimeout(ethPriceTimer)
  $.getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=' + currency, function (result) {
    var eth = result[0]
    ethPrice = parseFloat(eth['price_' + currency.toLowerCase()])
    ethPriceTimer = setTimeout(updateEthPrice, 10000)
  })
}

function convertEthToWei (e) {
  return 1e18 * e
}

function convertWeiToEth (e) {
  return e / 1e18
}

function generateWallet () {
  // generate a new BIP32 12-word seed
  var secretSeed = lightwallet.keystore.generateRandomSeed()

  // the seed is stored encrypted by a user-defined password
  var password = prompt('Enter password for encryption', 'password')

  lightwallet.keystore.createVault({
    seedPhrase: secretSeed,
    password: password,
    hdPathString: `m/44'/60'/0'/0`,
  }, function (err, ks) {
    if (err) throw err

    keystore = ks

    keystore.passwordProvider = function (callback) {
      var pw = prompt('Please enter password', 'Password')
      callback(null, pw)
    }

    // Store keystore in local storage
    localStorage.setItem('keystore', keystore.serialize())

    useWallet(function (pwDerivedKey) {
      keystore.generateNewAddress(pwDerivedKey, 1)

      var address = keystore.getAddresses()[0]

      $('#wallet-seed').html(secretSeed)
      $('#wallet-address').html(address)
      $('#seed-dimmer').dimmer('show')

      web3js.eth.defaultAccount = address
    })
  })
}

function useWallet (cb) {
  var password = prompt('Enter password for encryption')
  keystore.keyFromPassword(password, function (err, pwDerivedKey) {
    if (err) throw err
    cb(pwDerivedKey)
  })
}

function loadWallet () {
  useWallet(function (pwDerivedKey) {
    keystore.generateNewAddress(pwDerivedKey, 1)
    web3js.eth.defaultAccount = keystore.getAddresses()[0]
  })
}

function detectWeb3 () {
  if ($('#metamask-detecting').hasClass('visible')) {
    $('#metamask-detecting').dimmer('hide')
  }

  if (typeof web !== 'undefined') {
    web3js = new Web3(web3.currentProvider)
    web3Mode = 'metamask'
  } else {
    web3js = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/iAuiwox78xdSQSkLkeXB'))
    web3Mode = 'direct'

    var ks = localStorage.getItem('keystore')
    if (ks !== null) {
      keystore = lightwallet.keystore.deserialize(ks)
      $('#unlock-wallet').show()
    }
  }
}

window.addEventListener('load', function () {

  detectWeb3()

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

  function call (address, method, amount) {
    web3js.eth.getTransactionCount(currentAccount, function (err, nonce) {
      if (err) throw err

      web3js.eth.getGasPrice(function (err, gasPrice) {
        if (err) throw err

        var tx = {
          'from': currentAccount,
          'to': address,
          'value': '0x' + amount.toString(16),
          'gasPrice': '0x' + (gasPrice / 5).toString(16),
          'gasLimit': '0x' + (100000).toString(16),
          'nonce': nonce,
        }

        console.log(tx)

        var rawTx = lightwallet.txutils.functionTx(abi, method, {}, tx)

        useWallet(function (pwDerivedKey) {
          var signedTx = '0x' + lightwallet.signing.signTx(keystore, pwDerivedKey, rawTx, currentAccount)
          web3js.eth.sendRawTransaction(signedTx, function (err, hash) {
            alert('Transaction successful. Hash: ' + hash)
          })
        })
      })
    })
  }

  function fund (address, amount) {
    if (web3Mode === 'metamask') {
      contract.fund({
        value: convertEthToWei(amount)
      }, function (e, r) {
        console.log(e, r)
      })
    } else if (web3Mode === 'direct') {
      call(address, 'fund', convertEthToWei(amount))
    }
  }

  function sell (address) {
    if (web3Mode === 'metamask') {
      contract.sellMyTokens(function (e, r) {
        console.log(e, r)
      })
    } else if (web3Mode === 'direct') {
      call(address, 'sellMyTokens', 0)
    }
  }

  function reinvest (address) {
    if (web3Mode === 'metamask') {
      contract.reinvestDividends(function (e, r) {
        console.log(e, r)
      })
    } else if (web3Mode === 'direct') {
      call(address, 'reinvestDividends', 0)
    }
  }

  function withdraw (address) {
    if (web3Mode === 'metamask') {
      contract.withdraw(function (e, r) {
        console.log(e, r)
      })
    } else if (web3Mode === 'direct') {
      call(address, 'withdraw', 0)
    }
  }

  var contractClass = web3js.eth.contract(abi)
  var contract = contractClass.at(contractAddress)

  web3js.eth.defaultAccount = web3js.eth.accounts[0]
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
      fund(contractAddress, amount)
    }
  })

  $('#close-seed').click(function () {
    $('#seed-dimmer').dimmer('hide')
  })

  $('#generate-wallet').click(function () {
    generateWallet()
  })

  $('#unlock-wallet').click(function () {
    loadWallet()
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
      fund(donationAddress, amount)
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
    sell()
  })

  // Reinvest click handler
  $('#reinvest-btn').click(function () {
    reinvest()
  })

  // Withdraw click handler
  $('#withdraw-btn').click(function () {
    withdraw()
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

  $('#currency').val(currency)

  $('#currency').change(function () {
    currency = $(this).val()
    updateEthPrice()
  })

  updateEthPrice()
  setInterval(updateTransactionHistory, 1000 * 60 * 5)
})

function updateTransactionHistory () {
  if (!web3js.eth.defaultAccount) {
    return
  }

  $.getJSON('https://api.ethpyramid.io/history.php?address=' + web3js.eth.defaultAccount, function (data) {
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

function updateData (contract) {
  var logged_in = web3js.eth.defaultAccount ? true : false

  if (logged_in) {
    if (web3js.eth.defaultAccount !== currentAccount) {
      currentAccount = web3js.eth.defaultAccount
      updateTransactionHistory()
    }

    $('.when-logged-out').hide()
    $('.when-logged-in').show()
  } else {
    $('.when-logged-in').hide()
    $('.when-logged-out').show()
  }

  if (currentAddress != web3js.eth.defaultAccount) {
    $('#eth-address').html(web3js.eth.defaultAccount)
    currentAddress = web3js.eth.defaultAccount
  }

  if (logged_in) {
    contract.balanceOf(web3js.eth.defaultAccount, function (e, r) {
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

    contract.dividends(web3js.eth.defaultAccount, function (e, r) {
      let div = convertWeiToEth(r).toFixed(6)

      $('.poh-div').text(div + ' ETH')
      $('.poh-div-usd').text('(' + (convertWeiToEth(r) * ethPrice).toFixed(4) + ' ' + currency + ')')

      if (dividendValue != div) {
        $('.poh-div').fadeTo(100, 0.3, function () { $(this).fadeTo(250, 1.0) })

        dividendValue = div
      }
    })
  }

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

  web3js.eth.getBalance(contract.address, function (e, r) {
    $('.contract-balance').text(convertWeiToEth(r).toFixed(4))
  })

}
