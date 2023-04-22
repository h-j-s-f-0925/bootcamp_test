import {createUser} from "@/api/create_user";

import {resetDB} from "@/api/db/reset_db";
import {databaseManager} from "@/api/db";
import {User} from "./models/user";

describe("createUser", () => {
  beforeEach(async () => {
    const db = await databaseManager.getInstance();
    await resetDB(db);
  });
  test("success and find user", async () => {
    await createUser("test name", "test@email");
    const user = await User.find(1);
    if (user) {
      expect(user.name).toBe("test name");
      expect(user.email).toBe("test@email");
    }
  });
  it("falil and error", async () => {
    expect(await createUser("", "")).toEqual(Error("Invalid input"));
  });
});
