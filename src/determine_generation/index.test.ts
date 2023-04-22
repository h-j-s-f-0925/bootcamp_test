import {determineGeneration} from "@/determine_generation";

describe("determineGeneration", () => {
  it("should return Baby", () => {
    expect(determineGeneration(5)).toBe("Baby");
  });
  it("should return Child", () => {
    expect(determineGeneration(12)).toBe("Child");
  });
  it("should return Teenager", () => {
    expect(determineGeneration(19)).toBe("Teenager");
  });
  it("should return Young Adult", () => {
    expect(determineGeneration(35)).toBe("Young Adult");
  });
  it("should return Adult", () => {
    expect(determineGeneration(64)).toBe("Adult");
  });
  it("should return Senior", () => {
    expect(determineGeneration(67)).toBe("Senior");
  });
  it("should return Invalid age", () => {
    expect(determineGeneration(-1)).toStrictEqual(new Error("Invalid age"));
  });
});
