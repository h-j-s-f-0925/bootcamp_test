export const countWord = (text: string, targetWord: string): number | Error => {
  if (!text || !targetWord) {
    // return new Error("Invalid input");
    return new Error("Invalid input");
  }

  //正規表現 /\\s+/ に一致する文字列を区切り文字として、文字列を配列に分割する
  const words = text.toLowerCase().split(/\s+/);
  const target = targetWord.toLowerCase();
  let count = 0;

  for (const word of words) {
    if (word === target) {
      count++;
    }
  }

  return count;
};

// \s : 空白文字に一致する特殊文字
// + : 直前のパターン（ここでは \s）が1回以上繰り返されることを表す量指定子
// /\s+/ は、1つ以上の空白文字に一致する正規表現パターンを表します。
