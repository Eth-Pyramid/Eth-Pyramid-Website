<?php
include('include/lang.php');
$showBanner = true;
include('include/head-home.php');
?>

<div class="ui container vertical stripe">
    <h1 class="ui header center aligned"><?php __('The Most Powerful & Decentralized Pyramid Yet'); ?></h1>
    <div class="ui vertical stripe features">
        <div class="ui equal width stackable grid">
            <div class="center aligned row">
                <div class="column">
                    <div class="icon-main">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3><?php __('Pyramid Technology'); ?></h3>
                    <hr class="line"/>
                    <p><?php __('When someone purchases or sells an EthPyramid token (EPY), 10% of the buy/sell price is split by the total number of tokens and given as locked-in dividends (priced in Ether) to all previous buyers based on how many EPY tokens they own.'); ?></p>
                </div>
                <div class="column">
                    <div class="icon-main">
                        <i class="fas fa-exchange-alt"></i>
                    </div>
                    <h3><?php __('Dividends'); ?></h3>
                    <hr class="line"/>
                    <p><?php __('10% of every <strong>buy and sell</strong> will be rewarded to token holders. Strong hands will be rewarded through every crash and pump. The smart contract, unlike other schemes, will allow you to directly convert your dividends back into tokens, increasing your ability to earn more dividends.'); ?></p>
                </div>
                <div class="column">
                    <div class="icon-main">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3><?php __('Forever'); ?></h3>
                    <hr class="line"/>
                    <p><?php __('Seriously, no premine, no self destruct, no exit scam. This contract will fluctuate in price and pay out dividends until the Ethereum network dies. At any time, you can sell your tokens back to the smart contract for 80% of the current price, or withdraw/convert the dividends you\'ve accumulated!'); ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="faq">
    <div class="ui container">
        <h1 class="ui header inverted center aligned"><?php __('Frequently Asked Questions'); ?></h1>
		<?php include('include/faq.php'); ?>
    </div>
</div>

<?php include('include/foot.php'); ?>
