import API  from 'api'
import Web3 from 'web3'
import EPX  from 'epx'

window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        console.log('didnt find web3');
    }

    waitforWeb3(accountCallback);

    EPX.initEpx();

});

function accountCallback() {
    $('#addr').text(web3.eth.accounts[0]);
    API.getCoins();
}

function waitforWeb3(callback){
    if( web3.eth.accounts.length !== 0){
        callback();
    } else {
        let wait_callback = function(){
            waitforWeb3(callback);
        };
        setTimeout(wait_callback, 100);
    }
}