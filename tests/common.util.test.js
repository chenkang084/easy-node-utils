import { describe, it } from "mocha";
import { expect } from "chai";
import { commonUtil } from "../lib";

describe("test common util", () => {
  it("test sleep method", async () => {
    await commonUtil.sleep(4000);
  });
});
