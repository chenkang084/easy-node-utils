import { describe, it } from "mocha";
import { expect } from "chai";
import { typeCheckUtil } from "../lib";

describe("test typeCheck.util.ts", () => {
  it("test isObject method", () => {
    expect(typeCheckUtil.isObject(1000)).to.equal(false);
    expect(typeCheckUtil.isObject({})).to.equal(true);
  });

  //   it("test isEmpty method", () => {
  //     expect(typeCheckUtil.isEmpty(1000)).to.equal(false);
  //     // expect(typeCheckUtil.isObject({})).to.equal(true);
  //   });
});
