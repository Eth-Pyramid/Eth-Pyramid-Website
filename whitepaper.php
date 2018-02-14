<?php
include('include/lang.php');
include('include/head.php');
?>

<div class="faq-main-content whitepaper">
    <div class="ui container vertical stripe">
        <h2><?php __('EthPyramid - A no-bullshit, transparent, self-sustaining pyramid scheme.'); ?></h2>
        <p style="text-align: center; margin: 3em;">
            <img src="https://beta.ethpyramid.com/images/sneky.png">
        </p>
        <h3 class="ui horizontal divider"><?php __('We\'re dumb, and you might be too'); ?></h3>
        <p>
			<?php __('Have you ever wanted to build an entire pyramid structure by hand, with no tools? We haven\'t either. That\'s why we are calling upon all of you out there in the cryptosphere to help us build this wonder together. And keep building. Until we reach the moon. Until you can stand atop a pile of your own dividends with a smile on your face as large as Carlos Matos\' on that fateful day. Any place you want to dream of, where your soul is free - that is where this pyramid of love can take you. That, or a nice comfy place under the bridge.'); ?>
        </p>
        <h4><?php __('Synergy'); ?></h4>
        <p>
			<?php __('Our team is composed of approximately a dozen of the most enthusiastically greedy and unhinged code-monkeys that happened to be around at the time. They play together, work together, build together. They truly are the best we could find. Best at what, we aren\'t quite sure, but everybody is good at something. Even if that something is losing money. By utilizing the synergy and blithe indifference of the crypto community, in their desperate pursuit for a car that gets 6 miles per gallon (burning beautiful, clean coal), they have harnessed the true power of the Ethereum network and smart contract platform to give you ETHPYRAMID.'); ?>
        </p>
        <h4><?php __('High Technology'); ?></h4>
        <p>
			<?php __('EthPyramid is an innovative new solution to a preeminent problem of modern blockchain functionality; that of a lack of sufficient allowance for the re-splitting of Yakubian hypercube manifold tokens when exposed to meta-tether dithering ratios after the input transaction, with included support for tesseract omni-quantification perplexion algorithms. It even solves the oracle problem, in that nobody in their right mind could\'ve predicted anyone would put real money into this clusterf**k.'); ?>
        </p>
        <h4><?php __('Unbridled Temerity'); ?></h4>
        <p>
			<?php __('We\'re confident that EthPyramid is the pinnacle in affordable, repeatable, unreliable pseudo-investment opportunities for the gullible and over-rich. What if you had just one shot, one opportunity to make it big? Shouldn\'t your narcotic-addled, sleep deprived mind jump at the chance to completely ignore it in order to throw your virtual internet money at a few lines of code instead? If you were a pothead who stumbled onto a fortune of Bitcoin in 2012, after surfing the silk road for the newest synthetic MDMA derivative fresh out of a Chinese sweat shop, why not try one last time to squander the only shred of dignity you have left! You \'re only human after all.'); ?>
        </p>
        <h4><?php __('Economic Mastery'); ?></h4>
        <p>
			<?php __('EthPyramid is irrefutably (and irremutably?) the apex of virtual money burning strategy technologies, put together in a dark room by at least several semi-skilled semi-professionals with a lot of time on their hands. No sane individual would see this for anything but what it is - a completely guarantee-free, risk-heavy, fools bargain for the desperate and the idiotic. Featuring everything from competitive interest rates to a dynamic "Get rich quick, lose it all even quicker" philosophy, there is literally no reason to not delude yourself into thinking playing this game would be a good idea. Turns out we aren\'t afraid of our own shadow, and we let our platform speak for itself. EthPyramid is the game that just keeps giving. And taking away. And giving again...'); ?>
        </p>
        <h4><?php __('Welcome to the EthPyramid'); ?></h4>
        <p>
			<?php __('Warren Buffett says that cryptocurrency is destined to fail. Maybe so. Perhaps you\'ll be one of those lucky few souls who will be able to tell their grandchildren that they were involved in the very instrument of its complete and utter annihilation. So join us today - and shield your eyes. Prepare to shove your last few remaining scraps of Ether upon the pyre of reckless madness that is ETHPYRAMID. Together we can build this thing so high that it\'s just too darned big to fail.'); ?>
        </p>
        <p>
			<?php __('Get in, or stay poor.'); ?>
        </p>
    </div>

    <div class="faq">
        <div class="ui container">
            <h1 class="ui header inverted center aligned"><?php __('Frequently Asked Questions'); ?></h1>
			<?php include('include/faq.php'); ?>
        </div>
    </div>

    <div class="ui container vertical stripe">
		<h3 class="ui header"><?php __('Important'); ?></h3>
        <p>
			<?php __('At any time you can escape the contract and withdraw all your Ether by opening up a transaction through MetaMask, sending 0 Ether with a 150,000 gas-limit to the contract and inputting "0xb1e35242" under additional data. This is the getMeOutOfHere() function on the contract and will cash you out of all tokens and dividends.'); ?>
        </p>
        <h3 class="ui header"><?php __('Boring Dev Stuff'); ?></h3>
        <p>
			<?php __('At its core, EthPyramid is based off of Dr Jochen Hoenicke\'s original published work and is an improvement upon the general concept, as well as rectifying several flaws and exploits that were discovered. PoWH\'s extraneous features and unnecessary functions were removed and the original code was also scrutinized heavily. We added safemath operations, ensuring that no underflow/overflow bug can occur. Attack vectors are very low, with almost no functions allowing for custom input of data. As such, the exploit that caused PoWH\'s downfall has no effect on our contract because, quite simply, the function it requires doesn\'t exist.'); ?>
        </p>
        <p>
			<?php __('We had over 4,000 ETH of inflow/outflow during stress-testing on the beta site (<a href=\'https://beta.ethpyramid.com/\' target=\'_blank\'>https://beta.ethpyramid.com/</a>) and no bugs have occurred. The full smart contract was released before launch and will always be able to view from our site. Our contract is well documented and clean, with no redundant code. Once the official contract is deployed, you may compare the difference between the pre-released code and the published contract for yourself!'); ?>
        </p>
    </div>
</div>

<?php include('include/foot.php'); ?>
