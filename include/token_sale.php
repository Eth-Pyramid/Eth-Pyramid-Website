<script type="text/javascript" src="js/quote.js"></script>

<div id="token-sale">
    <div class="ui container center align vertical stripe heading-container">
        <h2><?php __('Purchase EthPyramid Tokens'); ?></h2>
        <div id="quoteDisplay"></div>
        <script>newQuote()</script>
    </div>

    <div class="ui container">
        <div class="ui stackable grid">
            <div class="ui sixteen wide column interface">
                <div class="ui stackable grid">
                    <div class="ui five wide column center aligned" id="buy-panel">
                        <div class="inner">
                            <div class="spinning-logo">
                                <img src="images/spinning.gif">
                            </div>

                            <input type="number" id="purchase-amount"
                                   placeholder="<?php __('Amount in ETH (e.g. 0.5)'); ?>">
                            <button id="buy-tokens" class='ui primary huge button'><?php __('Buy Tokens'); ?></button>

                            <div id="currency-selector">
								<?php __('Select your currency:'); ?>
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

                            <a href="#" class="ui button" id="chat-toggle"><?php __('Toggle Chat'); ?></a>
                        </div>
                    </div>
                    <div class="ui eleven wide column" id="value-panel">
                        <div class="ui stackable relaxed grid">
                            <div class="ui eight wide column">
                                <div class="price-box">
                                    <div class="title"><?php __('Buy Price'); ?></div>
                                    <div class="poh-buy value"></div>
                                    <div class="poh-buy-usd value-usd"></div>
                                </div>
                            </div>
                            <div class="ui eight wide column">
                                <div class="price-box">
                                    <div class="title"><?php __('Sell Price'); ?></div>
                                    <div class="poh-sell value"></div>
                                    <div class="poh-sell-usd value-usd"></div>
                                </div>
                            </div>
                            <div class="ui eight wide column">
                                <div class="price-box">
                                    <div class="title"><?php __('EthPyramid Token Balance:'); ?></div>
                                    <div class="poh-balance value"></div>
                                </div>
                            </div>
                            <div class="ui eight wide column">
                                <div class="price-box">
                                    <div class="title"><?php __('Dividends:'); ?></div>
                                    <div class="poh-div value"></div>
                                    <div class="poh-div-usd value-usd"></div>
                                </div>
                            </div>
                            <div class="ui sixteen wide column">
                                <div class="price-box">
                                    <div class="title"><?php __('Estimated Value of Tokens:'); ?></div>
                                    <div class="poh-value value"></div>
                                    <div class="poh-value-usd value-usd"></div>
                                </div>
                            </div>
                            <div class="ui sixteen wide column">
                                <div class="traffic-message">
                                    <i class="alert-icon"></i><?php __('Depending on the Ethereum network traffic, figures may be delayed.'); ?>
                                </div>
                            </div>
                            <div class="ui sixteen wide column contract-balance-container">
								<?php __('Contract Balance:'); ?>
                                <span class="contract-balance">0.00</span> ETH
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ui three column stackable grid center aligned methods">
                    <div class="column">
                        <button id="sell-tokens-btn"
                                class='ui method button big secondary'><?php __('Sell Tokens'); ?></button>
                        <p><?php __('Your tokens will be sold at the sell-price and will be converted into Ether dividends.'); ?></p>
                    </div>
                    <div class="column">
                        <button id="reinvest-btn"
                                class='ui method button big secondary'><?php __('Buy With Dividends'); ?></button>
                        <p><?php __('Uses your dividend balance to buy more tokens at the current rate.'); ?></p>
                    </div>
                    <div class="column">
                        <button id="withdraw-btn"
                                class='ui method button big secondary'><?php __('Withdraw'); ?></button>
                        <p><?php __('Withdraw your dividends balance back into your Ethereum wallet.'); ?></p>
                    </div>
                </div>
            </div>
            <div class="ui five wide column chat-box" style="display: none;">
                <iframe src="https://titanembeds.com/embed/408119545379815434?defaultchannel=408119545379815438"
                        height="700" width="100%" frameborder="0"></iframe>
            </div>
        </div>
    </div>

    <div id="metamask-not-found" style="padding: 15px; display: none">
        <h2 class="float-left"><?php __('MetaMask Not Found'); ?></h2></br>
        <h3><?php __('To interact with the network, you must have <a href="https://metamask.io/">Metamask</a> installed and setup.'); ?></h3>
    </div>

    <div id="metamask-not-logged-in" style="padding: 15px; display: none">
        <h2 class="float-left"><?php __('Please login to MetaMask'); ?></h2></br>
        <h3><?php __('You must login to MetaMask to continue'); ?></h3>
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
  })
</script>
<script type="text/javascript" src="js/poh.js"></script>
