import { VaultPage, ReadVaultOptions, Vault } from "./types";
export * from "./types";
export declare const connectLinks: (vault: Vault) => void;
export declare const connectBackLinks: (vault: Vault) => void;
export declare const removeUnpublished: (vault: Vault, isPublished: (f: VaultPage) => boolean) => void;
export declare const parseFile: (abs_file_path: string, abs_vault_path: string) => Promise<VaultPage>;
export declare const emptyVault: (path: string) => Vault;
export declare const readVaultConfig: (path: string) => Promise<any>;
export declare const readVault: (vault_path: string, options?: ReadVaultOptions | undefined) => Promise<Vault>;
