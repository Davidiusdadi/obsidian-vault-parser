import path from "path";
import fs, { Stats } from "fs";

export const getFileName = (filepath: string) => {
  const parsed = path.parse(filepath)

  let name = parsed.name.toLowerCase()
  let ext = parsed.ext.toLowerCase()

  if(ext !== '.md') {
    name = name + ext
  }

  return {
    name,
    ext
  }
}


export const readFile = async (
  path: string,
): Promise<{ contents: string; stats: Stats }> => {
  const contents = await fs.promises.readFile(path, "utf-8");
  const stats = await fs.promises.stat(path);
  return { contents, stats };
};

export const parseWikiLinks = (content: string): string[] => {
  const linkRegex = /\[\[([a-zA-Z0-9\s-]+\|?[a-zA-Z0-9\s]*)\]\]/g;
  const matches = Array.from(content.matchAll(linkRegex));
  return matches.map(m => {
    const splits = m[1].split("|");
    return splits[0].toLowerCase();
  });
};
