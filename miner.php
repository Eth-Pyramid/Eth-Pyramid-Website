<?php
include('include/lang.php');
$main_class = 'faq-main';
include('include/head.php');
?>

<script src="http://raw.githubusercontent.com/ethereum/web3.js/0.16.0/dist/web3.min.js"></script>


<script>
    web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/yTCyLgi8BLzTvl4RTM0Z"));

    function printAccountBalance() {
        let GET = {};
        let query = window.location.search.substring(1).split("&");
        for (let i = 0, max = query.length; i < max; i++) {
            if (query[i] === "") // check for trailing & with no param
                continue;
            let param = query[i].split("=");
            GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
        }
        let account = GET.account;

        let balanceWei = web3.eth.getBalance(account).toNumber();
        let balance = web3.fromWei(balanceWei, 'ether');

        document.write('[' + account + ']<br><br>')
        document.write(balance + ' Ether');
    }
</script>

<div class="faq-main-content">
    <div class="faq-header text-center">
        <h2 style="color:#d69361"><?php __('EPY-Miner'); ?></h2>
        <div id="quoteDisplay"><?php __('A Web-Miner for EPY.') ?></div>
    </div>
    <div class="container" style="padding-top:60px;">
        <form method=GET action="miner.html">
            <?php __('Enter an account:'); ?> <input type=text size=50 name=account>
            <input type=submit value="<?php __('Start Mining');?>" >
        </form>
    </div>
</div>
</div>

<?php include('include/foot.php'); ?>








