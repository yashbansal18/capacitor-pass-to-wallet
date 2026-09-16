var capacitorCapacitorPassToWallet = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
