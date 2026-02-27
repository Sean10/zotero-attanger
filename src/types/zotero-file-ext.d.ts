// 声明合并：补充 zotero-types 1.3.x 尚未暴露的 Zotero.File.createSymlink
declare namespace _ZoteroTypes {
  interface File {
    createSymlink(sourcePath: string, targetPath: string): boolean;
  }
}
