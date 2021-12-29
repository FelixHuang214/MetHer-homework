export const dropSymbolAndLowerCase = (str) => {
  return str
    .replace(
      /[\|\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\ |\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,
      ""
    )
    .toLowerCase();
};
