import { WebPlugin } from '@capacitor/core';
export class CapacitorPassToWalletWeb extends WebPlugin {
    addMultipleToWallet(options) {
        console.log(options.base64, 'Method not implemente on web.');
        throw new Error('Method not implemented.');
    }
    addToWallet(options) {
        console.log(options.base64, 'Method not implemente on web.');
        throw new Error('Method not implemented on web.');
    }
}
//# sourceMappingURL=web.js.map