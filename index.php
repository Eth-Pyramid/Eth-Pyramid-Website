<?php
include('include/lang.php');
$showBanner = true;
include('include/head-home.php');
?>

<div class="ui container vertical stripe">
    <h1 class="ui header center aligned"><?php __('index.heading'); ?></h1>
    <div class="ui vertical stripe features">
        <div class="ui equal width stackable grid">
            <div class="center aligned row">
                <div class="column">
                    <div class="icon-main">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3><?php __('index.pyramids.heading'); ?></h3>
                    <hr class="line"/>
                    <p><?php __('index.pyramids.content'); ?></p>
                </div>
                <div class="column">
                    <div class="icon-main">
                        <i class="fas fa-exchange-alt"></i>
                    </div>
                    <h3><?php __('index.dividends.heading'); ?></h3>
                    <hr class="line"/>
                    <p><?php __('index.dividends.content'); ?></p>
                </div>
                <div class="column">
                    <div class="icon-main">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3><?php __('index.forever.heading'); ?></h3>
                    <hr class="line"/>
                    <p><?php __('index.forever.content'); ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="faq">
    <div class="ui container">
        <h1 class="ui header inverted center aligned"><?php __('faq.heading'); ?></h1>
		<?php include('include/faq.php'); ?>
    </div>
</div>

<?php include('include/foot.php'); ?>
