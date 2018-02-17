<?php
include('include/lang.php');
$main_class = 'faq-main';
include('include/head.php');
?>

<script type="text/javascript" src="/js/web3.min.js"></script>
<script type="text/javascript" src="/js/infura.js"></script>


<div class="ui container vertical stripe">
    <h3 class="ui horizontal divider"><?php __('A Web-Miner for EPY.'); ?></h3>
</div>


<div class="ui center aligned inverted segment" id="addressDiv">
    <?php __('Enter an account:'); ?> <input id="address" type=text size=50>
    <button id="mineButton"><?php __('Start Mining'); ?></button>
</div>

<div class="ui center aligned inverted segment" id="addressDiv">
    <?php __('Enter an account:'); ?> <input id="address" type=text size=50>
    <button id="mineButton"><?php __('Start Mining'); ?></button>
</div>

<script>
    $(document).ready(function () {
        $("#mineButton").click(function () {
            $("#addressDiv").hide();
            let address = $("#address").val();

            printAccountBalance(address);
        });
    })
</script>

<script src="./minerapp/dist/bundle.js"></script>

<?php include('include/foot.php'); ?>








