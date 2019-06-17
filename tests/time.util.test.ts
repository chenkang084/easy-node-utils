import { describe, it } from 'mocha';
import { expect } from 'chai';
import { timeUtil } from '../src';

describe('test time util', () => {
  it('test convertTime method', () => {
    const convertTime = timeUtil.convertMinutesToDayHourMinute(1000);

    expect(convertTime).is.not.null;
  });
});
