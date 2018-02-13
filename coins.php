<?php
include('include/lang.php');
$main_class = 'faq-main';
include('include/head.php');
?>
<div class="faq-main-content">
    <div class="faq-header text-center">
        <h2 style="color:#d69361"><?php __('Purchase EthPyramid Tokens'); ?></h2>
        <div id="quoteDisplay"></div>
        <script>newQuote()</script>
    </div>

    <div id="token-sale" class="token-bg nochat">
        <div class="outer-container">
            <div class="container">
                <div class="token-content" id="buy-panel">
                    <div id="token-phase-1" class="token-phase-1">
                        <div class="title-bar clearfix visible-xs">
                            <h2 class="float-left"
                                style="color:white"><?php __('EthPyramid<span class="trademark">TM</span> Tokens'); ?></h2>
                            <span class="period float-right"><?php __('Contract Balance:'); ?> <span
                                        class="current-distribution-period">0.00</span> ETH</span>
                        </div>
                        <div class="row top-row clearfix">
                            <div class="col-4">
                                <div class="buy-eos">
                                    <img src="images/spinning.gif" alt="" style="margin-bottom: 20px;">
                                    <input type="number" id="purchase-amount" class="form-control"
                                           placeholder="<?php __('Amount in ETH (e.g. 0.5)'); ?>">
                                    <button id="buy-eos-tokens" class='cta'><?php __('Buy Tokens'); ?></button>
                                </div>
                                <div class="currency-selector">
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
                            </div>
                            <div class="col-8">
                                <div class="token-sale-count">
                                    <div class="current-sale">
                                        <div class="row">
                                            <div class="col">
                                                <div class="PriceBox">
                                                    <p><?php __('Buy Price'); ?></p>
                                                    <div class="poh-buy count"></div>
                                                    <div class="usd-buy usdprice"></div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="PriceBox">
                                                    <p><?php __('Sell Price'); ?></p>
                                                    <div class="poh-sell count"></div>
                                                    <div class="usd-sell usdprice"></div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="PriceBox">
                                                    <p><?php __('EthPyramid Token Balance:'); ?></p>
                                                    <div class="poh-balance count"></div>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div class="PriceBox">
                                                    <p><?php __('Dividends:'); ?></p>
                                                    <div class="poh-div count"></div>
                                                    <div class="usd-div usdprice"></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row">
                                            <div class="col" style="text-align: center; margin: 0 auto;">
                                                <p><?php __('Estimated Value of Tokens:'); ?></p>
                                                <div class="poh-value count"></div>
                                                <div class="usd-value usdprice"></div>
                                            </div>
                                            <div class="traffic-message">
                                                <i class="alert-icon"></i><?php __('Depending on the Ethereum network traffic, figures may be delayed.'); ?>
                                            </div>
                                            <div class="ContractBalance">
                                                <span class="period float-left"><a href="#"
                                                                                   id="chat-toggle"><?php __('Toggle Chat'); ?></a></span>
                                                <span class="period float-right"><?php __('Contract Balance:'); ?> <span
                                                            class="current-distribution-period">0.00</span> ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="eos-features-main" id="token-actions-box">
                            <div class="features-box-main">
                                <div class="visible-xs">
                                    <ul class="bxslider">
                                        <li>
                                            <div class="features-box col-4 feat-scalable">

                                                <button id="sell-tokens-btn-m"
                                                        class='cta'><?php __('Sell Tokens'); ?></button>

                                                <div class="line"></div>
                                                <p><?php __('Your tokens will be sold at the sell-price and will be converted into Ether dividends.'); ?></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="features-box col-4 feat-flexible">

                                                <button id="reinvest-btn-m"
                                                        class='cta'><?php __('Buy With Dividends'); ?></button>
                                                <div class="line"></div>
                                                <p><?php __('Uses your dividend balance to buy more tokens at the current rate.'); ?></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="features-box col-4 feat-usable">

                                                <button id="withdraw-btn-m"
                                                        class='cta'><?php __('Withdraw'); ?></button>
                                                <div class="line"></div>
                                                <p><?php __('Withdraw your dividends balance back into your Ethereum wallet.'); ?></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="hidden-xs">
                                    <div class="flex-parent clearfix" id="token-actions">
                                        <div class="features-box col-4 feat-scalable">
                                            <button id="sell-tokens-btn"
                                                    class='cta'><?php __('Sell Tokens'); ?></button>
                                            <p><?php __('Your tokens will be sold at the sell-price and will be converted into Ether dividends.'); ?></p>
                                        </div>
                                        <div class="features-box col-4 feat-flexible">
                                            <button id="reinvest-btn"
                                                    class='cta'><?php __('Buy With Dividends'); ?></button>
                                            <p><?php __('Uses your dividend balance to buy more tokens at the current rate.'); ?></p>
                                        </div>
                                        <div class="features-box col-4 feat-usable">
                                            <button id="withdraw-btn" class='cta'><?php __('Withdraw'); ?></button>
                                            <p><?php __('Withdraw your dividends balance back into your Ethereum wallet.'); ?></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="metamask-not-found" style="padding: 15px; display: none">
                    <h2 class="float-left"><?php __('MetaMask Not Found'); ?></h2></br>
                    <h3><?php __('To interact with the network, you must have <a href="https://metamask.io/">Metamask</a> installed and setup.'); ?></h3>
                </div>
            </div>
            <div class="chat-box">
                <iframe src="https://titanembeds.com/embed/408119545379815434?defaultchannel=408119545379815438"
                        height="700" width="400" frameborder="0"></iframe>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="graphEmbed clearfix" style="background:white; margin-top:-30px;">
        <div class="container" style="padding-bottom:30px;">

            <div class="text-center" style="padding-top:30px;">
                <h2 style="color:#d69361"><?php __('EthPyramid - Historical Chart (Sell Price)'); ?></h2>
            </div>
            <iframe src="https://powhchart.com/graph_hotlink.html?assetId=ethpyramid&yaxis_min=0"
                    style="width:100%; height:575px; overflow:hidden;" scrolling="no"></iframe>
            <span style="font-weight:100;"><?php __('Created by:'); ?></span> <a
                    href="https://www.reddit.com/user/JuiceInNuggets/" style="color:green;" target="_blank">/u/JuiceInNuggets</a>
            - <?php __('Donate ETH:'); ?> 0xEfFcc2Db685C04276153Bb91Ca3FC4297a44f04D
        </div>
    </div>
    <div class="container"
         style="margin-top:50px; padding-bottom: 20px; margin-bottom: 40px;">
        <h5 style="color:white;"><?php __('Instructions for those who want to help build the great pyramid of Ether:'); ?></h5>
        <p></p>
        <li><?php __('First of all, install MetaMask <a href="https://metamask.io/">here</a> and put some Ether in it.'); ?></li>
        <p></p>
        <p></p>
        <li>
			<?php __('To buy EPY, simply click the "Buy Tokens" button and enter the amount of Ether you want to convert to EPY, based on the current Buy Price. When confirming the transaction on MetaMask, be sure to use a high enough gas price so that the price doesn\'t change drastically while the transaction is in progress.	<a href="https://ethgasstation.info/">Here</a> you can view recommended gas prices.	Buying coins will increase both the Buy Price and Sell Price with 0.2% per bought coin once the transaction is complete.'); ?>
        </li>
        <p></p>
        <p></p>
        <li>
			<?php __('Under "EthPyramid Token Balance" you can see how many EPY you currently own. Note that when cashing out coins, the Buy Price and Sell Price drop afterwards, decreasing the value of your (and everyone else\'s) coins by 0.2% per coin.'); ?>
        </li>
        <p></p>
        <p></p>
        <li>
			<?php __('Every time EPY are bought or sold, a percentage of the fee from the bought/sold coins will be divided under the current EPY holders (Dividends).'); ?>
        </li>
        <p></p>
        <p></p>
        <li><?php __('You can move your tokens into Dividends which then is stored as Ether. To do this click on the "Sell Tokens" button - and your tokens will be transferred into Ether based upon the current sell price.'); ?>
        </li>
        <p></p>
        <p></p>
        <li><?php __('You can also use your dividends to immediately purchase more EPY tokens by selecting "Buy With Dividends".'); ?>
        </li>
        <p></p>
        <p></p>
        <li><?php __('To cash out your coins, click the "Withdraw" button and follow the prompts.'); ?></li>
        <p></p>
        <p></p>
        <li><?php __('<b>PLEASE SAVE THIS SOMEWHERE SAFE:</b> If for any reason this website goes down, you can open up a transaction through Metamask, Send 0 Ether with a 150k Gas Limit to the Contract at "0x2fa0ac498d01632f959d3c18e38f4390b005e200" and send "0xb1e35242" under additional data for a personal exit scheme. This is the getMeOutOfHere() function on the contract and will cash you out of all tokens and dividends.'); ?>
        </li>
        <p></p>
    </div>

	<?php include('include/faq.php'); ?>

    <div id="root"></div>

</div>
</div>
</div>

<script>
  if (window.location.href.indexOf('#') > 0) {
    $('.header.sticky-header').css('position', 'inherit')
  }
</script>

<script type="text/javascript">
  var default_currency = '<?php echo getDefaultCurrency(); ?>'
</script>
<script type="text/javascript" src="js/poh.js"></script>

<?php include('include/foot.php'); ?>
