import APP from './app'

function httpGetAsync(theUrl, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);

}

function getCoins() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://shapeshift.io/getcoins');
    request.onreadystatechange = APP.coinsCallback;
    request.send();
}

function getInfo(coin) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://shapeshift.io/marketInfo/' + coin + '_eth');
    request.onreadystatechange = APP.infoCallback;
    request.send();
}

function newTransaction(coin, addr, returnAddr) {
    let request = new XMLHttpRequest();
    request.open('POST', 'https://shapeshift.io/shift');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = APP.transactionCallback;

    let body = {
        'withdrawal': addr,
        'pair': coin + '_eth'
    };

    if (returnAddr !== undefined || returnAddr === "") {
        body.returnAddress = returnAddr;
    }

    request.send(JSON.stringify(body));
}

function getTxStatus(addr) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://shapeshift.io/txStat/' + addr);
    request.onreadystatechange = APP.statusCallback;
    request.send();
}


export default {getCoins, newTransaction, getInfo, getTxStatus};