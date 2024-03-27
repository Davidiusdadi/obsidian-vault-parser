import { Stats } from "fs";
export declare const getFileName: (filepath: string) => {
    name: string;
    ext: string;
};
export declare const readFile: (path: string) => Promise<{
    contents: string;
    stats: Stats;
}>;
export declare const parseWikiLinks: (content: string) => string[];
