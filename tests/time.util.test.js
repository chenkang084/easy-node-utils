import { describe, it } from "mocha";
import { expect } from "chai";
import { timeUtil } from "../lib";

describe("test time util", () => {
  it("test convertTime method", () => {
    const convertTime = timeUtil.convertMinutesToDayHourMinute(1450);

    expect(convertTime).to.equal("1 day 10 minutes");
  });

  it("test convertDateToYYYYMMDD method", () => {
    const convertDate = timeUtil.convertDateToYYYYMMDD("2019-11-11");

    expect(convertDate).to.equal("20191111");
  });
});
