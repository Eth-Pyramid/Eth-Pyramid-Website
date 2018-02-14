<?php
include('include/lang.php');
include('include/head.php');
?>

<?php include('include/token_sale.php'); ?>

<div class="ui container">
    <h3 class="ui horizontal divider"><?php __('EthPyramid - Historical Chart (Sell Price)'); ?></h3>
    <iframe src="https://powhchart.com/graph_hotlink.html?assetId=ethpyramid&yaxis_min=0.06"
            style="width:100%; height:575px; overflow:hidden;" scrolling="no" frameborder="0"></iframe>
    <span style="font-weight:100;"><?php __('Created by:'); ?></span> <a
            href="https://www.reddit.com/user/JuiceInNuggets/" style="color:green;"
            target="_blank">/u/JuiceInNuggets</a>
    - <?php __('Donate ETH:'); ?> 0xEfFcc2Db685C04276153Bb91Ca3FC4297a44f04D
</div>

<div class="ui container vertical stripe">
    <h3 class="ui horizontal divider"><?php __('Instructions for those who want to help build the great pyramid of Ether:'); ?></h3>
    <ul>
        <li>
			<?php __('First of all, install MetaMask <a href="https://metamask.io/">here</a> and put some Ether in it.'); ?>
        </li>
        <li>
			<?php __('To buy EPY, simply click the "Buy Tokens" button and enter the amount of Ether you want to convert to EPY, based on the current Buy Price. When confirming the transaction on MetaMask, be sure to use a high enough gas price so that the price doesn\'t change drastically while the transaction is in progress.	<a href="https://ethgasstation.info/">Here</a> you can view recommended gas prices.	Buying coins will increase both the Buy Price and Sell Price with 0.2% per bought coin once the transaction is complete.'); ?>
        </li>
        <li>
			<?php __('Under "EthPyramid Token Balance" you can see how many EPY you currently own. Note that when cashing out coins, the Buy Price and Sell Price drop afterwards, decreasing the value of your (and everyone else\'s) coins by 0.2% per coin.'); ?>
        </li>
        <li>
			<?php __('Every time EPY are bought or sold, a percentage of the fee from the bought/sold coins will be divided under the current EPY holders (Dividends).'); ?>
        </li>
        <li>
			<?php __('You can move your tokens into Dividends which then is stored as Ether. To do this click on the "Sell Tokens" button - and your tokens will be transferred into Ether based upon the current sell price.'); ?>
        </li>
        <li>
			<?php __('You can also use your dividends to immediately purchase more EPY tokens by selecting "Buy With Dividends".'); ?>
        </li>
        <li>
			<?php __('To cash out your coins, click the "Withdraw" button and follow the prompts.'); ?>
        </li>
        <li>
			<?php __('<b>PLEASE SAVE THIS SOMEWHERE SAFE:</b> If for any reason this website goes down, you can open up a transaction through Metamask, Send 0 Ether with a 150k Gas Limit to the Contract at "0x2fa0ac498d01632f959d3c18e38f4390b005e200" and send "0xb1e35242" under additional data for a personal exit scheme. This is the getMeOutOfHere() function on the contract and will cash you out of all tokens and dividends.'); ?>
        </li>
    </ul>
</div>

<?php include('include/foot.php'); ?>
