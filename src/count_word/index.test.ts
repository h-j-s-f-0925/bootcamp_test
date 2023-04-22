import {countWord} from "@/count_word";

// ユニットテスト
describe("countWord", () => {
  it("should return 0", () => {
    expect(countWord("", "")).toStrictEqual(new Error("Invalid input"));
  });
  it("should return 1", () => {
    expect(countWord("progate path", "progate")).toBe(1);
  });
  it("should return 2", () => {
    expect(countWord("progate", "progate")).toBe(1);
  });
});
