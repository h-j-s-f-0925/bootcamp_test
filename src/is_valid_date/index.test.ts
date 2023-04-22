import {isValidDate} from "@/is_valid_date";

describe("isValidDate", () => {
  it("should year=true", () => {
    expect(isValidDate(2023, 4, 22)).toBe(true);
  });
});
