import API from './api'
import EPX from './epx'

let generateButton = $("#generate");
let coinsDropDown = $('#coinsDropDown');
let transactionDiv = $('#transaction');
let deposit = $('#deposit')
let statusLabel = $('#status');

let coins;
let selectedCoin;

function setDropDown(items) {
    $.each(items, function (i, item) {
        coinsDropDown.append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });
    selectedCoin = $("#coinsDropDown option:selected");

}


$('select').change(function () {
    selectedCoin = $("#coinsDropDown option:selected");
    API.getInfo($(this).val());
    transactionDiv.hide();
    deposit.empty();

    generateButton.prop("disabled", false);

});


generateButton.on('click', function () {
    API.newTransaction(selectedCoin.val(), web3.eth.accounts[0], $('#returnAddress').text());

    $(this).prop("disabled", true);
    transactionDiv.show();
    checkStatus();
});

function checkStatus() {
    if (deposit.text() !== '') {
        API.getTxStatus(deposit.text());
    }

    setTimeout(checkStatus, 100);
}


function transactionCallback() {
    if (this.readyState === 4) {
        let tx = JSON.parse(this.responseText);
        deposit.text(tx.deposit);
        //generateButton.disable(false);
    }
}

function infoCallback() {
    if (this.readyState === 4) {
        coins = JSON.parse(this.responseText);
        const rate = coins.rate;
        $('#rate').text(rate.toFixed(6) + ' ETH');
        $('#maximum').text(coins.limit.toFixed(6) + ' ' + selectedCoin.val().toUpperCase());
        $('#minimum').text(coins.minimum.toFixed(6) + ' ' + selectedCoin.val().toUpperCase());
        $('#fee').text(coins.minerFee.toFixed(6) + ' ETH');
        EPX.getBuyPrice(epxPriceCallback, rate);
    }
}

function coinsCallback() {
    if (this.readyState === 4) {
        coins = JSON.parse(this.responseText);
        let items = {};
        let i = 0;
        for (let key in coins) {
            let coin = coins[key];
            if (coin.status === 'available' && coin.name !== "Ether") {
                items['Option' + i++] = {value: coin.symbol, text: coin.name};
            }
        }
        setDropDown(items);
        API.getInfo(selectedCoin.val());
    }
}

function epxPriceCallback(price) {
    $('#epxRate').text(price.toFixed(6) + ' EPX');
}

function statusCallback() {
    if (this.readyState === 4) {
        let status = JSON.parse(this.responseText);
        //console.log(status);
        if (status.status === "no_deposits") {
            statusLabel.text("No Deposit detected")
        } else if (status.status === ("received")) {
            statusLabel.text("Transaction Recieved - Processing...");
        } else if (status.status === "complete") {
            statusLabel.text("Transaction Complete");
        } else if (status.status === "failed") {
            statusLabel.text("Transaction Failed");
        }
    }
}


export default {transactionCallback, coinsCallback, infoCallback, statusCallback};