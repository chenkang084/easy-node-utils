import { describe, it } from "mocha";
import { expect } from "chai";
import { timeUtil } from "../lib";

describe("test time util", () => {
  it("test convertTime method", () => {
    const convertTime = timeUtil.convertMinutesToDayHourMinute();

    expect(convertTime).is.not.null;
  });
});
