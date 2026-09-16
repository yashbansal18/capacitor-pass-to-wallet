import { WebPlugin } from '@capacitor/core';
import type { CapacitorPassToWalletPlugin } from './definitions';
export declare class CapacitorPassToWalletWeb extends WebPlugin implements CapacitorPassToWalletPlugin {
    addMultipleToWallet(options: {
        base64: string[];
    }): Promise<{
        message: string;
    }>;
    addToWallet(options: {
        base64: string;
    }): Promise<{
        message: string;
    }>;
}
