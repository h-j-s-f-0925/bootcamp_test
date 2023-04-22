import {getUserName} from "@/api/get_user_name";
import {fetchUser} from "@/api/fetch_user";

jest.mock("@/api/fetch_user", () => {
  return {
    fetchUser: jest.fn().mockImplementation((id: number) => {
      return id === 1
        ? Promise.resolve({
            name: "Mock User Name",
          })
        : Promise.resolve(new Error("User not found"));
    }),
  };
});

describe("getUserName", () => {
  //テストの実行前に毎回呼び出される関数
  beforeEach(() => {
    //前回のテストで使われたモックの記録を消去
    jest.clearAllMocks();
  });
  test("should return Mock user name", async () => {
    const result = await getUserName(1);
    expect(result).toBe("Mock User Name");
    // fetchUser関数が1回だけ呼び出されたことを検証
    expect(fetchUser).toHaveBeenCalledTimes(1);
  });
  it("should return user", async () => {
    const result = await getUserName(2);
    expect(result).toEqual(new Error("User not found"));
  });
});
