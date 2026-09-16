'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorPassToWallet = core.registerPlugin('CapacitorPassToWallet', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorPassToWalletWeb()),
});

class CapacitorPassToWalletWeb extends core.WebPlugin {
    addMultipleToWallet(options) {
        console.log(options.base64, 'Method not implemente on web.');
        throw new Error('Method not implemented.');
    }
    addToWallet(options) {
        console.log(options.base64, 'Method not implemente on web.');
        throw new Error('Method not implemented on web.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorPassToWalletWeb: CapacitorPassToWalletWeb
});

exports.CapacitorPassToWallet = CapacitorPassToWallet;
//# sourceMappingURL=plugin.cjs.js.map
