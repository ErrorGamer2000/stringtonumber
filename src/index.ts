const chars: string =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%()*+,-./\\:;=?@[]^_`{|}~\"'&<> ";

function encode(str: string = ""): string {
  let r: string = "";
  for (let l of String(str)) {
    if (chars.indexOf(l) < 0) {
      r += String(chars.length + 1);
      continue;
    }
    r +=
      chars.indexOf(l) + 1 < 10
        ? `0${chars.indexOf(l) + 1}`
        : `${chars.indexOf(l) + 1}`;
  }
  return `${r}00`;
}

function decode(num: number | string, startLetter: number = 0): string {
  let r: string = "";
  let t: any | null[] = String(num)
    .slice(startLetter)
    .match(/[0-9][0-9]?/g);
  for (let c of t) {
    if (c === "00") {
      return r;
    }
    if (c > chars.length) {
      continue;
    }
    r += chars[c - 1];
  }
  return r;
}

export { encode, decode };
