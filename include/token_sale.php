<script type="text/javascript" src="js/quote.js"></script>

<div id="token-sale">
    <div class="ui container center align vertical stripe heading-container">
        <h2><?php __('coins.heading'); ?></h2>
        <div id="quoteDisplay"></div>
        <script>newQuote()</script>
    </div>

    <div class="ui container">
        <div class="ui stackable grid">
            <div class="ui sixteen wide column interface" id="meta-mask-ui">
                <div class="ui stackable grid">
                    <div class="ui five wide column center aligned" id="buy-panel">
                        <div class="inner">
                            <div class="spinning-logo">
                                <img src="images/spinning.gif">
                            </div>

                            <div style="display: none" id="eth-address">Not Set</div>

                            <input type="number" id="purchase-amount" min="0" step="0.01"
                                   placeholder="<?php __('coins.eth-amount'); ?>">
                            <button id="buy-tokens" class='ui primary huge button'><?php __('coins.buy-tokens'); ?></button>

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

                            <a href="#" id="chat-toggle"><?php __('coins.chat.toggle'); ?></a><br>
                            <a href="#" id="history-toggle"><?php __('coins.history.toggle'); ?></a>
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
                            <div class="ui eight wide column">
                                <div class="price-box blue token-balance">
                                    <div class="title"><?php __('coins.epy-balance'); ?></div>
                                    <div class="poh-balance value"></div>
                                </div>
                            </div>
                            <div class="ui eight wide column">
                                <div class="price-box blue">
                                    <div class="title"><?php __('coins.dividends'); ?></div>
                                    <div class="poh-div value"></div>
                                    <div class="poh-div-usd value-usd"></div>
                                </div>
                            </div>
                            <div class="ui sixteen wide column">
                                <div class="price-box green">
                                    <div class="title"><?php __('coins.estimated-value'); ?></div>
                                    <div class="poh-value value"></div>
                                    <div class="poh-value-usd value-usd"></div>
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
                <div class="ui three column stackable grid center aligned methods">
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
                <div id="metamask-not-logged-in" class="ui dimmer">
                    <div class="inner">
                        <h2 class="float-left"><?php __('metamask.plz-login.status'); ?></h2></br>
                        <p><?php __('metamask.plz-login.comment'); ?></p>
                    </div>
                </div>
                <div id="metamask-detecting" class="ui dimmer">
                    <div class="inner">
                        <h2 class="float-left"><?php __('metamask.detecting.status'); ?></h2></br>
                        <p><?php __('metamask.detecting.comment'); ?></p>
                    </div>
                </div>
            </div>
            <div class="ui five wide column chat-box" style="display: none;">
                <iframe src="https://titanembeds.com/embed/408119545379815434?defaultchannel=408119545379815438"
                        height="700" width="100%" frameborder="0"></iframe>
            </div>
        </div>

    </div>

</div>

<script type="text/javascript">
  var default_currency = '<?php echo getDefaultCurrency(); ?>'

  var chaton = false

  $(function () {
    $('#chat-toggle').click(function (e) {
      e.preventDefault()
      chaton = !chaton
      if (chaton) {
        $('.chat-box').show()
        $('.interface').removeClass('sixteen wide').addClass('eleven wide')
      } else {
        $('.chat-box').hide()
        $('.interface').removeClass('eleven wide').addClass('sixteen wide')
      }
    })

    $('#history-toggle').click(function (e) {
      e.preventDefault()
      $('#transaction-history-container').slideToggle()
    })

    $('#metamask-detecting').dimmer({closable: false})
    $('#metamask-not-found').dimmer({closable: false})
    $('#metamask-not-logged-in').dimmer({closable: false})
    $('#metamask-detecting').dimmer('show')
  })
</script>
<script type="text/javascript">
  var lang = {
    fund: "<?php __('coins.history.log.sent-eth'); ?>",
    reinvest: "<?php __('coins.history.log.sent-div'); ?>",
    withdraw: "<?php __('coins.history.log.withdrew'); ?>",
    sold: "<?php __('coins.history.log.sold-epy'); ?>"
  }
</script>
<script type="text/javascript" src="js/poh.js"></script>
