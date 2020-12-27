import path from "path";
import { getFileName, parseWikiLinks } from "../src/files";
import { readVault } from "../src/index";

describe("vault", () => {
  it("parse vault", async () => {
    const vaultPath = path.resolve(__dirname, "../test-vault");
    const vault = await readVault(vaultPath);

    expect([...vault.files.hello.links]).toEqual(["world"]);
    expect([...vault.files.hello.backLinks]).toEqual(["index", "world"]);
  });
});

describe("files", () => {
  it("gets filename from filepath", () => {
    expect(getFileName("./hello.md")).toBe("hello");
    expect(getFileName("./foo/bar.md")).toBe("bar");
    expect(getFileName("/hello")).toBe("hello");
    expect(getFileName("/foo/bar")).toBe("bar");
    expect(getFileName("/foo/bar.md")).toBe("bar");
  });

  it("parses wikilinks", () => {
    expect(parseWikiLinks("hello")).toEqual([]);
    expect(parseWikiLinks("[[hello]]")).toEqual(["hello"]);
    expect(parseWikiLinks("hello [[world]]")).toEqual(["world"]);
    expect(parseWikiLinks("foo [[hello-world-123]] bar")).toEqual([
      "hello-world-123",
    ]);

    expect(
      parseWikiLinks(`
Hello [[world]] this is a test

Woot [[woot]].
    `),
    ).toEqual(["world", "woot"]);
  });
});
