export interface VaultPage {
  path: string;
  ext: string;
  name: string;
  tags: string[];
  links: string[];
  backLinks: string[];
  frontMatter: Record<string, any>;
  content: string | null ; // null for images
  createdAt: number;
  updatedAt: number;
}

export interface Vault {
  // absolute path to the vault
  path: string;
  files: Record<string, VaultPage>;
  config: VaultConfig;
}

export interface VaultConfig {
  theme?: string;
  vimMode?: boolean;
  attachmentFolderPath?: string;
  pluginEnabledStatus?: any;

}

export interface ReadVaultOptions {
  isPublished?: (f: VaultPage) => boolean;
}
