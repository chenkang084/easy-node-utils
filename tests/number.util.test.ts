import { describe, it } from 'mocha';
import { expect } from 'chai';
import { numberUtil } from '../src';

describe('test number util', () => {
  it('test convertNumberWithCommas method', () => {
    const number = numberUtil.convertNumberWithCommas(100000);

    expect(number).is.not.null;
  });
});
