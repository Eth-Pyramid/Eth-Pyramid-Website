<?php
include('include/lang.php');
include('include/head.php');
?>

<div class="faq-main-content whitepaper">
    <div class="ui container vertical stripe">
        <h2><?php __('wpaper.heading'); ?></h2>
        <p style="text-align: center; margin: 3em;">
            <img src="../images/sneky_phoenix.png">
        </p>
        <h3 class="ui horizontal divider">
            <?php __('wpaper.content.preface.head'); ?>
        </h3>
        <p><?php __('wpaper.content.preface.text'); ?></p>
        <h4><?php __('wpaper.content.synergy.head'); ?></h4>
        <p><?php __('wpaper.content.synergy.text'); ?></p>
        <h4><?php __('wpaper.content.hi-tech.head'); ?></h4>
        <p><?php __('wpaper.content.hi-tech.text'); ?></p>
        <h4><?php __('wpaper.content.chances.head'); ?></h4>
        <p><?php __('wpaper.content.chances.text'); ?></p>
        <h4><?php __('wpaper.content.mastery.head'); ?></h4>
        <p><?php __('wpaper.content.mastery.text'); ?></p>
        <h4><?php __('wpaper.content.welcome.head'); ?></h4>
        <p><?php __('wpaper.content.welcome.text'); ?></p>
        <p><?php __('wpaper.closing'); ?></p>
    </div>

    <div class="faq">
        <div class="ui container">
            <h1 class="ui header inverted center aligned"><?php __('faq.heading'); ?></h1>
			<?php include('include/faq.php'); ?>
        </div>
    </div>

    <div class="ui container vertical stripe">
		<h3 class="ui header"><?php __('wpaper.footer.exit.heading'); ?></h3>
        <p><?php __('wpaper.footer.exit.content'); ?></p>
        <h3 class="ui header"><?php __('wpaper.footer.dev-stuff.heading'); ?></h3>
        <p><?php __('wpaper.footer.dev-stuff.content'); ?></p>
        <p><?php __('wpaper.footer.dev-stuff.testing'); ?></p>
    </div>
</div>

<?php include('include/foot.php'); ?>
