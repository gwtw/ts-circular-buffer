import { assert } from 'chai';
import { TestCircularBuffer } from './testUtils';

describe('get', () => {
  it('should throw when out of bounds', () => {
    const buffer = new TestCircularBuffer(2);
    assert.throws(() => buffer.get(-1));
    assert.throws(() => buffer.get(0));
    buffer.push(1);
    buffer.push(2);
    assert.throws(() => buffer.get(-1));
    assert.throws(() => buffer.get(2));
  });

  it('should get the right value', () => {
    const buffer = new TestCircularBuffer(2);
    buffer.push(1);
    buffer.push(2);
    assert.equal(buffer.get(0), 1);
    assert.equal(buffer.get(1), 2);
  });
});
