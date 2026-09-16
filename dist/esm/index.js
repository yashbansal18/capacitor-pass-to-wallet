import { registerPlugin } from '@capacitor/core';
const CapacitorPassToWallet = registerPlugin('CapacitorPassToWallet', {
    web: () => import('./web').then(m => new m.CapacitorPassToWalletWeb()),
});
export * from './definitions';
export { CapacitorPassToWallet };
//# sourceMappingURL=index.js.map