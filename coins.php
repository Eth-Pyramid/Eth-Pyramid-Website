<?php
include('include/lang.php');
include('include/head.php');
?>

<p align="center">The world is no longer the way it used to be, mmm no no no!</p>

<?php include('include/token_sale.php'); ?>

<div class="ui container">
    <h3 class="ui horizontal divider"><?php __('chart.heading'); ?></h3>
	<?php include('include/chart.php'); ?>
</div>

<div class="ui container vertical stripe">
    <h3 class="ui horizontal divider"><?php __('instructions.heading'); ?></h3>
    <ul>
        <li><?php __('instructions.metamask'); ?></li>
        <li><?php __('instructions.purchase'); ?></li>
        <li><?php __('instructions.your-epy'); ?></li>
        <li><?php __('instructions.get-divs'); ?></li>
        <li><?php __('instructions.sell-epy'); ?></li>
        <li><?php __('instructions.pay-divs'); ?></li>
        <li><?php __('instructions.withdraw'); ?></li>
        <li><?php __('instructions.getmeout'); ?></li>
    </ul>
</div>

<?php include('include/foot.php'); ?>
