import glob from "glob";
import matter from "gray-matter";
import { getFileName, parseWikiLinks, readFile } from "./files";
import { VaultPage, ReadVaultOptions, Vault } from "./types";
import fs from "fs"
import path from "path"

export * from "./types";

const non_md_extensions = ['svg', 'png', 'jpeg','jpg' ,'gif'];
const non_md_extension = new RegExp(`(${non_md_extensions.join('|')})$`);

export const connectLinks = (vault: Vault) => {
  for (const file of Object.values(vault.files)) {
    const links = file.content ? parseWikiLinks(file.content).filter(
      name => vault.files[name] != null,
    ) : []

    file.links = links;
  }
};

const findFilesThatLinkTo = (vault: Vault, name: string): string[] => {
  const files = Object.values(vault.files).filter(
    f => f.name !== name && f.links.includes(name),
  );

  return files.map(f => f.name);
};

export const connectBackLinks = (vault: Vault) => {
  for (const file of Object.values(vault.files)) {
    file.backLinks = findFilesThatLinkTo(vault, file.name);
  }
};

export const removeUnpublished = (
  vault: Vault,
  isPublished: (f: VaultPage) => boolean,
) => {
  for (const file of Object.values(vault.files)) {
    if (!isPublished(file)) {
      delete vault.files[file.name];
    }
  }
};

export const parseFile = async (abs_file_path: string, abs_vault_path: string): Promise<VaultPage> => {

  const {name, ext} = getFileName(abs_file_path);

  console.log('parsed', name, ext)

  const vault_relative_path = path.relative(abs_vault_path, abs_file_path);

  if(abs_file_path.toLowerCase().match(non_md_extension) !== null) {
    console.log('parsed non-md', abs_file_path)
    const stats = await fs.promises.stat(abs_file_path);
    return {
      path: vault_relative_path,
      name,
      ext,
      links: [],
      backLinks: [],
      tags: [],
      frontMatter: {},
      content: null,
      createdAt: stats.birthtimeMs,
      updatedAt: stats.mtimeMs,
    }
  } else {
    console.log('parsed md', abs_file_path)
    const { contents: rawContent, stats } = await readFile(abs_file_path);
    const { data: frontMatter, content } = matter(rawContent);
    return {
      path: vault_relative_path,
      name,
      ext,
      links: [],
      backLinks: [],
      tags: [],
      frontMatter,
      content,
      createdAt: stats.birthtimeMs,
      updatedAt: stats.mtimeMs,
    }
  }
};

export const emptyVault = (path: string): Vault => ({
  path,
  files: {},
  config: {},
});

export const readVaultConfig = async (path: string): Promise<any> => {
  try {
    const { contents: configContents } = await readFile(
      `${path}/.obsidian/config`,
    );
    return JSON.parse(configContents);
  } catch (e) {
    // Obsidian config not found or unparsable
    return {};
  }
};

export const readVault = async (
    vault_path: string,
    options?: ReadVaultOptions,
): Promise<Vault> => {
  const abs_vault_path = path.normalize( vault_path);

  const files = await glob.glob(`${abs_vault_path}/**/*.{md,${non_md_extensions.join(',')}}`);

  const vault = emptyVault(abs_vault_path);
  vault.config = await readVaultConfig(abs_vault_path);

  for (const filePath of files) {
    const file = await parseFile(filePath, abs_vault_path);
    vault.files[file.name] = file;
  }

  if (options?.isPublished != null) {
    removeUnpublished(vault, options.isPublished);
  }

  connectLinks(vault);
  connectBackLinks(vault);

  return vault;
};
