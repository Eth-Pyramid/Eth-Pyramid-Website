
web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/MEDIUMTUTORIAL"));

function printAccountBalance(account) {
    console.log(account);
    web3.eth.getBalance(account).then(function (fulfilled) {
        document.getElementById("addressDiv").style.display='none';
        //document.write('[' + account + ']<br><br>')
        //document.write(web3.utils.fromWei(fulfilled, 'ether') + ' Ether');
    });

}