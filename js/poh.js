var contractAddress = '0x2Fa0ac498D01632f959D3C18E38f4390B005e200';

window.addEventListener('load', function () {

<<<<<<< HEAD
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider)
    } else {
        console.log('No web3? You should consider trying MetaMask!');
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        $('#buy-panel').hide();
        $('#metamask-not-found').show()
    }
=======
  $('#metamask-detecting').dimmer('hide')

  if (typeof web3 !== 'undefined') {
    web3js = new Web3(web3.currentProvider)
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    $('#metamask-not-found').dimmer('show')
  }
>>>>>>> master

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
    ];

    let contractClass = web3.eth.contract(abi);
    let contract = contractClass.at(contractAddress);

    web3.eth.defaultAccount = web3.eth.accounts[0];
    updateData(contract);

    // Now you can start your app & access web3 freely:
    setInterval(function () {
        updateData(contract)
    }, 1000);

    $('#buy-eos-tokens').click(function () {
        let amount = $('#purchase-amount').val();
        if (amount == 0) {
            alert('Error: You can\'t fund 0 ETH. The value input is above the button.')
        } else {
            contract.fund({
                value: convertEthToWei(amount)
            }, function (e, r) {
                console.log(e, r)
            })
        }
<<<<<<< HEAD
    });

    $('#sell-tokens-btn').click(function () {
        contract.sellMyTokens(function (e, r) {
            console.log(e, r)
        })
    });

    $('#reinvest-btn').click(function () {
        contract.reinvestDividends(function (e, r) {
            console.log(e, r)
        })
    });

    $('#withdraw-btn').click(function () {
        contract.withdraw(function (e, r) {
            console.log(e, r)
        })
    });

    $('#sell-tokens-btn-m').click(function () {
        contract.sellMyTokens(function (e, r) {
            console.log(e, r)
        })
    });

    $('#reinvest-btn-m').click(function () {
        contract.reinvestDividends(function (e, r) {
            console.log(e, r)
        });
    });

    $('#withdraw-btn-m').click(function () {
        contract.withdraw(function (e, r) {
            console.log(e, r)
        })
    })
});
=======
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
>>>>>>> master

function convertEthToWei (e) {
  return 1e18 * e
}

function convertWeiToEth (e) {
  return e / 1e18
}

let ethPrice = 0;
let currency = (typeof default_currency == 'undefined') ? 'USD' : default_currency;
let timer = null;

function updateEthPrice () {
    clearTimeout(timer);
  $.getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=' + currency, function (result) {
      let eth = result[0];
      ethPrice = parseFloat(eth['price_' + currency.toLowerCase()]);
      timer = setTimeout(updateEthPrice, 10000);
  })
}

$(function () {

    $('#currency').val(currency);

    $('#currency').change(function () {
        currency = $(this).val();
        updateEthPrice()
    });

<<<<<<< HEAD
    let chaton = false;

    $('#chat-toggle').click(function (e) {
        e.preventDefault();
        if (chaton) {
            $('#token-sale').removeClass('chat').addClass('nochat')
        } else {
            $('#token-sale').removeClass('nochat').addClass('chat')
        }
        chaton = !chaton
    });
});
=======
})
>>>>>>> master

updateEthPrice();

let dividendValue = 0;
let tokenBalance = 0;

function updateData (contract) {
  if (!web3.eth.defaultAccount) {
<<<<<<< HEAD
      $('#buy-panel').hide();
      $('#metamask-not-logged-in').show();
    return
  }

    $('#buy-panel').show();
    $('#metamask-not-logged-in').hide();


    $('#eth-address').html(web3.eth.defaultAccount);

    contract.balanceOf(web3.eth.defaultAccount, function (e, r) {
        $('.current-sale .poh-balance').text((r / 1e18 * 1000).toFixed(4) + ' EPY');
        contract.getEtherForTokens(r, function (e, r) {
            let bal = convertWeiToEth(r * 0.9)
            $('.current-sale .poh-value').text(bal.toFixed(4) + ' ETH');
            $('.current-sale .usd-value').text('(' + (convertWeiToEth(r * 0.9) * ethPrice).toFixed(4) + ' ' + currency + ')');
            if (tokenBalance !== 0) {
                if (bal > tokenBalance) {
                    $('.current-sale .poh-value').addClass('up').removeClass('down');
                    setTimeout(function () {
                        $('.current-sale .poh-value').removeClass('up')
                    }, 2000)
                }
                else if (bal < tokenBalance) {
                    $('.current-sale .poh-value').addClass('down').removeClass('up');
                    setTimeout(function () {
                        $('.current-sale .poh-value').removeClass('down')
                    }, 2000)
                }
            }
            tokenBalance = bal
        })
    });

    contract.buyPrice(function (e, r) {
        let buyPrice = (1 / (convertWeiToEth(r) * .9) / 1000000);
        $('.current-sale .poh-buy').text(buyPrice.toFixed(6) + ' ETH');
        $('.current-sale .usd-buy').text('(' + (buyPrice * ethPrice).toFixed(4) + ' ' + currency + ')')
    });

    contract.sellPrice(function (e, r) {
        let sellPrice = convertWeiToEth(r);
        $('.current-sale .poh-sell').text(sellPrice.toFixed(6) + ' ETH');
        $('.current-sale .usd-sell').text('(' + (sellPrice * ethPrice).toFixed(4) + ' ' + currency + ')')
    });

    contract.dividends(web3.eth.defaultAccount, function (e, r) {
        let div = convertWeiToEth(r).toFixed(6);

        $('.current-sale .poh-div').text(div + ' ETH');
        $('.current-sale .usd-div').text('(' + (convertWeiToEth(r) * ethPrice).toFixed(4) + ' ' + currency + ')')

        if (dividendValue != div) {
            $('.current-sale .poh-div').fadeTo(100, 0.3, function () {
                $(this).fadeTo(250, 1.0)
            });

            dividendValue = div
        }
    });

=======
    $('#metamask-not-logged-in').dimmer('show')
    return
  }

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
>>>>>>> master


  web3.eth.getBalance(contract.address, function (e, r) {
    $('.contract-balance').text(convertWeiToEth(r).toFixed(4))
  })

}
