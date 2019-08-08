import { describe, it } from "mocha";
import { expect } from "chai";
import { stringUtil } from "../lib";

describe("test stringUtil", () => {
  it("test trim method", () => {
    const val = stringUtil.trim(" a b c ");

    expect(val).is.equal("abc");
  });
});
