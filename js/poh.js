// CONSTANTS
var contractAddress = '0x2Fa0ac498D01632f959D3C18E38f4390B005e200'
var donationAddress = '0x25dd53e2594735b38a4646f62e5b65b4e4aa42bb'

// GLOBALS
var web3Mode = null
var walletMode = 'metamask'
var currentAddress = null
var keystore = null
var dividendValue = 0
var tokenBalance = 0
var contract = null

var ethPrice = 0
var currency = (typeof default_currency === 'undefined') ? 'USD' : default_currency
var ethPriceTimer = null
var dataTimer = null
var abi = [
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

function copyToClipboard (text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData('Text', text)

  } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    var textarea = document.createElement('textarea')
    textarea.textContent = text
    textarea.style.position = 'fixed'  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea)
    textarea.select()
    try {
      return document.execCommand('copy')  // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn('Copy to clipboard failed.', ex)
      return false
    } finally {
      document.body.removeChild(textarea)
    }
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

function getSeed () {
  useWallet(function (pwDerivedKey) {
    console.log(keystore.getSeed(pwDerivedKey))
  })
}

function generateWallet () {

  if (keystore !== null) {
    if (!confirm(lang.walletGenConfirmation))
      return
  }

  // generate a new BIP32 12-word seed
  var secretSeed = lightwallet.keystore.generateRandomSeed()

  // the seed is stored encrypted by a user-defined password
  var password = prompt(lang.enterPassword)

  lightwallet.keystore.createVault({
    seedPhrase: secretSeed,
    password: password,
    hdPathString: `m/44'/60'/0'/0`,
  }, function (err, ks) {
    if (err) throw err

    keystore = ks

    // Store keystore in local storage
    localStorage.setItem('keystore', keystore.serialize())

    keystore.keyFromPassword(password, function (err, pwDerivedKey) {
      if (err) throw err
      keystore.generateNewAddress(pwDerivedKey, 1)

      var address = keystore.getAddresses()[0]

      $('#wallet-seed').html(secretSeed)
      $('#wallet-address').html(address)
      $('#seed-dimmer').dimmer('show')

      currentAddress = address
      walletMode = 'web'
      updateData(contract)

    })
  })
}

function getPassword (cb) {
  $('#password-prompt').modal('show')

  $('#confirm-tx').off('click')
  $('#confirm-tx').on('click', function () {
    var password = $('#password').val()
    $('#password').val('')

    $('#password-prompt').modal('hide')

    cb(password)
  })
}

function useWallet (cb) {
  getPassword(function (password) {
    keystore.keyFromPassword(password, function (err, pwDerivedKey) {
      if (err) throw err
      cb(pwDerivedKey)
    })
  })
}

function loadWallet () {
  useWallet(function (pwDerivedKey) {
    try {
      keystore.generateNewAddress(pwDerivedKey, 1)
      currentAddress = keystore.getAddresses()[0]
      walletMode = 'web'
      updateData()
    } catch (err) {
      console.log(err)
      alert(lang.incorrectPassword)
    }
  })
}

function recoverWallet () {
  var secretSeed = prompt(lang.enterSeed)

  if (!secretSeed)
    return

  var password = prompt(lang.enterPassword)

  if (!password)
    return

  try {
    lightwallet.keystore.createVault({
      seedPhrase: secretSeed,
      password: password,
      hdPathString: `m/44'/60'/0'/0`,
    }, function (err, ks) {
      if (err) throw err

      keystore = ks

      // Store keystore in local storage
      localStorage.setItem('keystore', keystore.serialize())

      keystore.keyFromPassword(password, function (err, pwDerivedKey) {
        if (err) throw err

        keystore.generateNewAddress(pwDerivedKey, 1)
        currentAddress = keystore.getAddresses()[0]
        walletMode = 'web'
        updateData()
      })
    })
  } catch (err) {
    console.log(err)
    alert(lang.seedInvalid)
  }
}

function detectWeb3 () {
  if ($('#metamask-detecting').hasClass('visible')) {
    $('#metamask-detecting').dimmer('hide')
  }

  if (typeof web3 !== 'undefined') {
    web3js = new Web3(web3.currentProvider)
    web3Mode = 'metamask'
    currentAddress = web3js.eth.accounts[0]
  } else {
    web3js = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/iAuiwox78xdSQSkLkeXB'))
    web3Mode = 'direct'
  }

  var ks = localStorage.getItem('keystore')
  if (ks !== null) {
    keystore = lightwallet.keystore.deserialize(ks)
    $('#unlock-wallet-container').show()
  }

  var contractClass = web3js.eth.contract(abi)
  contract = contractClass.at(contractAddress)

  updateData()
}

window.addEventListener('load', function () {

  setTimeout(detectWeb3, 500)

  function call (address, method, amount) {
    web3js.eth.getTransactionCount(currentAddress, function (err, nonce) {
      if (err) throw err

      web3js.eth.getGasPrice(function (err, gasPrice) {
        if (err) throw err

        // Median network gas price is too high most the time, divide by 10 or minimum 1 gwei
        gasPrice = Math.max(gasPrice / 10, 1000000000)

        var tx = {
          'from': currentAddress,
          'to': address,
          'value': '0x' + amount.toString(16),
          'gasPrice': '0x' + (gasPrice).toString(16),
          'gasLimit': '0x' + (100000).toString(16),
          'nonce': nonce,
        }

        var rawTx = lightwallet.txutils.functionTx(abi, method, {}, tx)

        useWallet(function (pwDerivedKey) {
          try {
            var signedTx = '0x' + lightwallet.signing.signTx(keystore, pwDerivedKey, rawTx, currentAddress)
          } catch (err) {
            console.log(err)
            alert(lang.incorrectPassword)
            return
          }
          web3js.eth.sendRawTransaction(signedTx, function (err, hash) {
            if (err) {
              alert(err.message.substring(0, err.message.indexOf('\n')))
              throw err
            }

            $('#tx-hash').empty().append($('<a target="_blank" href="https://etherscan.io/tx/' + hash + '">' + hash + '</a>'))
            $('#tx-confirmation').modal('show')
          })
        })
      })
    })
  }

  function fund (address, amount) {
    if (walletMode === 'metamask') {
      contract.fund({
        value: convertEthToWei(amount)
      }, function (e, r) {
        console.log(e, r)
      })
    } else if (walletMode === 'web') {
      call(address, 'fund', convertEthToWei(amount))
    }
  }

  function sell () {
    if (walletMode === 'metamask') {
      contract.sellMyTokens(function (e, r) {
        console.log(e, r)
      })
    } else if (walletMode === 'web') {
      call(contractAddress, 'sellMyTokens', 0)
    }
  }

  function reinvest () {
    if (walletMode === 'metamask') {
      contract.reinvestDividends(function (e, r) {
        console.log(e, r)
      })
    } else if (walletMode === 'web') {
      call(contractAddress, 'reinvestDividends', 0)
    }
  }

  function withdraw () {
    if (walletMode === 'metamask') {
      contract.withdraw(function (e, r) {
        console.log(e, r)
      })
    } else if (walletMode === 'web') {
      call(contractAddress, 'withdraw', 0)
    }
  }

  // Buy token click handler
  $('#buy-tokens').click(function () {
    let amount = $('#purchase-amount').val().trim()
    if (amount <= 0 || !isFinite(amount) || amount === '') {
      $('#purchase-amount').addClass('error').popup({
        title: lang.invalidInput,
        content: Lang.invalidInputResponse
      }).popup('show')
    } else {
      $('#purchase-amount').removeClass('error').popup('destroy')
      fund(contractAddress, amount)
    }
  })

  $('#close-seed').click(function () {
    if ($('#seed-dimmer').hasClass('visible')) {
      $('#seed-dimmer').dimmer('hide')
      $('#wallet-dimmer').dimmer('show')
    }
  })

  $('#generate-wallet').click(function () {
    generateWallet()
  })

  $('#unlock-wallet').click(function () {
    loadWallet()
  })

  $('#recover-wallet').click(function () {
    recoverWallet()
  })

  $('#send-action').click(function () {
    var amount = $('#send-amount').val().trim()
    if (amount <= 0 || !isFinite(amount) || amount === '') {
      $('#send-amount').addClass('error').popup({
        title: lang.invalidInput,
        content: Lang.invalidInputResponse
      }).popup('show')
    } else {
      var address = $('#send-address').val()
      if (!address.match(/^0x[0-9a-fA-F]{40}$/)) {
        $('#send-address').addClass('error').popup({
          title: lang.invalidInput,
          content: Lang.invalidInputResponse
        }).popup('show')
      } else {
        $('#send-amount').removeClass('error').popup('destroy')
        $('#send-address').removeClass('error').popup('destroy')
        fund(address, amount)
      }
    }
  })

  $('#donate-action').click(function () {
    let amount = $('#donate-amount').val().trim()
    if (amount <= 0 || !isFinite(amount) || amount === '') {
      $('#donate-amount').addClass('error').popup({
        title: lang.invalidInput,
        content: Lang.invalidInputResponse
      }).popup('show')
    } else {
      $('#donate-amount').removeClass('error').popup('destroy')
      fund(donationAddress, amount)
    }
  })

  $('#wallet-open').click(function (e) {
    e.preventDefault()
    $('#wallet-dimmer').dimmer('show')
  })

  $('#wallet-close').click(function (e) {
    e.preventDefault()
    $('#wallet-dimmer').dimmer('hide')

    $('#exported-seed').html('').slideUp()
    $('#exported-private-key').val('').slideUp()
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

  $('#password-prompt').modal({closable: false})

  $('#cancel-tx').click(function () {
    $('#password-prompt').modal('hide')
  })

  $('#password').keyup(function (e) {
    var code = e.keyCode || e.which
    if (code === 13) {
      $('#confirm-tx').click()
    }
  })

  $('#delete-wallet').click(function (e) {
    e.preventDefault()

    if (!confirm(lang.deleteWalletConfirmation))
      return

    useWallet(function (pwDerivedKey) {
      if (!keystore.isDerivedKeyCorrect(pwDerivedKey)) {
        alert(lang.incorrectPassword)
      }
      else {
        $('#wallet-close').click()
        keystore = null
        localStorage.removeItem('keystore')
        currentAddress = null
        updateData()
      }
    })
  })

  $('#export-private-key').click(function (e) {
    e.preventDefault()

    useWallet(function (pwDerivedKey) {
      var key = keystore.exportPrivateKey(currentAddress, pwDerivedKey)
      $('#exported-seed').html('').slideUp()
      $('#exported-private-key').val('0x' + key).slideDown()
    })
  })

  $('#export-seed').click(function (e) {
    e.preventDefault()

    useWallet(function (pwDerivedKey) {
      var seed = keystore.getSeed(pwDerivedKey)
      $('#exported-private-key').val('').slideUp()
      $('#exported-seed').html(seed).slideDown()
    })
  })

  $('#copy-eth-address').click(function (e) {
    e.preventDefault()
    copyToClipboard(currentAddress)

    $('#copy-eth-address').popup({
      content: lang.copiedToClip,
      hoverable: true
    }).popup('show')

  }).on('mouseout', function () {
    $('#copy-eth-address').popup('destroy')
  })
})

function updateTransactionHistory () {
  if (!currentAddress) {
    return
  }

  $.getJSON('https://api.ethpyramid.io/history.php?address=' + currentAddress, function (data) {
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

function updateData () {
  clearTimeout(dataTimer)

  var loggedIn = false

  if (walletMode === 'metamask') {
    loggedIn = typeof web3js.eth.defaultAccount !== 'undefined' && web3js.eth.defaultAccount !== null
    currentAddress = web3js.eth.defaultAccount
    $('#meta-mask-ui').removeClass('wallet-web').addClass('wallet-mm')
  } else if (walletMode === 'web') {
    loggedIn = currentAddress !== null
    $('#meta-mask-ui').addClass('wallet-web').removeClass('wallet-mm')
  }

  if (currentAddress !== null) {
    $('#eth-address').html(currentAddress)
    $('#eth-public-address a.etherscan-link').attr('href', 'https://etherscan.io/address/' + currentAddress).html(currentAddress)
  } else {
    $('#eth-address').html('Not Set')
  }

  if (loggedIn) {
    updateTransactionHistory()

    $('#meta-mask-ui').removeClass('logged-out').addClass('logged-in')

    contract.balanceOf(currentAddress, function (e, r) {
      const tokenAmount = (r / 1e18 * 1000);
      $('.poh-balance').text( tokenAmount.toFixed(4) + ' EPY')
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

    contract.dividends(currentAddress, function (e, r) {
      let div = convertWeiToEth(r).toFixed(6)

      $('.poh-div').text(div + ' ETH')
      $('.poh-div-usd').text('(' + (convertWeiToEth(r) * ethPrice).toFixed(4) + ' ' + currency + ')')

      if (dividendValue != div) {
        $('.poh-div').fadeTo(100, 0.3, function () { $(this).fadeTo(250, 1.0) })

        dividendValue = div
      }
    })

    web3js.eth.getBalance(currentAddress, function (e, r) {
		// We only want to show six DP in a wallet, consistent with MetaMask
      $('.address-balance').text(convertWeiToEth(r).toFixed(6) + ' ETH')
    })
  } else {
    $('#meta-mask-ui').addClass('logged-out').removeClass('logged-in')
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

  dataTimer = setTimeout(function () {
    updateData()
  }, web3Mode === 'metamask' ? 1000 : 5000)
}
