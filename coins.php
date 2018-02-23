<?php
include('include/lang.php');
include('include/head.php');
?>
<!-- Display the countdown timer in an element -->
<p id="demo" align="center"></p>

<script>
// Set the date we're counting down to
var countDownDate = new Date("Feb 23, 2018 20:00 GMT+08:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = "<strong><br>Hold onto your jimmies, everyone: " + hours + "h "
  + minutes + "m " + seconds + "s</strong>";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>

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
