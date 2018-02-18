<script type="text/javascript" src="js/quote.js"></script>

<div id="token-sale">
    <div class="ui container center align vertical stripe heading-container">
        <h2><?php __('coins.heading'); ?></h2>
        <div id="quoteDisplay"></div>
        <script>newQuote()</script>
    </div>

    <div class="ui container">
        <div class="ui stackable grid">
            <div class="ui sixteen wide column interface logged-out" id="meta-mask-ui">
                <div class="ui stackable grid">
                    <div class="ui five wide column center aligned" id="buy-panel">
                        <div class="inner">
                            <div class="spinning-logo">
                                <img src="images/spinning.gif">
                            </div>


                            <input type="number" id="purchase-amount" min="0" step="0.01" class="when-logged-in input-amount"
                                   placeholder="<?php __('coins.eth-amount'); ?>">

                            <div class="when-logged-in" id="address-balance">
                                Balance: <span class="address-balance"></span>
                            </div>

                            <button id="buy-tokens"
                                    class='ui primary huge button when-logged-in'><?php __('coins.buy-tokens'); ?></button>

                            <div id="currency-selector">
								<?php __('coins.select-currency'); ?>
                                <select id="currency">
                                    <option>USD</option>
                                    <option>AUD</option>
                                    <option>BRL</option>
                                    <option>CAD</option>
                                    <option>CHF</option>
                                    <option>CLP</option>
                                    <option>CNY</option>
                                    <option>CZK</option>
                                    <option>DKK</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                    <option>HKD</option>
                                    <option>HUF</option>
                                    <option>IDR</option>
                                    <option>ILS</option>
                                    <option>INR</option>
                                    <option>JPY</option>
                                    <option>KRW</option>
                                    <option>MXN</option>
                                    <option>MYR</option>
                                    <option>NOK</option>
                                    <option>NZD</option>
                                    <option>PHP</option>
                                    <option>PKR</option>
                                    <option>PLN</option>
                                    <option>RUB</option>
                                    <option>SEK</option>
                                    <option>SGD</option>
                                    <option>THB</option>
                                    <option>TRY</option>
                                    <option>TWD</option>
                                    <option>ZAR</option>
                                </select>
                            </div>

                            <a href="#" id="history-toggle"
                               class="when-logged-in"><?php __('coins.history.toggle'); ?></a>

                            <div class="when-logged-in">
                                <a href="#" id="donate-open"><?php __('donate.open-button'); ?></a>
                            </div>

                            <div class="when-wallet-web">
                                <a href="#" id="wallet-open">Wallet Management</a>
                            </div>
                        </div>
                    </div>
                    <div class="ui eleven wide column" id="value-panel">
                        <div class="ui stackable relaxed grid">
                            <div class="ui eight wide column">
                                <div class="price-box">
                                    <div class="title"><?php __('coins.buy-price'); ?></div>
                                    <div class="poh-buy value"></div>
                                    <div class="poh-buy-usd value-usd"></div>
                                </div>
                            </div>
                            <div class="ui eight wide column">
                                <div class="price-box">
                                    <div class="title"><?php __('coins.sell-price'); ?></div>
                                    <div class="poh-sell value"></div>
                                    <div class="poh-sell-usd value-usd"></div>
                                </div>
                            </div>
                            <div class="ui eight wide column when-logged-in">
                                <div class="price-box blue token-balance">
                                    <div class="title"><?php __('coins.epy-balance'); ?></div>
                                    <div class="poh-balance value"></div>
                                </div>
                            </div>
                            <div class="ui eight wide column when-logged-in">
                                <div class="price-box blue">
                                    <div class="title"><?php __('coins.dividends'); ?></div>
                                    <div class="poh-div value"></div>
                                    <div class="poh-div-usd value-usd"></div>
                                </div>
                            </div>
                            <div class="ui sixteen wide column when-logged-in">
                                <div class="price-box green">
                                    <div class="title"><?php __('coins.estimated-value'); ?></div>
                                    <div class="poh-value value"></div>
                                    <div class="poh-value-usd value-usd"></div>
                                </div>
                            </div>
                            <div class="ui sixteen wide column when-logged-out">
                                <div class="login-box green">
                                    <div class="value">Not Logged In</div>
                                    <div class="value-usd">
                                        <p>Cannot retrieve your balances because you are not logged in.
                                            If you are using MetaMask, login using the MetaMask UI. Alternatively, you
                                            may use our in-browser wallet below.</p>
                                        <p><strong>WARNING</strong> this feature is in BETA, use at your own risk.</p>
                                    </div>
                                    <div class="ui equal width stackable grid login-options">
                                        <div class="ui column">
                                            <button id="generate-wallet" class="ui button large primary">Generate Wallet
                                            </button>
                                            <p>
                                                Generates and displays a wallet seed. The supplied password is used to
                                                encrypt the wallet and store it securely.
                                            </p>
                                        </div>
                                        <div class="ui column" id="unlock-wallet-container">
                                            <button id="unlock-wallet" class="ui button large secondary">Unlock Wallet
                                            </button>
                                            <p>
                                                Unlocks the wallet currently encrypted and stored in this browser.
                                            </p>
                                        </div>
                                        <div class="ui column">
                                            <button id="recover-wallet" class="ui button large">Recover Wallet
                                            </button>
                                            <p>
                                                Recovers a wallet from the supplied seed. The supplied password is used
                                                to encrypt the wallet and store it securely.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ui ten wide column traffic-message">
                                <i class="fas fa-exclamation-circle"></i>
								<?php __('coins.network-notice'); ?>
                            </div>
                            <div class="ui six wide column contract-balance-container">
								<?php __('coins.contract-balance'); ?>
                                <span class="contract-balance">0.00</span> ETH
                            </div>
                            <div class="ui sixteen wide column when-logged-in" id="eth-address-container">
								<strong>Account:</strong> <span id="eth-address">Not Set</span>
                            </div>
                            <div class="ui sixteen wide column">
                                <div id="transaction-history-container" style="display: none">
                                    <h2><?php __('coins.history.heading'); ?></h2>
                                    <div id="transaction-history">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ui three column stackable grid center aligned methods when-logged-in">
                    <div class="column">
                        <button id="sell-tokens-btn"
                                class='ui method button big secondary'><?php __('coins.actions.cash-out.button'); ?></button>
                        <p><?php __('coins.actions.cash-out.comment'); ?></p>
                    </div>
                    <div class="column">
                        <button id="reinvest-btn"
                                class='ui method button big secondary'><?php __('coins.actions.pay-divs.button'); ?></button>
                        <p><?php __('coins.actions.pay-divs.comment'); ?></p>
                    </div>
                    <div class="column">
                        <button id="withdraw-btn"
                                class='ui method button big secondary'><?php __('coins.actions.withdraw.button'); ?></button>
                        <p><?php __('coins.actions.withdraw.comment'); ?></p>
                    </div>
                </div>
                <div id="metamask-not-found" class="ui dimmer">
                    <div class="inner">
                        <h2 class="float-left"><?php __('metamask.not-found.status'); ?></h2></br>
                        <p><?php __('metamask.not-found.comment'); ?></p>
                    </div>
                </div>
                <div id="metamask-detecting" class="ui dimmer">
                    <div class="inner">
                        <h2 class="float-left"><?php __('metamask.detecting.status'); ?></h2></br>
                        <p><?php __('metamask.detecting.comment'); ?></p>
                    </div>
                </div>
                <div id="seed-dimmer" class="ui dimmer">
                    <div class="inner">
                        <h2 class="float-left">Wallet Seed</h2></br>
                        <p><strong>WARNING</strong> This is your wallet's seed. If you lose this, you lose access to
                            your ETH and any EPY along with it. This is only ever stored locally in your web browser.
                            If you clear your browser data, generate a new wallet over an existing, or your computer
                            dies, and you don't have this saved anywhere, nobody can recover this for you.
                            Seriously, save it somewhere safe.</p>
                        <textarea id="wallet-seed">

                        </textarea>
                        <button class="ui button huge primary" id="close-seed">I Have Stored My Seed Somewhere Safe
                        </button>
                    </div>
                </div>
                <div id="wallet-dimmer" class="ui dimmer">
                    <div class="inner">
                        <h2>Wallet Management</h2>
                        <h4>Balance: <span class="address-balance"></span></h4>
                        <hr/>
                        <div class="ui equal width stackable grid">
                            <div class="ui column">
                                <h3>Send</h3>
                                <p>Send ETH to another address.</p>
                                <div class="center aligned actions">
                                    <input type="text" id="send-address" class="input-amount" placeholder="Destination address"/>
                                    <input type="number" id="send-amount" min="0" step="0.1" class="input-amount"
                                           placeholder="<?php __('coins.eth-amount'); ?>"/>
                                    <button id="send-action"
                                            class="ui primary huge button">Send ETH</button>
                                </div>
                            </div>
                            <div class="ui column">
                                <h3>Receive</h3>
                                <p>
                                    To deposit ETH into this wallet, send ETH to your public address:
                                </p>
                                <p id="eth-public-address">
                                  <a href="#" class="etherscan-link" target="_blank"></a> <a href="#" id="copy-eth-address"><i class="fas fa-copy"></i></a>
                                </p>
                                <h3>Actions</h3>
                                <p>
                                    <a id="export-seed" href="#" class="ui button small">Export Seed</a>
                                    <a id="export-private-key" href="#" class="ui button small">Export Private Key</a>
                                    <a id="delete-wallet" href="#" class="ui button small">Delete Wallet</a>
                                </p>
								<textarea id="exported-seed"></textarea>
                                <input type="text" id="exported-private-key">
                            </div>
                        </div>
                        <div class="ui center aligned" style="margin-top: 5em">
                            <a href="#" id="wallet-close" class="ui button huge secondary">Close</a>
                        </div>
                    </div>
                </div>
                <div id="donate-dimmer" class="ui dimmer">
                    <div class="inner">
                        <h2 class="float-left"><?php __('donate.heading'); ?></h2></br>
                        <p><?php __('donate.description'); ?></p>
                        <div class="center aligned actions">
                            <input type="number" id="donate-amount" min="0" step="0.1" class="input-amount"
                                   placeholder="<?php __('coins.eth-amount'); ?>"/>
                            <button id="donate-action"
                                    class="ui primary huge button"><?php __('donate.action-button'); ?></button>
                            <button id="donate-close"
                                    class="ui huge default button"><?php __('donate.close-button'); ?></button>
                        </div>
                        <p><?php __('donate.address'); ?></p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

<div id="tx-confirmation" class="ui modal">
    <div class="header">
        Transaction Submitted
    </div>
    <div class="content">
        <p>
            Transaction successfully submitted to network. Transaction hash: <span id="tx-hash"></span>
        </p>
    </div>
</div>

<div id="password-prompt" class="ui modal">
    <div class="header">
        Enter your wallet password
    </div>
    <div class="ui content form">
        <div>
            <input type="password" id="password"/>
        </div>
        <div style="padding: 1em;">
            <button id="confirm-tx" class="ui button primary" style="float: right;">Confirm</button>
            <button id="cancel-tx" class="ui button">Cancel</button>
        </div>
    </div>
</div>

<script type="text/javascript">
  var default_currency = '<?php echo getDefaultCurrency(); ?>'

  $(function () {
    $('#history-toggle').click(function (e) {
      e.preventDefault()
      $('#transaction-history-container').slideToggle()
    })
  })

  $('#metamask-detecting').dimmer({closable: false})
  $('#metamask-not-found').dimmer({closable: false})
  $('#donate-dimmer').dimmer({closable: false})
  $('#seed-dimmer').dimmer({closable: false})
  $('#wallet-dimmer').dimmer({closable: false})

  $('#metamask-detecting').dimmer('show')
</script>

<script type="text/javascript">
  var lang = {
    fund: "<?php __('coins.history.log.sent-eth'); ?>",
    reinvest: "<?php __('coins.history.log.sent-div'); ?>",
    withdraw: "<?php __('coins.history.log.withdrew'); ?>",
    sold: "<?php __('coins.history.log.sold-epy'); ?>"
  }
</script>

<script type="text/javascript" src="js/web3.js"></script>
<script type="text/javascript" src="js/lightwallet.min.js"></script>
<script type="text/javascript" src="js/poh.js"></script>
